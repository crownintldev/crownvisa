import FooterComp from "@/components/FooterComp";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team/Team";

const page = () => {
  return (
    <>
      <Navbar/>
      <Team />
      <FooterComp />
    </>
  );
};

export default page;
