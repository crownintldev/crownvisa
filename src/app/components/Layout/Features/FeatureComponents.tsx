import React from 'react';

interface Props {
  icon: any;
  title: string;
  description: string;
}

const FeatureComponents: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start p-2 border rounded-md h-full card-shadow">
      <div className="mr-4 text-2xl">{icon}</div>
      <div>
        <h2 className="mb-2 font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureComponents;
