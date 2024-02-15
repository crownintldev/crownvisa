import React from 'react'

export const Para16 = ({title ,icon,className}) => {
  return (
    <div>
        <p className={`text-16  gap-2 ${className}`}>
            {icon}{title}
        </p>
    </div>
  )
};

export const Para14 = ({title ,icon, className}) => {
    return (
      <div>
          <p className={`text-14  gap-2 ${className}`}>
              {icon}{title}
          </p>
      </div>
    )
  };
  export const Para12 = ({title ,icon, className}) => {
    return (
      <div>
          <p className={`text-12  gap-2 ${className}`}>
              {icon}{title}
          </p>
      </div>
    )
  };

  export const Para18 = ({title ,icon, className}) => {
    return (
      <div>
          <p className={`text-18  gap-2 ${className}`}>
              {icon}{title}
          </p>
      </div>
    )
  };