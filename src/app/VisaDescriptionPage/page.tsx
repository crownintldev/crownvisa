import React from "react";
import VisaDescriptionPage from "../../pages/VisaDescription";
import HeaderComp from "../../components/Navbar/HeaderComp";
import FooterComp from "../../components/FooterComp";

const page = () => {
  return (
    <>
      <HeaderComp />
      <VisaDescriptionPage />
      <FooterComp/>
    </>
  );
};

export default page;
