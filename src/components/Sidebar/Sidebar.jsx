import React from 'react';
import './sidebar.css';
import logo from '../../assets/image/logo.png';
import { useHistory } from 'react-router-dom';
import AdminPath from '../../routes/AdminPath';
const Sidebar = () => {
  const history = useHistory();
  const clickItem = (path) => {
    history.push(path);
  };

  const handleClickLogout = () => {
    localStorage.clear();
    history.push(AdminPath.LOGIN)
  }
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <div style={{ marginBottom: '30px' }}>
          <li className="nav-item nav-category">
            <img src={logo} alt="" />
          </li>
        </div>

        <li
          className="nav-item"
          onClick={() => {
            clickItem(AdminPath.CATEGORY);
          }}
        >
          <a className="nav-link">
            <span className="icon-bg">
              <i class="fas fa-list"></i>
            </span>
            <span className="menu-title">Category Manager</span>
          </a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            clickItem(AdminPath.PRODUCT);
          }}
        >
          <a
            className="nav-link"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span className="icon-bg">
              <i class="fas fa-store"></i>
            </span>
            <span className="menu-title">Product Manager</span>
          </a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            clickItem(AdminPath.USER);
          }}
        >
          <a className="nav-link">
            <span className="icon-bg">
              <i class="fas fa-users"></i>
            </span>
            <span className="menu-title">User Manager</span>
          </a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            clickItem(AdminPath.ORDER);
          }}
        >
          <a className="nav-link">
            <span className="icon-bg">
              <i class="fas fa-shopping-cart"></i>
            </span>
            <span className="menu-title">Order Manager</span>
          </a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            clickItem(AdminPath.CONTACT);
          }}
        >
          <a className="nav-link">
            <span className="icon-bg">
              <i class="fas fa-address-card"></i>
            </span>
            <span className="menu-title">Contact Manager</span>
          </a>
        </li>
      </ul>
      <div style={{ position: 'absolute', bottom: 0, width: '90%' }}>
        <ul className="nav">
          <li className="nav-item" onClick={() => {
            handleClickLogout()
          }}>
            <a className="nav-link">
              <span className="icon-bg">
                <i class="fas fa-sign-out-alt"></i>
              </span>
              <span className="menu-title">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
