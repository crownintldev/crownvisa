import React from 'react';

interface Props {
  icon: any;
  title: string;
  description: string;
}

const FeatureComponents: React.FC<Props> = ({ title, description, icon }) => {
  return (
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
    </div>
  );
};

export default FeatureComponents;
