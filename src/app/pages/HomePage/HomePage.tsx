'use client';
import { Button, Input } from 'antd';
import HeaderComp from '@/app/components/Layout/Navbar/header';
import HeroSectionComp from '@/app/components/Layout/HeroSection/HeroSectionComp';
import VisaSlider from '@/app/components/Layout/VisaSlider';
import ServicesSlider from '@/app/components/Layout/ServicesSlider';
import CountriesSlider from '@/app/components/Layout/CountriesSlider';
import Features from '@/app/components/Layout/Features/features';
import PriceComp from '@/app/components/Layout/PriceComp';
import TestinominalComp from '@/app/components/Layout/TestinominalComp';
import Blog from '@/app/components/Layout/Blog/Blog';
import CompaniesSlider from '@/app/components/Layout/CompaniesSlider';
import Newsletter from '@/app/components/Layout/Newsletter';
import FooterComp from '@/app/components/Layout/footer';
import StatsComponent from '@/app/components/Layout/StatsComp';
import Services from '@/app/components/Layout/Services/Services';
import FaqComp from '@/app/components/Layout/FaqComp';

export default function HomePage() {
  return (
    <div>
      <HeaderComp />
      <HeroSectionComp />
      <div className="container mx-auto flex flex-col my-3 px-4">
        <h2 className="font-bold lg:text-[25px] md:text-[15px] text-center my-3">
          We Have Authorized Embassy Visa Application Centre & Dropbox
        </h2>
        <VisaSlider />
        <div className="flex justify-center">
          <Button type="primary" className="bg-black">
            Explore All Visas
          </Button>
        </div>
        <div className="flex justify-center items-center w-full mt-5">
          <Input placeholder="Track Your Passport" className="w-[60%]" />
          <Button
            type="primary"
            className="bg-blue-400 flex justify-center items-center"
          >
            Submit
          </Button>
        </div>
        <Services />
        <StatsComponent />
        <ServicesSlider />
        <CountriesSlider />
        <Features />
        <PriceComp />
        <TestinominalComp />
        <Blog />
        <FaqComp />
        <CompaniesSlider />
        <Newsletter />
      </div>
      <FooterComp />
    </div>
  );
}
