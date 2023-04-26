import { Redirect, Route, Switch } from 'react-router-dom';
import clientPath from '../routes/ClientPath';
import HomePage from '../pages/Client/Home/HomePage';
import AboutPage from '../pages/Client/About/AboutPage';
import ContactPage from '../pages/Client/Contact/ContactPage';
import ShopPage from '../pages/Client/Shop/ShopPage';
import LoginPage from '../pages/Client/Login/LoginPage';
import ProfilePage from '../pages/Client/Profile/ProfilePage';
import { isLoggedIn } from '../auth/auth';
import ChatBott from '../components/ChatBot/ChatBot';
import { Details } from '@material-ui/icons';
import DetailsProduct from '../pages/Client/Product/DetailsProduct';
import Cart from '../pages/Client/Cart/Cart';
import Checkout from '../pages/Client/Checkout/Checkout';
import History from "../pages/Client/History/History"
import Search from '../pages/Client/Search/Search';
const ClientRoutes = (props) => {
  console.log(isLoggedIn());
  return (
    <div id="main-content">
      <Route exact path={clientPath.HOME} render={() => <HomePage />}></Route>
      <Route
        exact
        path={clientPath.ABBOUT_US}
        render={() => <AboutPage />}
      ></Route>
      <Route
        exact
        path={clientPath.CONTACT}
        render={() => <ContactPage />}
      ></Route>
      <Route exact path={clientPath.SHOP} render={(props) => <ShopPage {...props} />}></Route>
      <Route exact path={clientPath.LOGIN} render={() => <LoginPage />}></Route>
      <Route
        exact
        path={clientPath.PROFILE}
        render={() =>
          isLoggedIn() ? <ProfilePage /> : <Redirect to={clientPath.LOGIN} />
        }
      ></Route>

      <Route
        exact
        path={clientPath.CART}
        render={() =>
          isLoggedIn() ? <Cart /> : <Redirect to={clientPath.LOGIN} />
        }
      ></Route>

        <Route
        exact
        path={clientPath.CHECKOUT}
        render={() =>
          isLoggedIn() ? <Checkout /> : <Redirect to={clientPath.LOGIN} />
        }
      ></Route>

      <Route
        exact
        path={clientPath.HISTORY}
        render={() =>
          isLoggedIn() ? <History /> : <Redirect to={clientPath.LOGIN} />
        }
      ></Route>

      <Route exact path={clientPath.DETAILS} render={(props) => <DetailsProduct {...props} />}></Route>
      <Route exact path={clientPath.SEARCH} render={(props) => <Search {...props} />}></Route>

      <ChatBott />
    </div>
  );
};

export default ClientRoutes;
