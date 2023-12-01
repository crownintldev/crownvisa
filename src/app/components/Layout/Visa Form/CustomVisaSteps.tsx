import React from "react";

interface CheckoutStepsProps {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
}

const CustomVisaSteps: React.FC<CheckoutStepsProps> = (props) => {
  return (
    <div className="flex w-full mb-4 checkout-step">
      <div
        className={`flex-1 text-center py-2 ${
          props.step1 ? "font-bold border-b-2 border-blue-700" : "text-gray-500"
        }`}
      >
        Visa Form
      </div>
      <div
        className={`flex-1 text-center py-2 ${
          props.step2 ? "font-bold border-b-2 border-blue-700" : "text-gray-500"
        }`}
      >
        Visa Requirements
      </div>
      <div
        className={`flex-1 text-center py-2 ${
          props.step3 ? "font-bold border-b-2 border-blue-700" : "text-gray-500"
        }`}
      >
        Travel Itinerary
      </div>
    </div>
  );
};

export default CustomVisaSteps;