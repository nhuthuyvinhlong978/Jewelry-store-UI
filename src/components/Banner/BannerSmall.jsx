import React from 'react';
import './banner.css';
import b1 from '../../assets/image/b1.jpg';
import b2 from '../../assets/image/b2.jpg';
const BannerSmall = () => {
  return (
    <div className="row">
      <div className="col-4">
        <div className="banner-item img-hover_effect">
          <a>
            <img className="img-full" src={b1} alt="Hiraola's Banner" />
          </a>
        </div>
      </div>
      <div className="col-4">
        <div className="banner-item img-hover_effect">
          <a>
            <img className="img-full" src={b2} alt="Hiraola's Banner" />
          </a>
        </div>
      </div>
      <div className="col-4">
        <div className="banner-item img-hover_effect">
          <a>
            <img className="img-full" src={b1} alt="Hiraola's Banner" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerSmall;
