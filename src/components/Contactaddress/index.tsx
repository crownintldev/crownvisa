import React from 'react'
import Container from '../Container'
import { HeadingH5, HeadingH6 } from '../Heading'
import { Para14 } from '../Paragraph'
import { MdMail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa6'

const Contactaddress: React.FC = () => {
  return (
    <>
    <Container classNam='mt-32'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center p-5'>
            <div className=' rounded-md shadow bg-yellowlight text-white  p-4 pb-10  space-y-4 relative mt-5 mb-5 w-full md:w-[350px]'>
                <div className='border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-6 backdrop-blur-md '>
                    <MdMail className="text-yellow100/50" size={25} />
                </div> 
                <HeadingH6 title='Email'/>
                <div>
                <Para14 title='info@crownintltechnology.com'/>
                <Para14 title='crownintltechnology@gmail.com'/>
                </div>
                <div className=' border shadow rounded-full w-10 h-10 -right-5 -bottom-3  absolute  backdrop-blur-sm '/>
                
            </div>

            <div className=' rounded-md shadow bg-yellowlight text-white  p-4 pb-10  space-y-4 relative mt-5 mb-5 w-full md:w-[350px]'>
                <div className='border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-6 backdrop-blur-md '>
                    <BsFillTelephoneFill className="text-yellow100/50" size={25} />
                </div> 
                <HeadingH6 title='Phone Number'/>
                <div>
                <Para14 title='+92 051 5511155'/>
                <Para14 title='+92 328 0143786'/>
                </div>
                <div className='  shadow rounded-full w-10 h-10 -right-5 -bottom-3 absolute  backdrop-blur-sm ' />
              
            </div>

            <div className=' rounded-md shadow bg-yellowlight text-white  p-4 pb-10  space-y-4 relative mt-5 mb-5 w-full md:w-[350px]'>
                <div className='border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-6 backdrop-blur-md '>
                    <FaAddressCard className="text-yellow100/50" size={25} />
                </div> 
                <HeadingH6 title='Address'/>
                <div>
                <Para14 title='Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road
                Saddar, Rawalpindi, Punjab, Pakistan'/>
                </div>
                <div className='  shadow rounded-full w-10 h-10 -right-5  absolute  backdrop-blur-sm ' />
              
            </div>
     
        </div>
    </Container>  
    </>
  )
}

export default Contactaddress