import { Breadcrumb } from "antd";
import Image from "next/image";
import React from "react";

const AboutCeoPage = () => {
  return (
    <section className="about-us pt-[100px]">
      <div
        style={{
          backgroundImage: `url(https://www.usinformationsearch.com/wp-content/uploads/2016/05/custom-background-checks-you-can-trust1-5.jpg)`,
        }}
        className="h-[400px] flex justify-center pl-[60px] items-center flex-col rounded-[30px] mx-[35px]"
      >
        <h2 className="text-[55px]">About CEO</h2>
        <Breadcrumb
          items={[
            {
              title: "Home",
              href: "/",
              className: "font-bold",
            },
            {
              title: "About",
              href: "/AboutPage",
              className: "font-bold",
            },
          ]}
        />
      </div>
      <div className="about">
        <div className="text">
          <h2>CEO Message</h2>
          <p>
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
        <Image
          src="/images/about-ceo_msg.jpg"
          alt="ceo image"
          className="pic h-full rounded-full"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default AboutCeoPage;
