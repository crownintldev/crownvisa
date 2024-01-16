import FooterComp from "../../components/FooterComp";
import HeaderComp from "../../components/Navbar/HeaderComp";
import About from "../../pages/AboutPage/About";

const page = () => {
  return (
    <div>
      <HeaderComp />
      <About />
      <FooterComp />
    </div>
  );
};

export default page;
