import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Navbar from '../../../components/Navbar/Navbar';
import AdminRoutes from '../../../routes/AdminRoutes';
import './dashboard.css';
const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9">
        <AdminRoutes />
      </div>
    </div>
  );
};

export default Dashboard;
