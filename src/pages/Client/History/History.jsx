import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import { orderHistory } from '../../../api/api';
import moment from 'moment';
import "./style.css"
const History = () => {
    const [arr, setArr] = useState([])
    
    useEffect(async() => {
        await orderHistory().then(res => {
            setArr(res.data);
        })
    },[])

    const show = arr.map((e, idex) => {
        let total = 0;
        for(let item of e.listOrder){
            total+= item.price;
        }
        return (
            <div className='col-3 mt-3'>
                <div className='wrap-history'>
                    <div>
                        <span><strong>OrderID</strong>: {e._id}</span>
                    </div>
                    <div>
                        <span><strong>Phone</strong>: {e.phoneNumber}</span>
                    </div>
                    <div>
                        <span><strong>Address</strong>: {e.address}</span>
                    </div>
                    <div>
                        <span><strong>Payment Method</strong>: {e.paymentMethod}</span>
                    </div>
                    <div>
                        <span><strong>Total</strong>: {total}</span>
                    </div>
                    <div>
                        <span><strong>Created</strong>: {moment(e?.created).format("DD/MM/YYY")}</span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <Breadcrumb />
            <div className='container'>
                <div className='row'>
                    {show}
                </div>
            </div>
        </div>
    );
}

export default History;
