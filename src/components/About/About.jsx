import React from "react";
import "./about.css";
import about from "../../assets/image/about.jpg";
const About = () => {
  return (
    <div className="about-us-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 d-flex align-items-center">
            <div className="overview-content">
              <h2>
                Welcome To <span>Hiraola's</span> Store!
              </h2>
              <p className="short_desc">
                We believe in jewelry as an expression of self, and how you show
                up in the world should have no limits. That’s why we work with
                master jewelers to create pieces that feel like you — to mean
                what you want, wear how you want, and keep forever. Our jewelry
                is made to live in, designed in-house with craftsmanship and
                responsible sourcing at the cornerstone of it all.
              </p>
              <div className="hiraola-about-us_btn-area">
                <a className="about-us_btn">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="overview-img text-center img-hover_effect">
              <a>
                <img
                  className="img-full"
                  src={about}
                  alt="Hiraola's About Us Image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
