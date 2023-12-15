import AboutCeoPage from "@/app/pages/AboutCeoPage";
import HeaderComp from "../../components/Layout/Navbar/header";
import FooterComp from "../../components/Layout/footer";

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
