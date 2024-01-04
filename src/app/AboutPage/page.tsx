import React from 'react';
import AboutPage from '../pages/AboutPage/AboutPage';
import HeaderComp from '../components/Layout/Navbar/HeaderComp';
import FooterComp from '../components/Layout/FooterComp';

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
