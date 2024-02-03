import React from "react";

interface Props {
  icon: any;
  title: string;
  desc1: string;
  desc2?: string;
}

const ContactDetails: React.FC<Props> = ({ icon, title, desc1, desc2 }) => {
  return (
    <div className="flex">
      <div>{icon}</div>
      <div className="flex flex-col">
        <h2 className="font-bold">{title}</h2>
        <p>{desc1}</p>
        {desc2 && <p>{desc2}</p>}
      </div>
    </div>
  );
};

export default ContactDetails;
