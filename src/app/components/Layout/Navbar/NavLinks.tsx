import React, { useState } from 'react';
import Link from 'next/link';
import { links } from './Mylinks';
import { AiOutlineDown } from 'react-icons/ai';

const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  return (
    <>
      {links.map((link) => (
        <div key={link.id} className="px-3">
          <div className="md:cursor-pointer group">
            <h2
              className="py-7 flex justify-between items-center md:pr-0 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('');
                setSubHeading('');
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <AiOutlineDown />
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <AiOutlineDown />
              </span>
            </h2>
            {link.submenu && (
              <div>
                <div className="absolute left-0 top-35 hidden w-screen group-hover:md:block hover:md:block bg-white">
                  <div className="grid grid-cols-12 gap-10 container mx-auto">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.id} className="col-span-4">
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-sm text-gray-600 my-2.5"
                            key={slink.id}
                          >
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.id}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading('')
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <AiOutlineDown />
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? 'md:hidden' : 'hidden'
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

export default NavLinks;
