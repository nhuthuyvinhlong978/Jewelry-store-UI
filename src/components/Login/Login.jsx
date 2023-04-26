import React, { useState } from 'react';
import './login.css';
import { login } from '../../api/api';
import { useHistory } from 'react-router-dom';
import ClientPath from '../../routes/ClientPath';
const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChangeData = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login(data).then((res) => {
      console.log(res);

      if (res !== 'user') {
        alert('Login failed');
      } else {
        history.push(ClientPath.HOME);
      }
    });
  };
  return (
    <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mt-5">
      {/* Login Form s*/}
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="login-form">
          <h4 className="login-title">Login</h4>
          <div className="row">
            <div className="col-md-12 col-12">
              <label>Email Address*</label>
              <input
                type="email"
                placeholder="Email Address"
                required
                name="email"
                onChange={(event) => {
                  handleChangeData(event);
                }}
              />
            </div>
            <div className="col-12 mb--20">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={(event) => {
                  handleChangeData(event);
                }}
              />
            </div>

            <div className="col-md-4"></div>
            <div className="col-md-12">
              <button className="hiraola-login_btn">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
