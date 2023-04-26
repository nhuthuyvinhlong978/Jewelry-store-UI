import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
  HashRouter,
} from 'react-router-dom';
import clientPath from './routes/ClientPath';
import adminPath from './routes/AdminPath';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Login from './pages/Admin/Login/Login';
import { checkRole } from './auth/auth';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={adminPath.DASHBOARD}
          render={() =>
            checkRole('admin') ? <Dashboard /> : <Redirect to="/auth/login" />
          }
        ></Route>
        <Route path={adminPath.LOGIN} component={Login}></Route>
        <Route path={clientPath.HOME} render={() => <MainLayout />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
