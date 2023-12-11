import { MdFlightTakeoff } from 'react-icons/md';
import ServiceComp from './ServiceComp';
import { FaCcVisa, FaHotel, FaMapLocationDot } from 'react-icons/fa6';
import { AiFillCar } from 'react-icons/ai';
import { BiSolidTruck } from 'react-icons/bi';
import { GiPathDistance } from 'react-icons/gi';

const Services = () => {
  const services = [
    {
      icon: <MdFlightTakeoff size={40} />,
      title: "Air Tickets",
      description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
    },
    {
      icon: <FaMapLocationDot size={40} />,
      title: "Visa Services",
      description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
    },
    {
      icon: <GiPathDistance size={40} />,
      title: "Tours & holidays",
      description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
    },
    {
      icon: <FaCcVisa size={40} />,
      title: "File Processing",
      description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
    },
    {
      icon: <AiFillCar size={40} />,
      title: "Travel Insurrance",
      description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
    },
    {
      icon: <FaHotel  size={40} />,
      title: "Hotel Booking",
      description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
    },
    {
      icon: <BiSolidTruck size={40} />,
      title: "Hajj & Umrah",
      description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
    },
    {
      icon: <BiSolidTruck size={40} />,
      title: "Rent a Car",
      description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
    },
    // ... add other service objects here
  ];

  return (
    <div className='mb-10'>
      <h2 className="font-bold text-[25px] text-center mb-3">Services</h2>
      <div className={`flex ${services.length > 1 ? 'flex-wrap justify-center' : 'justify-center'} my-3`}>
        {services.map((service, index) => (
          <div key={index} className="lg:w-1/4 md:w-1/2 w-full p-2">
            <ServiceComp
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

