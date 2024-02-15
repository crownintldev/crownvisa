import Link from 'next/link';
import React from 'react';
import { HeadingH1 } from './Heading';
import Image from 'next/image';
const Logo = () => {
  


  return (
    <Link  href="/">
      {/* <HeadingH1 title={'LOGO'}/> */}
      {/* <Image className='w-[100px] sm:w-[150px]' src={logo} /> */}
      <Image
          src="https://www.crownintltravels.com/wp-content/uploads/2023/07/crown-logo-1.png"
          alt="crown-logo"
          className='w-14'
          width={70}
          height={70}
        />
    </Link>
  );
};

export default Logo;