import { Props } from '@/types/interfaces';
import React from 'react';

const FeatureComponents: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 h-full">
      {icon}
      <a href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3">
        {description}
      </p>
    </div>
  );
};

export default FeatureComponents;
