import React, {useState} from 'react';
import adminPath from './AdminPath';
import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import Login from '../pages/Admin/Login/Login';
import Category from '../pages/Admin/Category/Category';
import Product from '../pages/Admin/Product/Product';

import { Redirect, Route, Switch } from 'react-router-dom';
import User from '../pages/Admin/User/User';
import Order from '../pages/Admin/Order/Order';
import AddProduct from '../pages/Admin/Product/AddProduct';
import ContactManager from '../pages/Admin/Contact/ContactManager';
import Loading from '../components/Loading/Loading';
import EditProduct from '../pages/Admin/Product/EditProduct';

const AdminRoutes = () => {
  const [showLoad, setShowLoad] = useState(false);
  const handleLoading = (status) => {
    setShowLoad(status);
  };
  return (
    <div>
      {showLoad ? <Loading /> : <></>}
      {/* <Route
          exact
          path={adminPath.DASHBOARD}
          render={() => <Dashboard />}
        ></Route> */}
      <Route
        exact
        path={adminPath.CATEGORY}
        render={() => <Category handleLoading={handleLoading}/>}
      ></Route>
      <Route exact path={adminPath.PRODUCT} render={() => <Product handleLoading={handleLoading}/>}></Route>
      <Route exact path={adminPath.USER} render={() => <User handleLoading={handleLoading}/>}></Route>
      <Route exact path={adminPath.ORDER} render={() => <Order handleLoading={handleLoading}/>}></Route>
      <Route
        exact
        path={adminPath.ADDPRODUCT}
        render={(props) => <AddProduct {...props} handleLoading={handleLoading}/>}
      ></Route>
      <Route
        exact
        path={adminPath.CONTACT}
        render={(props) => <ContactManager {...props} handleLoading={handleLoading}/>}
      ></Route>
      <Route
        exact
        path={adminPath.EDIT_PRODUCT}
        render={(props) => <EditProduct {...props} handleLoading={handleLoading}/>}
      ></Route>
    </div>
  );
};

export default AdminRoutes;
