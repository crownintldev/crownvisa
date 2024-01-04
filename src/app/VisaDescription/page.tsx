import React from "react";
import VisaDescriptionPage from "../pages/VisaDescriptionPage";
import HeaderComp from "../components/Layout/Navbar/HeaderComp";
import FooterComp from "../components/Layout/FooterComp";

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
