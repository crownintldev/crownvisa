import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/Navbar/HeaderComp";
import VisaDescriptionPage from "@/pages/VisaDescription";
import React from "react";

const page = () => {
  return (
    <>
      <HeaderComp />
      <VisaDescriptionPage />
      <FooterComp />
    </>
  );
};

export default page;
