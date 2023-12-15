import React from 'react';
import AboutPage from '../../pages/AboutPage/AboutPage';
import HeaderComp from '../../components/Layout/Navbar/header';
import FooterComp from '../../components/Layout/footer';

const page = () => {
  return (
    <div>
      <HeaderComp />
      <AboutPage />
      <FooterComp />
    </div>
  );
};

export default page;
