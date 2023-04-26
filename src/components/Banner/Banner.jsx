import React from 'react';
import Slider from 'react-slick';
import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 1500,
    // autoplaySpeed: 1500,
  };
  return (
    <div style={{ width: '100%' }}>
      <Slider {...settings} style={{ width: '100%' }}>
        <div style={{ width: '100%' }}>
          <img src={slider1} alt="" width="100%" height="100%" />
        </div>
        <div>
          <img src={slider2} alt="" width="100%" height="100%" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
