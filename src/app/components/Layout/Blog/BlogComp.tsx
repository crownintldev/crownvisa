import { Badge } from "antd";
import Image from "next/image";
import React from "react";

interface BlogCompProps {
  image: string;
  date?: string;
  CardTitle: string;
  CardDescription: string;
}

const BlogComp: React.FC<BlogCompProps> = ({
  image,
  date,
  CardTitle,
  CardDescription,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 rounded hover:scale-105 transition-all">
            <Badge.Ribbon
              text={date}
              color="#FFC224"
              className="p-1 pr-3"
            >
              <Image
                src={image}
                alt=""
                className="w-full"
                width={500}
                height={500}
              />
            </Badge.Ribbon>
          </div>
          <div>
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComp;
