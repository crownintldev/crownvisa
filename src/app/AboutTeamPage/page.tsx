import HeaderComp from "@/app/components/Layout/Navbar/HeaderComp";
import FooterComp from "@/app/components/Layout/FooterComp";
import AboutTeamPage from "@/app/pages/AboutTeamPage";

const page = () => {
  return (
    <>
      <HeaderComp />
      <AboutTeamPage />
      <FooterComp />
    </>
  );
};

export default page;
