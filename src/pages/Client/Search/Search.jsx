import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { searchProduct } from '../../../api/api';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import CardProduct from '../../../components/CardProduct/CardProduct';

const Search = (props) => {
    const search = queryString.parse(props.location.search);
    const q = search.q;
    const [arr, setArr] = useState([]);
    useEffect(async () => {
        if(q){
            console.log(search)
            await searchProduct(q).then(res => {
                setArr(res.data);
            })
        }
    }, [q])

    const show = arr.map((e, index) => {
        return (
            <div className='col-3 mt-3' key={index}>
                <CardProduct data={e}/>
            </div>
        )
    })
    return (
        <>
            <Breadcrumb />  
            <div className="container mt-5">
                <div className="row">
                    {show}
                </div>
            </div>
        </>
    );
}

export default Search;
