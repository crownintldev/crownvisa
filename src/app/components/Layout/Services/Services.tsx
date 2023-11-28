import React from 'react';
import { MdFlightTakeoff } from 'react-icons/md';
import { FaCcVisa, FaMapLocationDot } from 'react-icons/fa6';
import { GiPathDistance } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { BiSolidTruck } from 'react-icons/bi';
import ServiceComp from './ServiceComp';

const Services = () => {
  return (
    <>
      <h2 className="font-bold text-[25px] text-center my-3">Services</h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-4 md:col-span-6 col-span-12 my-2 justify-self-center">
          <ServiceComp
            icon={<MdFlightTakeoff size={40} />}
            title="Air Tickets"
            description="We are a leading online ticketing agency that specializes in both domestic and international flights."
          />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12 my-2 justify-self-center">
          <ServiceComp
            icon={<FaMapLocationDot size={40} />}
            title="Air Tickets"
            description="We are a leading online ticketing agency that specializes in both domestic and international flights."
          />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12 my-2 justify-self-center">
          <ServiceComp
            icon={<GiPathDistance size={40} />}
            title="Air Tickets"
            description="We are a leading online ticketing agency that specializes in both domestic and international flights."
          />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12 my-2 justify-self-center">
          <ServiceComp
            icon={<FaCcVisa size={40} />}
            title="Air Tickets"
            description="We are a leading online ticketing agency that specializes in both domestic and international flights."
          />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12 my-2 justify-self-center">
          <ServiceComp
            icon={<AiFillCar size={40} />}
            title="Air Tickets"
            description="We are a leading online ticketing agency that specializes in both domestic and international flights."
          />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12 my-2 justify-self-center">
          <ServiceComp
            icon={<BiSolidTruck size={40} />}
            title="Air Tickets"
            description="We are a leading online ticketing agency that specializes in both domestic and international flights."
          />
        </div>
      </div>
    </>
  );
};

export default Services;
