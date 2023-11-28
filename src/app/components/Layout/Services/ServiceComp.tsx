// components/ServiceCard.tsx
import { Button } from 'antd';
import React from 'react';

interface Props {
  icon: any;
  title: string;
  description: string;
}

const ServiceComp: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="card flex justify-center items-center flex-col bg-white hover:scale-105">
      <div className="icon">{icon}</div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div>
        <Button type="primary" className="bg-black">
          Details
        </Button>
      </div>
    </div>
  );
};

export default ServiceComp;
