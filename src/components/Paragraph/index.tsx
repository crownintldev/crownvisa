import React from 'react';

type ParaProps = {
  title: string;
  icon?: React.ReactNode; // icon is optional, can be any react element or component
  className?: string; // className is optional
};

export const Para16: React.FC<ParaProps> = ({ title, icon, className }) => {
  return (
   
      <p className={`text-16 gap-2 ${className}`}>
        {icon}{title}
      </p>
    
  );
};

export const Para14: React.FC<ParaProps> = ({ title, icon, className }) => {
  return (
   
      <p className={`text-14 gap-2 ${className}`}>
        {icon}{title}
      </p>
    
  );
};

export const Para12: React.FC<ParaProps> = ({ title, icon, className }) => {
  return (
   
      <p className={`text-12 gap-2 ${className}`}>
        {icon}{title}
      </p>
    
  );
};

export const Para18: React.FC<ParaProps> = ({ title, icon, className }) => {
  return (
   
      <p className={`text-18 gap-2 ${className}`}>
        {icon}{title}
      </p>
    
  );
};
