import React from 'react';
import ContactPage from '../pages/ContactPage/ContactPage';
import HeaderComp from '../components/Layout/Navbar/header';
import FooterComp from '../components/Layout/footer';

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
