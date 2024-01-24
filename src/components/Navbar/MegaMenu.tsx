//@ts-nocheck
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
import { links } from "@/constants/constants";

const MegaMenu = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [itemid, setitemid] = useState(0);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  useEffect(()=>{

  },[submenuOpen]) 
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
                setSubmenuOpen(!submenuOpen);
              }}
            >
              {link.name}
              <span className="md:hidden inline">
                <AiOutlineDown />
              </span>
              <span className={`md:ml-2 md:block hidden ${submenuOpen ? 'group-hover:rotate-180' : ''} `}>
                <AiOutlineDown />
              </span>
            </li>
            {link.submenu && submenuOpen && (
              <div onMouseLeave={()=>{
                setSubmenuOpen(!submenuOpen);
              }}>
                <div className="lg:absolute lg:left-0 lg:top-[80px] w-full bg-white py-5 lg:card-shadow px-3">
                  <div className="grid grid-cols-12 gap-10 container mx-auto">
                    <div className="lg:col-span-3 sm:col-span-4 border-r border-black">
                      {link.sublinks.map((mysublinks) => (
                        <h2
                          className="my-5 mr-3"
                          key={mysublinks.id}
                          onClick={() => setitemid(mysublinks.id - 1)}
                        >
                          {mysublinks.Head}
                        </h2>
                      ))}
                    </div>
                    <div className="lg:col-span-9 sm:col-span-8">
                      <div className="grid grid-cols-12">
                        {link.sublinks[itemid].sublink.map((slink) => (
                          <div className="lg:col-span-4 sm:col-span-12 text-sm text-black my-3" key={slink.id}>
                            <Link
                              href={slink.link}
                              className="hover:text-primary underline"
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
        </div>
      ))}
    </>
  );
};

export default MegaMenu;
