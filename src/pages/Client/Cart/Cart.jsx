import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import { getListCart, removeToCart } from '../../../api/api';
import { getOwnerID } from '../../../auth/auth';
import CardProduct from '../../../components/CardProduct/CardProduct';
import "./cart.css"
import { useHistory } from 'react-router-dom';
import ClientPath from '../../../routes/ClientPath';
const Cart = () => {
    const [listCart, setListCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [reload, setReload] = useState(false);
    const history = useHistory();
    useEffect(async () => {
        await getListCart(getOwnerID()).then(res => {
            setListCart(res.data);
            let price = 0;
            for(let item of res.data){
                price+= item.product.price;
                setTotal(price);
            }
        })
    },[reload])

    const handleClickRemove = async (id) => {
        await removeToCart(id).then(res => {
            setReload(!reload);
        })
    }

    console.log(listCart);

    const show = listCart.map((e, index) => {
        return (
            <div className='col-3' key={index}>
                <CardProduct data={e.product}/>
                <div style={{textAlign:'center'}}>
                    <a class="qty-cart_btn" onClick={() => {handleClickRemove(e.cardID)}}>Remove To Cart</a>
                </div>
            </div>
        )
    })

    const handleClickCheckout = () => {
        history.push(ClientPath.CHECKOUT);
    }

    const handlClickHistory = () => {
        history.push(ClientPath.HISTORY)
    }
    return (
        <div>
            <Breadcrumb />
            <div className='container'>
                <div className='mt-3'>
                    <div className='row mb-5'>
                        {show}
                    </div>
                    <hr />
                    <div className='mt-3'>
                        <span style={{fontSize:"25px", fontWeight:700, color:"#333333"}}>Cart Totals</span>
                    </div>
                    <div style={{width:"30%", border:"1px solid #333333",padding:"15px 10px", color:"#333333", fontWeight:700}} className='mt-3'>
                        <span>Total:</span>
                        <span style={{float: 'right', color:"red"}}>{total}</span>
                    </div>
                    <div className='mt-4' >
                        <a class="qty-cart_btn" style={{padding: '15px 10px'}} onClick={() => {handleClickCheckout()}}>Checkout</a>
                        <a class="qty-cart_btn" style={{padding: '15px 10px', marginLeft:"20px"}} onClick={() => {handlClickHistory()}}>History</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
