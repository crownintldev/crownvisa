import HeaderComp from "@/app/components/Layout/Navbar/header";
import FooterComp from "@/app/components/Layout/footer";
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
