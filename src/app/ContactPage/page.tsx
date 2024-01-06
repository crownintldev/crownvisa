import React from 'react';
import ContactPage from '../../pages/ContactPage/Contact';
import HeaderComp from '../../components/Navbar/HeaderComp';
import FooterComp from '../../components/FooterComp';

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
