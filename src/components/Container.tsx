//@ts-nocheck

import React from 'react'

const Container:React.FC<props> = ({className, children}) => {

  return (

    <div className={`max-w-screen-xxl mx-auto px-4 md:px-6 lg:px-8 ${className} ` } >
      {children}
      </div>

        
  )
}

export default Container