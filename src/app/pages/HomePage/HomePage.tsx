//@ts-nocheck
"use client";
import Blog from "@/app/components/Layout/Blog/Blog";
import CompaniesSlider from "@/app/components/Layout/CompaniesSlider";
import CountriesSlider from "@/app/components/Layout/CountriesSlider";
import Faq from "@/app/components/Layout/Faq/Faq";
import HeroSectionComp from "@/app/components/Layout/HeroSection/HeroSectionComp";
import HeaderComp from "@/app/components/Layout/Navbar/HeaderComp";
import Newsletter from "@/app/components/Layout/Newsletter";
import Price from "@/app/components/Layout/Price/Price";
import Services from "@/app/components/Layout/Services/Services";
import ServicesSlider from "@/app/components/Layout/ServicesSlider";
import Testimonial from "@/app/components/Layout/Testimonial/Testimonial";
import VisaSlider from "@/app/components/Layout/VisaSlider";
import FooterComp from "@/app/components/Layout/FooterComp";
import AOS from 'aos';
import { useEffect } from "react";
import Features from "@/app/components/Layout/Features/Features";

export default function HomePage() {
  useEffect(() => {
    
    // Initialize AOS
    AOS.init();
  }, []);
  return (
    <div className="">
      <HeaderComp />
      <HeroSectionComp />
      <div className="container mx-auto flex flex-col my-3 px-4">
        <VisaSlider />
        <CompaniesSlider />
        <Services />
        <ServicesSlider />
        <CountriesSlider />
        <Features />
        <Price />
        <Testimonial />
        <Blog />
        <Faq />
        <Newsletter />
      </div>
      <FooterComp />
    </div>
  );
}
