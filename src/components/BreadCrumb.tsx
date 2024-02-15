import { Props } from "@/types/interfaces";
import Link from "next/link";
import React from "react";

const BreadCrumb: React.FC<Props> = ({
  link1,
  link1title,
  link2,
  link2title,
  title,
}) => {
  return (
    <div className="h-[400px] flex flex-col  bg-[url('https://motivoweb.com/saga/wp-content/themes/saga/assets/images/bg-titlebar.jpg')] bg-fixed bg-cover bg-no-repeat mb-10 relative">
      <div className="w-full h-full bg-gray-400 opacity-70  absolute top-0 left-0"></div>
      <div className="flex justify-center items-center h-full flex-col z-10">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              {link1 && (
                <Link
                  href={link1}
                  className="inline-flex items-center text-sm font-medium  "
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  {link1title}
                </Link>
              )}
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3  mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                {link2 && (
                  <Link
                    href={link2}
                    className="ms-1 text-sm font-medium  md:ms-2 text-yellow100"
                  >
                    {link2title}
                  </Link>
                )}
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="text-5xl">{title}</h2>
      </div>
    </div>
  );
};

export default BreadCrumb;
