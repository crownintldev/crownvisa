//@ts-nocheck
"use client";
import Blog from "@/components/Blog/Blog";
import CompaniesSlider from "@/components/CompaniesSlider";
import CountriesSlider from "@/components/CountriesSlider";
import Faq from "@/components/Faq/Faq";
import Features from "@/components/Features/Features";
import FooterComp from "@/components/FooterComp";
import Header from "@/components/Header";
import HeroSectionComp from "@/components/HeroSection/HeroSectionComp";
import HeaderComp from "@/components/Navbar/HeaderComp";
import Newsletter from "@/components/Newsletter";
import Price from "@/components/Price/Price";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import VisaSlider from "@/components/VisaSlider";
import AOS from "aos";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <HeroSectionComp />
      <div className="container mx-auto flex flex-col my-3 px-4">
        <VisaSlider />
        <CompaniesSlider />
        <Services />
        <CountriesSlider />
        <Features />
        <Price />
        <Testimonial />
        <Blog />
        <Faq />
        <Newsletter />
      </div>
      <FooterComp />
    </>
  );
};

export default Page;
