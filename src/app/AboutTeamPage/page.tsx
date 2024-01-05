import HeaderComp from "@/components/Navbar/HeaderComp";
import FooterComp from "@/components/FooterComp";
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
