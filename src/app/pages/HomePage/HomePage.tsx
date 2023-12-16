"use client";
import Blog from "@/app/components/Layout/Blog/Blog";
import CompaniesSlider from "@/app/components/Layout/CompaniesSlider";
import CountriesSlider from "@/app/components/Layout/CountriesSlider";
import Faq from "@/app/components/Layout/Faq/Faq";
import Features from "@/app/components/Layout/Features/features";
import HeroSectionComp from "@/app/components/Layout/HeroSection/HeroSectionComp";
import HeaderComp from "@/app/components/Layout/Navbar/header";
import Newsletter from "@/app/components/Layout/Newsletter";
import Price from "@/app/components/Layout/Price/Price";
import Services from "@/app/components/Layout/Services/Services";
import ServicesSlider from "@/app/components/Layout/ServicesSlider";
import Stats from "@/app/components/Layout/Stats/Stats";
import Testimonial from "@/app/components/Layout/Testimonial/Testimonial";
import VisaSlider from "@/app/components/Layout/VisaSlider";
import FooterComp from "@/app/components/Layout/footer";

export default function HomePage() {
  return (
    <div className="">
      <HeaderComp />
      <HeroSectionComp />
      <div className="container mx-auto flex flex-col my-3 px-4">
        <VisaSlider />
        <CompaniesSlider />
        <Services />
        <Stats />
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
