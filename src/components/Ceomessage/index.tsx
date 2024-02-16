import React from 'react'
import Container from '../Container'
import { Para14 } from '../Paragraph'
import { HeadingH1, HeadingH2, HeadingH3, HeadingH5, HeadingH6 } from '../Heading'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Ceomessage: React.FC = () => {
  return (
    <>
    <Container className='pt-20'>
        <div className='shadow rounded-md p-3 pt-10 pb-10 space-y-2'> 
        <HeadingH6  title='CEO Message'/>
        <HeadingH3 className=' text-yellow100' title='Mubashir Nazir'/>
        
        <RiDoubleQuotesL className="text-yellow100" size={25} />
        <Para14 className='' title=' Crown International is a renowned name in the Travel industry since
            2007 and has excellent record of best customer satisfaction. We
            ensure that our client get professional, reliable and hassle free
            services 24/7, round the year. We’ve a team of professionals who are
            qualified and have years of experience in handling travel
            requirement.'/>
            <Para14 title='At Crown International , we strive to do our best and with “The Name
            of Confidence” you’re assured of quality services that are provided
            with the highest standards of customer support. As a leading Travel
            Agent in the area, we are tied-up with all airlines and hotels to
            provide our customers with the best value for their money.'/>
            <Para14 title='Whether you want a cheap Air Ticket, looking forward to perform
            religious activity like Hajj or Umrah or just a leisure or family
            vacation, our experienced staff will help you choose from customized
            packages. Our travel representative can also compare prices across
            airlines and hotels to find the best deal for our customers to match
            their budget needs also.'/>
            <RiDoubleQuotesR className="text-yellow100" size={25} />

        </div>
    </Container>
        
    </>
  )
}

export default Ceomessage