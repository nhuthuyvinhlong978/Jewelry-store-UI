import React,{useState} from 'react';
import './header.css';
import logo from '../../assets/image/logo.png';
import path from '../../routes/ClientPath';
import { useHistory } from 'react-router-dom';
import ModalSearch from '../Modal/ModalSearch';

const Header = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handleClick = (url) => {
    history.push(url);
  };

  const handleClickSearch = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div className="header-bottom_area header-bottom_area-2 header-sticky stick">
      <div className="container-fliud">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4">
            <div className="header-logo">
              <a>
                <img src={logo} alt="Hiraola's Header Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block position-static">
            <div className="main-menu_area">
              <nav>
                <ul>
                  <li
                    className="dropdown-holder"
                    onClick={() => {
                      handleClick(path.HOME);
                    }}
                  >
                    <a>Home</a>
                  </li>
                  <li
                    className="megamenu-holder"
                    onClick={() => {
                      handleClick(path.SHOP);
                    }}
                  >
                    <a>Shop</a>
                  </li>

                  <li
                    onClick={() => {
                      handleClick(path.ABBOUT_US);
                    }}
                  >
                    <a>About Us</a>
                  </li>
                  <li
                    onClick={() => {
                      handleClick(path.CONTACT);
                    }}
                  >
                    <a>Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8">
            <div className="header-right_area">
              <ul>
                {/* <li>
                  <a className="wishlist-btn">
                    <i className="fa-regular fa-heart "></i>
                  </a>
                </li> */}
                <li onClick={() => {handleClickSearch()}}>
                  <a className="search-btn toolbar-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                </li>
                <li onClick={() => {
                    handleClick(path.CART);
                  }}>
                  <a className="minicart-btn toolbar-btn">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>
                <li
                  onClick={() => {
                    handleClick(path.PROFILE);
                  }}
                >
                  <a className="minicart-btn toolbar-btn">
                    <i class="far fa-user"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ModalSearch open={open} handleClose={handleClose}/>
    </div>
  );
};

export default Header;
