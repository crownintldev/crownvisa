"use client"
import Auth from "@/components/Auth/Auth";
import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/Navbar/HeaderComp";


const page = () => {
  
  return (
    <>
      <HeaderComp />
      <Auth/>
      <FooterComp />
    </>
  )
}

export default page