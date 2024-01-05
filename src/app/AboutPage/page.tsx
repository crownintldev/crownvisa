import React from 'react';
import AboutPage from '../pages/AboutPage/AboutPage';
import HeaderComp from '../../components/Navbar/HeaderComp';
import FooterComp from '../../components/FooterComp';

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
