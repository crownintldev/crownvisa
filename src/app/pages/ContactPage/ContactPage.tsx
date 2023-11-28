import React from 'react';
import { Breadcrumb } from 'antd';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://www.usinformationsearch.com/wp-content/uploads/2016/05/custom-background-checks-you-can-trust1-5.jpg)`,
        }}
        className="h-[300px] flex justify-center items-start pl-[60px] flex-col"
      >
        <h2 className="text-[35px]">Contact us</h2>
        <Breadcrumb
          separator=">"
          items={[
            {
              title: 'Home',
              href: '/',
              className: 'bg-white',
            },
            {
              title: 'Contact',
              href: '/ContactPage',
              className: 'bg-white',
            },
          ]}
        />
      </div>
      <div className="container mx-auto px-4 pt-3">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
