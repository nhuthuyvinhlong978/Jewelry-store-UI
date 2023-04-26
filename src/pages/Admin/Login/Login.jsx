import React, { useState } from 'react';
import './login.css';
import { login } from '../../../api/api';
import { useHistory } from 'react-router-dom';
const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleClickLogin = async () => {
    if (data.email == '' || data.password == '') {
      alert('login failed');
    } else {
      await login(data).then((res) => {
        history.push('/admin');
      });
    }
  };
  return (
    <div className="login-box">
      <h2>Welcome back</h2>
      <p>Enter your details</p>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <i className="fa-solid fa-user" />
          <input
            type="email"
            id="email"
            placeholder="email"
            required
            name="email"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <i className="fa-solid fa-lock" />
          <input
            type="password"
            placeholder="Your password"
            autocomplete="off"
            required
            name="password"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
      </form>
      <div>
        <a
          className="btn"
          onClick={() => {
            handleClickLogin();
          }}
        >
          Log In
        </a>
      </div>
      <div>
        <a href="#" className="forgot">
          Forgot Your Password?
        </a>
      </div>
    </div>
  );
};

export default Login;
