import React from "react";
import BlogComp from "./BlogComp";
import { blogs } from "@/constants/constants";

const Blog = () => {
  return (
    <>
      <section className="bg-white dark:bg-dark   mt-32 antialiased">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[510px] text-center mb-5">
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Our Recent Blogs
                </h2>
                <p className="">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap mt-20">
            {blogs.map((blog, index) => (
              <div className="w-full px-4 md:w-1/2 lg:w-1/4" key={index}>
                <BlogComp
                  date={blog.date}
                  title={blog.CardTitle}
                  description={blog.CardDescription}
                  image={blog.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
