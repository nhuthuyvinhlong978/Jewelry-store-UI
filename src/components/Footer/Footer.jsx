import React from "react";
import "./footer.css";
import logo from "../../assets/image/logo.png";
const Footer = () => {
  return (
    <div className="hiraola-footer_area">
      <div className="footer-top_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-widgets_info">
                <div className="footer-widgets_logo">
                  <a>
                    <img alt="Hiraola's Footer Logo" src={logo} />
                  </a>
                </div>
                <div className="widget-short_desc">
                  <p>
                    Because fine jewelry is an expression of self: to mean what
                    you want, wear how you want, celebrate with when you want,
                    and keep forever. It’s for grand moments, minor milestones,
                    and every day in between.
                  </p>
                </div>
                <div className="hiraola-social_link"></div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-widgets_area">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="footer-widgets_title">
                      <h6>Product</h6>
                    </div>
                    <div className="footer-widgets">
                      <ul>
                        <li>
                          <a>Prices drop</a>
                        </li>
                        <li>
                          <a>New products</a>
                        </li>
                        <li>
                          <a>Best sales</a>
                        </li>
                        <li>
                          <a>Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="footer-widgets_info">
                      <div className="footer-widgets_title">
                        <h6>About Us</h6>
                      </div>
                      <div className="widgets-essential_stuff">
                        <ul>
                          <li className="hiraola-address">
                            <i className="ion-ios-location" />
                            <span>Address:</span> The Barn, Ullenhall, Henley in
                            Arden B578 5CC, England
                          </li>
                          <li className="hiraola-phone">
                            <i className="ion-ios-telephone" />
                            <span>Call Us:</span>{" "}
                            <a href="tel://+123123321345">+84 947605978</a>
                          </li>
                          <li className="hiraola-email">
                            <i className="ion-android-mail" />
                            <span>Email:</span>{" "}
                            <a href="https://www.facebook.com/">
                              nhuthuyvotpvl@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="instagram-container footer-widgets_area">
                      <div className="footer-widgets_title">
                        <h6>Sign Up For Newslatter</h6>
                      </div>
                      <div className="widget-short_desc">
                        <p>
                          Subscribe to our newsletters now and stay up-to-date
                          with new collections
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
