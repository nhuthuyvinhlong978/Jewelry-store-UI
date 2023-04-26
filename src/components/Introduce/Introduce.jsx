import React from 'react';
import './introduce.css';
import i1 from '../../assets/image/intro1.png';
import i2 from '../../assets/image/intro2.png';
import i3 from '../../assets/image/intro3.png';
import i4 from '../../assets/image/intro4.png';

const Introduce = () => {
  return (
    <div className="hiraola-shipping_area hiraola-shipping_area-2">
      <div className="container">
        <div className="shipping-nav">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="shipping-item">
                <div className="shipping-icon">
                  <img src={i1} alt="Hiraola's Shipping Icon" />
                </div>
                <div className="shipping-content">
                  <h6>Free Uk Standard Delivery</h6>
                  <p>Designated day delivery</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="shipping-item">
                <div className="shipping-icon">
                  <img src={i2} alt="Hiraola's Shipping Icon" />
                </div>
                <div className="shipping-content">
                  <h6>Freshyly Prepared Ingredients</h6>
                  <p>Made for your delivery date</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="shipping-item">
                <div className="shipping-icon">
                  <img src={i3} alt="Hiraola's Shipping Icon" />
                </div>
                <div className="shipping-content">
                  <h6>98% Of Anta Clients</h6>
                  <p>Reach their personal goals set</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="shipping-item">
                <div className="shipping-icon">
                  <img src={i4} alt="Hiraola's Shipping Icon" />
                </div>
                <div className="shipping-content">
                  <h6>Winner Of 15 Awards</h6>
                  <p>Healthy food and drink 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
