import React, { useState } from "react";
import "./contact.css";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { addContact } from "../../../api/api";
const ContactPage = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    await addContact(data).then((res) => {
      alert("Message has been sent");
      window.location.reload();
    });
  };
  return (
    <>
      <Breadcrumb />
      <div class="contact-main-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
              <div className="contact-page-side-content">
                <h3 className="contact-page-title">Contact Us</h3>
                <p className="contact-page-message">
                  We believe change is the only constant. Our curiosity sparks
                  our endless desire for learning. Together, we’re powering a
                  vision of global expansion through a hybrid work model and
                  in-house teams across multiple countries.
                </p>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-fax" /> Address
                  </h4>
                  <p>The Barn, Ullenhall, Henley in Arden B578 5CC, England</p>
                </div>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-phone" /> Phone
                  </h4>
                  <p>Mobile: (+84) 947605978</p>
                  <p>Hotline: 1009 678 456</p>
                </div>
                <div className="single-contact-block last-child">
                  <h4>
                    <i className="fa fa-envelope-o" /> Email
                  </h4>
                  <p>huyvngcc18169@fpt.edu.vn</p>
                  <p>nhuthuytpvl@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="contact-form-content">
                <h3 className="contact-page-title">Tell Us Your Message</h3>
                <div className="contact-form">
                  <div id="contact-form">
                    <div className="form-group">
                      <label>
                        Your Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Your Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div className="form-group form-group-2">
                      <label>Your Message</label>
                      <textarea
                        name="message"
                        required
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="hiraola-contact-form_btn"
                        onClick={() => {
                          handleSubmit();
                        }}
                      >
                        send
                      </button>
                    </div>
                  </div>
                  <p className="form-message mt-3 mb-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
