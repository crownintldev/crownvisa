import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/Navbar/HeaderComp";
import FileProcessingVisaDescriptionPage from "@/pages/FileProcessingDescription";
import React from "react";

const page = () => {
  return (
    <>
      <HeaderComp />
      <FileProcessingVisaDescriptionPage />
      <FooterComp />
    </>
  );
};

export default page;
