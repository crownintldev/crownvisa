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
        <h2 className="font-bold lg:text-[25px] md:text-[15px] text-center my-3">
          We Have Authorized Embassy Visa Application Centre & Dropbox
        </h2>
        <VisaSlider />
        <CompaniesSlider />
        {/* <div className="flex justify-center">
          <Button type="primary" className="bg-black">
            Explore All Visas
          </Button>
        </div> */}
        {/* <div className="flex justify-center items-center w-full mt-5">
          <Input placeholder="Track Your Passport" className="w-[60%]" />
          <Button
            type="primary"
            className="bg-blue-400 flex justify-center items-center"
          >
            Submit
          </Button>
        </div> */}
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
