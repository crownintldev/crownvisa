import { Props } from "@/types/interfaces";
import Link from "next/link";
import React from "react";

const PriceComp: React.FC<Props> = ({ title, description, price, details=[] }) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center  bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="sm:text-lg">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-4xl font-extrabold">${price}</span>
        <span className="">/month</span>
      </div>
      {/* <!-- List --> */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {details.map((details, index) => (
          <li className="flex items-center space-x-3" key={index}>
            {/* <!-- Icon --> */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{details}</span>
          </li>
        ))}
      </ul>
      <Link
        href="#"
        className="text-black bg-[#fe720f] rounded-md focus:ring-4 focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center"
      >
        Get started
      </Link>
    </div>
  );
};

export default PriceComp;
