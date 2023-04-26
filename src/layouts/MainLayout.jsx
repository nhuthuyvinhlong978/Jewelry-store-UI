import React from 'react';
import '../assets/style/style.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ClientRoutes from '../routes/ClientRoutes';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <ClientRoutes />
      <Footer />
    </div>
  );
};

export default MainLayout;
