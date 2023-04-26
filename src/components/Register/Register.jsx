import React, { useEffect, useState } from 'react';
import '../Login/login.css';
import { register } from '../../api/api';
const Register = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [reload, setReload] = useState(false);
  useEffect(() => {}, [reload]);

  const handleChangeData = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert('Password and Confirm Password not success');
    } else {
      await register(data).then((res) => {
        if (!res.result) {
          alert('Register failed');
        } else {
          alert("Register successfully")
          window.location.reload();
        }
      });
    }
  };
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12 mt-5">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="login-form">
          <h4 className="login-title">Register</h4>
          <div className="row">
            <div className="col-md-12 col-12 mb--20">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                required
                onChange={(event) => {
                  handleChangeData(event);
                }}
              />
            </div>
            <div className="col-md-12">
              <label>Email Address*</label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                onChange={(event) => {
                  handleChangeData(event);
                }}
              />
            </div>
            <div className="col-md-6">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={(event) => {
                  handleChangeData(event);
                }}
                autocomplete="off"
              />
            </div>
            <div className="col-md-6">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                required
                onChange={(event) => {
                  handleChangeData(event);
                }}
                autocomplete="off"
              />
            </div>
            <div className="col-12">
              <button className="hiraola-register_btn">Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
