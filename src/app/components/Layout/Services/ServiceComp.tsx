// components/ServiceCard.tsx
import { Button } from "antd";
import React from "react";

interface Props {
  icon: any;
  title: string;
  description: string;
}

const ServiceComp: React.FC<Props> = ({ icon, title, description }) => {
  return (
    // <div className="card flex justify-center items-center flex-col bg-white hover:scale-105">
    //   <div className="icon">{icon}</div>
    //   <h2 className="title">{title}</h2>
    //   <p className="description">{description}</p>
    //   <div>
    //     <Button type="primary" className="bg-black">
    //       Details
    //     </Button>
    //   </div>
    // </div>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
      {icon}
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default ServiceComp;
