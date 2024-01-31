import { Props } from "@/types/interfaces";
import { Badge } from "antd";
import Image from "next/image";
import React from "react";

const BlogComp: React.FC<Props> = ({
  image,
  date,
  title,
  description,
}) => {
  return (
    <div className="mb-10 w-full">
      {image && (
        <div className="mb-8 rounded hover:scale-105 transition-all">
          <Badge.Ribbon text={date} color="#fe720f" className="p-1 pr-3">
            <Image
              src={image}
              alt=""
              className="w-full"
              width={500}
              height={500}
            />
          </Badge.Ribbon>
        </div>
      )}
      <div>
        <h3>
          <a
            href="/#"
            className="mb-4 inline-block text-xl font-semibold hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </a>
        </h3>
        <p className=" dark:text-dark-6">{description}</p>
      </div>
    </div>
  );
};

export default BlogComp;
