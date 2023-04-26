import React from 'react';
import './breadcrumb.css';
const Breadcrumb = () => {
  return (
    <div className="breadcrumb-area">
      <div className="container">
        <div className="breadcrumb-content">
          <h2>Other</h2>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
