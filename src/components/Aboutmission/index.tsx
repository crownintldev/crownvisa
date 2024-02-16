import React from 'react'
import { Para12 } from '../Paragraph'
import { aboutmission } from '../constants'
import Image from 'next/image'

const Aboutmission: React.FC = () => {
  return (
    <>
        <div className="md:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  items-center gap-5 space-y-4 md:space-y-0 pt-32">

{
    aboutmission.map((array , index)=>(
        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <h3 className="mb-3 text-xl font-bold text-yellow100">{array.title}</h3>
            <Image src={array.image} alt='image'/>
    
          <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{array.title}</h1>
          <div className="my-4">
            <Para12 title={array.description}/>
            
          </div>
        </div>
     
    ))
}
</div>



    </>
  )
}

export default Aboutmission