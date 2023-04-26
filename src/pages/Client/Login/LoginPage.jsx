import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import Login from '../../../components/Login/Login';
import Register from '../../../components/Register/Register';

const LoginPage = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container">
        <div className="row">
          <Login />
          <Register />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
