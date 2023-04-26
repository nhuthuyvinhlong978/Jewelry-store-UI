import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import { useEffect } from 'react';
import { addToCart, getDetailsProduct, getListsProductType } from '../../../api/api';
import { useState } from 'react';
import Slider from "react-slick";
import "./details.css"
import CardProduct from '../../../components/CardProduct/CardProduct';
import { getOwnerID, isLoggedIn } from '../../../auth/auth';
import { useHistory } from 'react-router-dom';
import ClientPath from '../../../routes/ClientPath';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DetailsProduct = () => {
    const history = useHistory();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const productID = useParams().productID;
    const [product, setProduct] = useState();
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [category, setCategory] = useState()

    useEffect(() => {
        if(productID){
            getDetailsProduct(productID).then(res => {
                setProduct(res.data);
                setCategory(res.data.categoryID);
            })
        }
    }, [productID])

    useEffect(async () => {
        if(category){
            getListsProductType(category, "new").then(res => {
                setRelatedProduct(res.data);
            })
        }
    }, [category])

    const showImage = product?.image?.map((e, index) => {
        return (
            <div key={index} className='wrap-image'>
                <img src={e.url} alt="" width="100%" height="100%"/>
            </div>
        )
    })

    const showProduct = relatedProduct.map((e, index) => {
        return (
            <div className='col-3'>
                <CardProduct data={e}/>
            </div>
        )
    })

    const handleClickCart = async () => {
        if(isLoggedIn()){
            const data = {
                ownerID: getOwnerID(),
                quantity: 1,
                productID: productID
            }
            await addToCart(data).then(res => {
                toast("Add to cart success");
            })

        }else{
            history.push(ClientPath.LOGIN);
        }
    }

    console.log(product);
    return (
        <div>
            <Breadcrumb />
            <div className="container">
                <div className='mt-5'>
                    <div className='row'>
                        <div className='col-lg-5 col-sm-12'>
                        <Slider {...settings} style={{width:"100%"}}>
                            {showImage}
                        </Slider>
                        </div>
                        <div className='col-lg-7 col-sm-12'>
                        <div className="sp-content">
                                <div className="sp-heading">
                                <h5><a>JWDA Penant Lamp Brshed Steel</a></h5>
                                </div>
                                <div className="sp-essential_stuff">
                                    <ul style={{listStyleType:"none"}}>
                                        <li>Product Price: <a ><span style={{color: "red !important"}}>${product?.price}</span></a></li>
                                        <li>Product Code: <a style={{color: "#cda557"}}>{product?.code}</a></li>
                                        <li>Availability: <a style={{color: "#cda557"}}>In Stock</a></li>
                                    </ul>
                                    </div>
                                    <div className="product-size_box">
                                </div>
                                <div class="qty-btn_area">
                                    <ul>
                                        <li><a class="qty-cart_btn" onClick={() => {handleClickCart()}}>Add To Cart</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='description'>
                        <span>DESCRIPTION</span>
                    </div>
                    <div className='desc-content mt-3'>
                        {product?.description}
                    </div>
                </div>
                <hr />
                <div className='mt-5'>
                    <div className='description'>
                        <span>RELATED PRODUCTS</span>
                    </div>
                    <div className=' mt-3'>
                        <div className='row'>
                            {showProduct}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer toastStyle={{ backgroundColor: "green", color: 'white' }} autoClose={1000}/>
        </div>
    );
}

export default DetailsProduct;
