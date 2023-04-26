import React, { useState, useEffect } from 'react';
import Banner from '../../../components/Banner/Banner';
import Introduce from '../../../components/Introduce/Introduce';
import CardProduct from '../../../components/CardProduct/CardProduct';
import BannerSmall from '../../../components/Banner/BannerSmall';
import Tab from '../../../components/Tab/Tab';
import { getListsProductType } from '../../../api/api';

const HomePage = () => {
  const [selectNew, setSelectNew] = useState();
  const [selectSale, setSelectSale] = useState();
  const [categoryNew, setCategoryNew] = useState([]);
  const [categorySale, setCategorySale] = useState([]);

  useEffect(async () => {
    if(selectNew){
      await getListsProductType(selectNew, "new").then(res => {
        setCategoryNew(res.data);
      })
     
    }
  },[selectNew])

  useEffect(async () => {
    if(selectSale){
      await getListsProductType(selectSale, "sale").then(res => {
        setCategorySale(res.data);
      })
    }
  },[selectSale])

  const handleChangeCategory = (categoryID, type) => {
    if(type == 'new'){
      setSelectNew(categoryID);
    }else{
      setSelectSale(categoryID);
    }
  }

  const showNew = categoryNew.map((e, index) => {
    return (
      <div className="col-3">
            <CardProduct data={e}/>
      </div>
    )
  })
  const showSale = categorySale.map((e, index) => {
    return (
      <div className="col-3">
            <CardProduct data={e}/>
      </div>
    )
  })
  
  return (
    <>
      <Banner />
      <Introduce />
      <div className="container mt-5">
        <Tab handleChangeCategory={handleChangeCategory} type="new" title="News Product"/>
        <div className="row">
          {showNew}
        </div>
        <div className="mt-5">
          <BannerSmall />
        </div>
        <div className="mt-5">
          <Tab handleChangeCategory={handleChangeCategory} type="sale" title="Sales Product"/>
          <div className="row">
           {showSale}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
