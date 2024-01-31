import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/Navbar/HeaderComp";
import Team from "@/components/Team/Team";

const page = () => {
  return (
    <>
      <HeaderComp />
      <Team />
      <FooterComp />
    </>
  );
};

export default page;
