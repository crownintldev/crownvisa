import { Avatar, Rate } from 'antd';
import Image from 'next/image';
import React from 'react';

interface CardProps {
  imageUrl: string;
  flagUrl: string;
  altText: string;
  title: string;
  subtitle: string;
  footerText: string;
  rating: number;
}

const CardComp: React.FC<CardProps> = ({
  imageUrl,
  altText,
  title,
  subtitle,
  footerText,
  flagUrl,
  rating,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden max-w-sm p-5 my-5 relative border-2 border-white w-[90%]">
      <a href="/VisaDescription">
        <Image
          src={imageUrl}
          alt={altText}
          width={350}
          height={250}
          className="rounded"
        />
      </a>
      <div>
        <div className="bg-yellow-300 p-2 text-black font-bold absolute top-0 right-0">
          <a href="/VisaDescription" className="no-underline hover:text-black">
            {title}
          </a>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold mt-2">
              <a
                href="/VisaDescription"
                className="no-underline hover:text-black"
              >
                {subtitle}
              </a>
            </h2>
            <p className="text-gray-600 mt-1">
              <a
                href="/VisaDescription"
                className="no-underline hover:text-black"
              >
                {footerText}
              </a>
            </p>
            <Rate allowHalf defaultValue={rating} className="mt-2" />
          </div>
          <Avatar
            src={<Image src={flagUrl} alt="avatar" width={50} height={50} />}
            size={45}
            className="absolute bottom-[90px] right-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CardComp;
