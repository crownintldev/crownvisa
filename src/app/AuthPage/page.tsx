"use client"
import Auth from "@/components/Auth/Auth";
import FooterComp from "@/components/FooterComp";
import Navbar from "@/components/Navbar";


const page = () => {
  
  return (
    <>
   <Navbar/>
      <Auth/>
      <FooterComp />
    </>
  )
}

export default page