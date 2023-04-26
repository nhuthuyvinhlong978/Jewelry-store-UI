import React, {useState, useEffect} from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import "./checkout.css"
import { addOrder, getListCart } from '../../../api/api';
import { getOwnerID } from '../../../auth/auth';
import PayPalButton from '../../../components/Paypal/Paypal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
const Checkout = () => {
    const [listCart, setListCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [reload, setReload] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(false)
    const [paypalID, setPaypalID] = useState('');
    const [listOrder, setListOrder] = useState([]);
    const [data, setData] = useState({
        ownerID: getOwnerID(),
        receiver: '',
        phoneNumber: '',
        address: '',
    })
    const history = useHistory();

    useEffect(async () => {
        await getListCart(getOwnerID()).then(res => {
            setListCart(res.data);
            let price = 0;
            for(let item of res.data){
                price+= item.product.price;
                setTotal(price);
                setListOrder((listOrder) => [...listOrder, {productID: item.product._id, quantity: 1, price: item.product.price}])
            }
        })
    },[])

    const show = listCart.map((e, index) => {
        return (
            <>
                <div key={index}>
                    <span>{e?.product?.name}</span>
                    <span style={{float:'right'}}>{e?.product?.price}</span>
                </div>
                <hr />
            </>
            
        )
    })

    const handleChangeData = (event) => {
        let { name, value } = event.target;
        setData({ ...data, [name]: value });
      };

    const handleChangePaymentMethod = () => {
        setPaymentMethod(!paymentMethod);
    }

    const handleClickPayment = async () => {
        data.listOrder = listOrder;
        console.log(data);
        if(data.receiver == '' ||  data.phoneNumber == '' || data.address == ''){
            alert("Please insert billing details");
        }else if(paymentMethod){
            data.paymentMethod = 'cod';
            await addOrder(data).then(res => {
                handleSuccess();
            })
        }
        else{
            alert("Please choose payment mehtod")
        }
    }
    
    const handleClickConfirm = () => {
        localStorage.setItem("data", JSON.stringify(data));
    }

    const handleSuccess = () => {
        toast("Order success fully");
        setTimeout(() => {
            history.push('/shop');
        },1000)
    }
    return (
        <div className='checkout'>
            <Breadcrumb />
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='checkout-title'>
                            <span>
                                BILLING DETAILS 
                            </span>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-12 col-12 mb--20">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="receiver"
                                required
                                onChange={(event) => {
                                handleChangeData(event);
                                }}
                            />
                            </div>
                            <div className="col-md-12">
                            <label>Phone Number</label>
                            <input
                                placeholder="Phone Number"
                                name="phoneNumber"
                                required
                                onChange={(event) => {
                                handleChangeData(event);
                                }}
                            />
                            </div>
                            <div className="col-md-12">
                            <label>Address</label>
                            <input
                                placeholder="Address"
                                name="address"
                                required
                                onChange={(event) => {
                                handleChangeData(event);
                                }}
                            />
                            </div>
                            <div className="col-12">
                                <button className="hiraola-register_btn" onClick={() => {
                                    handleClickConfirm()
                                }}>Confirm</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='checkout-title'>
                                <span>
                                YOUR ORDER
                                </span>
                        </div>
                        <hr />
                        <div>
                            {show}
                            <div style={{fontWeight:700, color:"#333333"}}>
                                <span>Order Total: </span>
                                <span style={{float:'right'}}>${total}</span>
                            </div>
                            <div className='mt-5'>
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault" color='primary' onChange={() => {handleChangePaymentMethod()}}/>
                                <label class="form-check-label" for="flexCheckDefault" style={{fontWeight:700}}>
                                    Ship COD
                                </label>
                                <div className='mt-3'>
                                    {
                                        total !== 0 ? <PayPalButton total={total} data={data} listOrder={listOrder} handleSuccess={handleSuccess} /> :<></>
                                    }
                                    
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="hiraola-register_btn" onClick={() => {
                                    handleClickPayment()
                                }}>PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer toastStyle={{ backgroundColor: "green", color: 'white' }} autoClose={1000}/>
        </div>
    );
}

export default Checkout;
