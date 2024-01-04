import AboutCeoPage from "@/app/pages/AboutCeoPage";
import HeaderComp from "../components/Layout/Navbar/HeaderComp";
import FooterComp from "../components/Layout/FooterComp";

const page = () => {
  return (
    <>
      <HeaderComp />
      <AboutCeoPage />
      <FooterComp />
    </>
  );
};

export default page;
