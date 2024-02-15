import { services } from '@/constants/constants';
import ServiceComp from './ServiceComp';
import { HeadingH1 } from '../Heading';

const Services = () => {
  return (
    <div className='mt-32 antialiased'>
      <HeadingH1 className='text-3xl' title={'Services'}/>
      <div className={` mt-10 flex ${services.length > 1 ? 'flex-wrap justify-center' : 'justify-center'}`}>
        {services.map((service, index) => (
          <div key={index} className="lg:w-1/4 md:w-1/2 w-full p-2  mb-5">
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

