import React from "react";
import VisaDescriptionPage from "../pages/VisaDescriptionPage";
import HeaderComp from "../components/Layout/Navbar/header";
import FooterComp from "../components/Layout/footer";

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
