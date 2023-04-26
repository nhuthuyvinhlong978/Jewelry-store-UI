import React from 'react';
import './card.css';
import p1 from '../../assets/image/p1.jpg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useHistory } from 'react-router';
import ClientPath from '../../routes/ClientPath';
const CardProduct = (props) => {
  const history = useHistory();
  const handleClickDetailsProduct = (id) => {
    history.push(`/product/${id}`);
  }
  return (
    <div className="single_product" onClick={() => {handleClickDetailsProduct(props?.data?._id)}}>
      <div className="product-img">
        <a tabIndex={-1}>
          <img className="primary-img" src={props?.data?.image[0].url} alt="Hiraola's Product Image" />
        </a>
        <div className="add-actions">
          <ul>
            <li>
              <a
                className="hiraola-add_cart"
                data-bs-toggle="tooltip"
                data-placement="top"
                tabIndex={-1}
                aria-label="Add To Cart"
              >
                <i className="ion-bag" />
              </a>
            </li>
            <li>
              <a
                className="hiraola-add_compare"
                data-bs-toggle="tooltip"
                data-placement="top"
                tabIndex={-1}
                aria-label="Compare This Product"
              >
                <i className="ion-ios-shuffle-strong" />
              </a>
            </li>
            <li
              className="quick-view-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
            >
              <a
                data-bs-toggle="tooltip"
                data-placement="top"
                tabIndex={-1}
                aria-label="Quick View"
              >
                <i className="ion-eye" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hiraola-product_content">
        <div className="product-desc_info">
          <h6>
            <a className="product-name" tabIndex={-1}>
              {props?.data?.name}
            </a>
          </h6>
          <div className="row">
            <div className="col-10">
              <div className="price-box">
                <span className="new-price">${props?.data?.price}</span>
              </div>
            </div>
            {/* <div className="col-2">
              <div className="like-icon">
                <i class="far fa-heart"></i>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
