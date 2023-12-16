import React from "react";
import FaqComp from "./FaqComp";

const Faq = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 mb-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <FaqComp
            title="How to create an account?"
            details="Amet minim mollit non deserunt ullamco est sit"
          />
          <FaqComp
            title="How can I make payment using Paypal?"
            details="Amet minim mollit non deserunt ullamco est sit"
          />
          <FaqComp
            title="Can I cancel my plan?"
            details="Amet minim mollit non deserunt ullamco est sit"
          />
          <FaqComp
            title="How can I reach to support?"
            details="Amet minim mollit non deserunt ullamco est sit"
          />
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

export default Faq;
