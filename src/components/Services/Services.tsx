import { services } from '@/constants/constants';
import ServiceComp from './ServiceComp';

const Services = () => {
  return (
    <div className='mb-10 antialiased'>
      <h2 className="font-bold text-[25px] text-center mb-3">Services</h2>
      <div className={`flex ${services.length > 1 ? 'flex-wrap justify-center' : 'justify-center'}`}>
        {services.map((service, index) => (
          <div key={index} className="lg:w-1/4 md:w-1/2 w-full p-2 mb-5">
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

