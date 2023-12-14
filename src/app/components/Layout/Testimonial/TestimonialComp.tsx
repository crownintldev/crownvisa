import React from "react";
import { FaStar } from "react-icons/fa6";
interface Props {
  title: string;
  description: string;
  author: string;
}

const TestimonialComp: React.FC<Props> = ({ title, description, author }) => {
  return (
    <div className="keen-slider__slide">
      <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex space-x-2 mx-2">
            <div className="flex  items-center  space-x-1">
              <FaStar className="text-[#FFC224]" size={13} />
              <FaStar className="text-[#FFC224]" size={13} />
              <FaStar className="text-[#FFC224]" size={13} />
              <FaStar className="text-[#FFC224]" size={13} />
              <FaStar className="text-[#FFC224]" size={13} />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-[#FFC224] sm:text-3xl">
              {title}
            </p>

            <p className="mt-4 leading-relaxed text-gray-700">
              {description}
            </p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; {author}
        </footer>
      </blockquote>
    </div>
  );
};

export default TestimonialComp;
