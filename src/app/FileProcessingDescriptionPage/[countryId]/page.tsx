//@ts-nocheck
"use client";
import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/Navbar/HeaderComp";
import { Tabs, Timeline } from "antd";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [fileprocessingRequirements, setfileprocessingRequirements] = useState(
    []
  );
  const [fileprocessingtravelitinerary, setfileprocessingtravelitinerary] =
    useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countryOverview, setCountryOverview] = useState("");
  const [countryname, setCountryname] = useState("");
  const [bgurl, setbgurl] = useState("");
  const params = useParams();
  const countryid = params.countryId ? parseInt(params.countryId) : null;
  console.log(countryid);
  useEffect(() => {
    const fetchfileprocessingData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `/api/fileprocessingapi/fileprocessing/${countryid}`
        );
        setCountryOverview(data.fileprocessing.overview); // Set the fetched overview
        setCountryname(data.fileprocessing.title);
        setbgurl(data.fileprocessing.countrybgurl);
        console.log(data.fileprocessing.overview);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchfileprocessingRequirements = async () => {
      try {
        setIsLoading(true);
        // Replace with your API endpoint
        const { data } = await axios.get(
          `/api/fileprocessingapi/fileprocessingrequirements/countryid/${countryid}`
        );
        console.log(data);
        setfileprocessingRequirements(data.fileprocessingRequirements);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchfileprocessingTravelItinerary = async () => {
      try {
        setIsLoading(true);
        // Replace with your API endpoint
        const { data } = await axios.get(
          `/api/fileprocessingapi/fileprocessingtravelitinerary/countryid/${countryid}`
        );
        console.log(data);
        setfileprocessingtravelitinerary(data.fileprocessingtravelItinerary);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchfileprocessingData();
    fetchfileprocessingRequirements();
    fetchfileprocessingTravelItinerary();
  }, [countryid]);
  const tabItems = fileprocessingRequirements.map((req) => ({
    label: req.title,
    key: req.id.toString(),
    children: (
      <div
        className="custom-list-style"
        dangerouslySetInnerHTML={{ __html: req.description }}
      />
    ), // Handle rich text
  }));
  const timelineItems = fileprocessingtravelitinerary.map((itinerary) => ({
    children: (
      <div>
        <h2 className="font-bold">{itinerary.title}</h2>
        <div
          className="custom-list-style"
          dangerouslySetInnerHTML={{ __html: itinerary.description }}
        />
      </div>
    ),
    color: "#fe720f", // or any other color logic you have
  }));
  return (
    <>
      <HeaderComp />
      <div className="lg:pt-[120px] antialiased">
        <div
          className="h-[400px] flex flex-col rounded-3xl mx-[35px] bg-cover bg-center bg-fixed bg-no-repeat mb-10 relative"
          style={{ backgroundImage: `url(${bgurl})` }}
        >
          <div className="w-full h-full bg-gray-700 opacity-70 rounded-3xl absolute top-0 left-0"></div>
          <div className="flex justify-center items-center h-full flex-col z-10">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium  dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3  mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <Link
                      href="/AboutPage"
                      className="ms-1 text-sm font-medium  md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      About Company
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
            <h2 className="text-6xl">About us</h2>
          </div>
        </div>
        <div className=" container mx-auto p-5 bg-white">
          <div>
            <h1 className="font-bold text-[35px]">Visa Description Page</h1>
            <div className="mb-10">
              <Tabs
                defaultActiveKey="1"
                type="card"
                size="large"
                items={tabItems}
                className="custom-tabs-style" // Apply custom class here
              />
            </div>
            <div className="mb-10">
              <h2 className="text-[25px] mb-5">Overview About {countryname}</h2>
              <div
                className="text-justify space-y-3"
                dangerouslySetInnerHTML={{ __html: countryOverview }}
              />
            </div>
            <div className="mb-10">
              <h2 className="mb-5 text-[25px]">
                {countryname} Travel Itinerary
              </h2>
              <Timeline items={timelineItems} />
            </div>
            <div className="mb-10">
              <h2 className="mb-5">Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.779679693498!2d73.05559420000002!3d33.595188200000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df949dbba75c4f%3A0xaab826c83f4d297!2sKFC!5e0!3m2!1sen!2s!4v1698855696743!5m2!1sen!2s"
                style={{ border: "0", width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default Page;
