import React from "react";

interface CheckoutStepsProps {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
}

const CustomVisaSteps: React.FC<CheckoutStepsProps> = (props) => {
  return (
    <ol className="flex justify-center px-[100px] my-2 items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          {props.step1 ? (
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          ) : (
            <span className="me-2">1</span>
          )}
          Visa <span className="hidden sm:inline-flex sm:ms-2">Form</span>
        </span>
      </li>
      <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          {props.step2 ? (
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          ) : (
            <span className="me-2">2</span>
          )}
          Visa <span className="hidden sm:inline-flex sm:ms-2">Requirements</span>
        </span>
      </li>
      <li className="flex items-center">
        {props.step3 ? (
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        ) : (
          <span className="me-2">3</span>
        )}
        Travel <span className="hidden sm:inline-flex sm:ms-2">Itinerary</span>
      </li>
    </ol>

    // <div className="flex w-full mb-4 checkout-step">
    //   <div
    //     className={`flex-1 text-center py-2 ${
    //       props.step1 ? "font-bold border-b-2 border-blue-700" : "text-gray-500"
    //     }`}
    //   >
    //     Visa Form
    //   </div>
    //   <div
    //     className={`flex-1 text-center py-2 ${
    //       props.step2 ? "font-bold border-b-2 border-blue-700" : "text-gray-500"
    //     }`}
    //   >
    //     Visa Requirements
    //   </div>
    //   <div
    //     className={`flex-1 text-center py-2 ${
    //       props.step3 ? "font-bold border-b-2 border-blue-700" : "text-gray-500"
    //     }`}
    //   >
    //     Travel Itinerary
    //   </div>
    // </div>
  );
};

export default CustomVisaSteps;
