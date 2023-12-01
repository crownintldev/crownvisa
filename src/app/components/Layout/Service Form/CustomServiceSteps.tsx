import React from "react";

interface CheckoutStepsProps {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
}

const CustomServiceSteps: React.FC<CheckoutStepsProps> = (props) => {
  return (
    <div className="flex w-full mb-4 checkout-step">
      <div
        className={`flex-1 text-center py-2 ${
          props.step1 ? "font-bold border-b-2 border-blue-700" : "text-gray-500"
        }`}
      >
        Service Form
      </div>
      <div
        className={`flex-1 text-center py-2 ${
          props.step2 ? "font-bold border-b-2 border-blue-700" : "text-gray-500"
        }`}
      >
        Add Details
      </div>
    </div>
  );
};

export default CustomServiceSteps;
