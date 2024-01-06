//@ts-nocheck
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
import { links } from "@/constants/constants";

const MegaMenu = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [itemid, setitemid] = useState(0);
  return (
    <>
      {links.map((link) => (
        <div key={link.id} className="px-1">
          <div className="md:cursor-pointer group">
            <li
              className="py-1 flex justify-between items-center md:px-0 group px-3"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="md:hidden inline">
                <AiOutlineDown />
              </span>
              <span className=" md:ml-2  md:block hidden group-hover:rotate-180">
                <AiOutlineDown />
              </span>
            </li>
            {link.submenu && (
              <div>
                <div className="absolute left-0 top-[50px] hidden w-full group-hover:md:block hover:md:block bg-white py-5 card-shadow px-3">
                  <div className="grid grid-cols-12 gap-10 container mx-auto">
                    <div className="lg:col-span-2 md:col-span-6 col-span-12 border-r border-black">
                      {link.sublinks.map((mysublinks) => (
                        <h2
                          className="border border-black p-3 rounded-md bg-[#fe720f] my-5 mr-3"
                          key={mysublinks.id}
                          onClick={() => setitemid(mysublinks.id - 1)}
                        >
                          {mysublinks.Head}
                        </h2>
                      ))}
                    </div>
                    <div className="lg:col-span-10 md:col-span-6 col-span-12">
                      <div className="grid grid-cols-12">
                        {link.sublinks[itemid].sublink.map((slink) => (
                          <div className="col-span-4 text-sm text-black my-5" key={slink.id}>
                            <Link
                              href={slink.link}
                              className="hover:text-primary border border-black p-3 rounded-md bg-[#fe720f]"
                            >
                              {slink.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.id}>
                <div>
                  <h2
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <AiOutlineDown />
                    </span>
                  </h2>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.id}>
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MegaMenu;
