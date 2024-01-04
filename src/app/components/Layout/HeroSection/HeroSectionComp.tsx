"use client";
import { DatePicker, DatePickerProps, Select } from "antd";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange, MdTour } from "react-icons/md";
import CarouselComp from "./CarouselComp";

const images = [
  "https://creativelayers.net/themes/viatours-html/img/hero/1/1.png",
  "https://wallpapers.com/images/featured/travel-ibk7fgrvtvhs7qzg.jpg",
];

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const HeroSectionComp = () => {
  const [activeTab, setActiveTab] = useState("Visa");
  const tabs = ["Visa", "Flights", "Hotels", "Insurance"];

  // Function to change the active tab
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="relative bg-transparent rounded-[30px] mx-[35px] lg:pt-[120px] antialiased">
        <CarouselComp images={images} />
        <div className="mt-[-200px] relative">
          <section>
            <div
              className="py-8 md:px-4 mx-auto max-w-screen-xl text-center lg:py-16"
              style={{
                background: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div>
                <div className="mb-1">
                  <ul
                    className="flex justify-center items-center text-md text-center "
                    role="tablist"
                  >
                    {/* Tab Buttons */}
                    {tabs.map((tab) => (
                      <li key={tab} className="me-2" role="presentation">
                        <button
                          className={`inline-block w-full px-3 text-md text-black rounded-lg  active focus:outline-none ${activeTab === tab
                            ? "bg-[#fe720f] text-white"
                            : "bg-gray-100 text-black"
                            }`}
                          type="button"
                          role="tab"
                          onClick={() => handleTabClick(tab)}
                        >
                          {tab}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tab Content */}
                {activeTab === "Visa" && (
                  <div className="flex justify-center">
                    <div className="flex md:flex-row flex-col justify-between rounded-lg bg-white md:w-[700px] w-[300px] p-2">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <FaLocationDot size={30} />
                        </div>
                        <div>
                          <Select
                            className="w-[150px]"
                            placeholder="where"
                            onChange={handleChange}
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <MdDateRange size={30} />
                        </div>
                        <div>
                          <DatePicker onChange={onChange} />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <MdTour size={30} />
                        </div>
                        <div>
                          <Select
                            className="w-[150px]"
                            onChange={handleChange}
                            placeholder="where"
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div>
                        <button className="btn bg-[#fe720f] px-3 py-3 text-md text-white flex justify-center items-center rounded-md h-full">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "Flights" && (
                  <div className="flex justify-center">
                    <div className="flex md:flex-row flex-col justify-between rounded-lg bg-white md:w-[700px] w-[300px] p-2">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <FaLocationDot size={30} />
                        </div>
                        <div>
                          <Select
                            className="w-[150px]"
                            placeholder="where"
                            onChange={handleChange}
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <MdDateRange size={30} />
                        </div>
                        <div>
                          <DatePicker onChange={onChange} />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <MdTour size={30} />
                        </div>
                        <div>
                          <Select
                            className="w-[150px]"
                            onChange={handleChange}
                            placeholder="where"
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div>
                        <button className="btn bg-[#fe720f] px-3 py-3 text-md text-white flex justify-center items-center rounded-md h-full">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "Hotels" && (
                  <div className="flex justify-center">
                    <div className="flex md:flex-row flex-col justify-between rounded-lg bg-white md:w-[700px] w-[300px] p-2">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <FaLocationDot size={30} />
                        </div>
                        <div>
                          <Select
                            className="w-[150px]"
                            placeholder="where"
                            onChange={handleChange}
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <MdDateRange size={30} />
                        </div>
                        <div>
                          <DatePicker onChange={onChange} />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <MdTour size={30} />
                        </div>
                        <div>
                          <Select
                            className="w-[150px]"
                            onChange={handleChange}
                            placeholder="where"
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div>
                        <button className="btn bg-[#fe720f] px-3 py-3 text-md text-white flex justify-center items-center rounded-md h-full">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "Insurance" && (
                  <div className="flex justify-center">
                    <div className="flex md:flex-row flex-col justify-between rounded-lg bg-white md:w-[700px] w-[300px] p-2">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <FaLocationDot size={30} />
                        </div>
                        <div>
                          <Select
                            className="w-[150px]"
                            placeholder="where"
                            onChange={handleChange}
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <MdDateRange size={30} />
                        </div>
                        <div>
                          <DatePicker onChange={onChange} />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <MdTour size={30} />
                        </div>
                        <div>
                          <Select
                            className="w-[150px]"
                            onChange={handleChange}
                            placeholder="where"
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </div>
                      </div>
                      <div>
                        <button className="btn bg-[#fe720f] px-3 py-3 text-md text-white flex justify-center items-center rounded-md h-full">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HeroSectionComp;
