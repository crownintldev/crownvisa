import React from 'react';
import ContactPage from '../pages/ContactPage/ContactPage';
import HeaderComp from '../components/Layout/Navbar/HeaderComp';
import FooterComp from '../components/Layout/FooterComp';

const page = () => {
  return (
    <>
      <HeaderComp />
      <ContactPage />
      <FooterComp />
    </>
  );
};

export default page;
