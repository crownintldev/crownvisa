import React from "react";
import PriceComp from "./PriceComp";

const Price = () => {
  return (
    <section className=" mt-32 antialiased">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold ">
            Designed for business teams like yours
          </h2>
          <p className="mb-5  sm:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mt-20">
          <PriceComp
            title="starter"
            description="Best option for personal use & for your next project."
            price={29}
            details={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size:1 developer",
              "Premium support:6 months",
              "Free updates:6 months"
            ]}
          />
          <PriceComp
            title="Company"
            description="Relevant for multiple users, extended & premium support."
            price={99}
            details={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size:1 developer",
              "Premium support:6 months",
              "Free updates:6 months"
            ]}
          />
          <PriceComp
            title="Enterprise"
            description="Best for large scale uses and extended redistribution rights."
            price={99}
            details={[
              "Individual configuration",
              "No setup, or hidden fees",
              "Team size:1 developer",
              "Premium support:6 months",
              "Free updates:6 months"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Price;
