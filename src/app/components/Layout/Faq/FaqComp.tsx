import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

interface Props {
  title: string;
  details: string;
}

const FaqComp: React.FC<Props> = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
      onClick={toggleAccordion}
    >
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
      >
        <span className="flex text-lg font-semibold text-black">{title}</span>
        {isOpen ? <FaCaretDown /> : <FaCaretUp />}
      </button>
      {isOpen && (
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

export default FaqComp;
