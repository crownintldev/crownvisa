import Team from "@/app/components/Layout/Team/Team";
import { Breadcrumb } from "antd";
import React from "react";

const AboutTeamPage = () => {
  return (
    <div className="pt-[100px]">
      <div
        style={{
          backgroundImage: `url(https://www.usinformationsearch.com/wp-content/uploads/2016/05/custom-background-checks-you-can-trust1-5.jpg)`,
        }}
        className="h-[400px] flex justify-center pl-[60px] items-center flex-col rounded-[30px] mx-[35px]"
      >
        <h2 className="text-[55px]">About Team</h2>
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
      <Team />
    </div>
  );
};

export default AboutTeamPage;
