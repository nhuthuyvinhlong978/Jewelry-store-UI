import React, { useEffect, useState } from 'react';
import SidebarCategory from '../../../components/SidebarCategory/SidebarCategory';
import SidebarPrice from '../../../components/SidebarPrice/SidebarPrice';
import CardProduct from '../../../components/CardProduct/CardProduct';
import PayPalButton from '../../../components/Paypal/Paypal';
import {getListProductFilter, getListsProductCategory } from '../../../api/api';
import { useHistory } from 'react-router-dom';
import clientPath from "../../../routes/ClientPath"
import queryString from "query-string";

const ShopPage = (props) => {
  const history = useHistory();
  const [category, setCategory] = useState("all");
  const [listProduct, setListProduct] = useState([]);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const query = queryString.parse(props.location.search);
  const categoryID = query.category;

  useEffect(async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if(categoryID){
      await getListsProductCategory(categoryID).then(res => {
        setListProduct(res.data);
      })
    }else{
      await getListsProductCategory("all").then(res => {
        setListProduct(res.data);
      })
    }
  },[categoryID])

  useEffect(async () => {
    if(category && maxPrice && maxPrice !== 0){
      console.log(categoryID);
      await getListProductFilter(category, minPrice, maxPrice).then(res => {
        console.log(res);
        setListProduct(res.data);
      });
    }
  }, [category, minPrice, maxPrice]);



  const show = listProduct.map((e, index) => {
    if(index > 2){
      return (
        <div className='col-4 mt-3' key={index}>
          <CardProduct data={e}/>
        </div>
      )
    }else{
      return (
        <div className='col-4' key={index}>
          <CardProduct data={e}/>
        </div>
      )
    }
  })

  const changeCategory = (category) => {
    setCategory(category);
    history.push({
      pathname: clientPath.SHOP,
      search: `?category=${category}`
    })
  }

  const handleSearchPrice = (data) => {
    setMinPrice(data[0]);
    setMaxPrice(data[1]);
  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <SidebarPrice handleSearchPrice={handleSearchPrice} />
            <SidebarCategory changeCategory={changeCategory}/>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {show}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
