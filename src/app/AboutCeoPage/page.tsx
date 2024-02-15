import BreadCrumb from "@/components/BreadCrumb";
import Image from "next/image";
import FooterComp from "../../components/FooterComp";
import Header from "@/components/Header";

const page = () => {
  return (
    <>
      <Header/>
      <section className="about-us lg:pt-[125px]">
        <BreadCrumb
          link1="/"
          link1title="home"
          link2="/AboutCeoPage"
          link2title="About CEO"
          title="About CEO"
        />
        <div className="h-auto flex justify-center flex-col rounded-[30px] mx-[35px] mb-10">
          <div className="grid grid-cols-12 gap-6 container mx-auto px-4">
            <div className="md:col-span-4 col-span-12 mt-5">
              <Image
                src="/images/about-ceo_msg.png"
                alt="ceo image"
                className="pic"
                width={300}
                height={250}
              />
            </div>
            <div className="md:col-span-8 col-span-12 my-5">
              <h2 className="text-5xl pt-3">CEO</h2>
              <h1 className="text-4xl underline decoration-black decoration-3">
                Mubashir Nazir
              </h1>
              <p className="pt-5">
                My name is Mubashir Nazir. I am the CEO of our family-owned
                travel company. We’re a leading provider of domestic &
                international tourism packages and tours for people from all
                over the world. We’re passionate about what we do and we want to
                share this passion with you.
              </p>
              <br />
              <p>
                Crown International Travels (Pvt) Ltd was founded by my father
                in 1990, and has been passed down to me as the new generation.
                I’m proud of how far we’ve come since then, and I’m excited to
                take Crown International Travels (Pvt) Ltd to the next level!
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-3xl font-semibold">CEO Message</h2>
          <p className="pt-5">
            Crown International is a renowned name in the Travel industry since
            2007 and has excellent record of best customer satisfaction. We
            ensure that our client get professional, reliable and hassle free
            services 24/7, round the year. We’ve a team of professionals who are
            qualified and have years of experience in handling travel
            requirement.
          </p>
          <br />
          <p>
            At Crown International , we strive to do our best and with “The Name
            of Confidence” you’re assured of quality services that are provided
            with the highest standards of customer support. As a leading Travel
            Agent in the area, we are tied-up with all airlines and hotels to
            provide our customers with the best value for their money.
          </p>
          <br />
          <p>
            Whether you want a cheap Air Ticket, looking forward to perform
            religious activity like Hajj or Umrah or just a leisure or family
            vacation, our experienced staff will help you choose from customized
            packages. Our travel representative can also compare prices across
            airlines and hotels to find the best deal for our customers to match
            their budget needs also.
          </p>
        </div>
      </section>
      <FooterComp />
    </>
  );
};

export default page;
