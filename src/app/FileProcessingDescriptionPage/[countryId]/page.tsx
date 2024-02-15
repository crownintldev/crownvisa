//@ts-nocheck
"use client";
import FooterComp from "@/components/FooterComp";
import Header from "@/components/Header";
import { Tabs, Timeline } from "antd";
import axios from "axios";
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
      <Header/>
      <div className="lg:pt-[120px] antialiased">
        <div
          className="h-[400px] flex flex-col rounded-3xl mx-[35px] bg-cover bg-center bg-fixed bg-no-repeat mb-10 relative"
          style={{ backgroundImage: `url(${bgurl})` }}
        >
          <div className="w-full h-full bg-gray-700 opacity-70 rounded-3xl absolute top-0 left-0"></div>
          <div className="flex justify-center items-center h-full flex-col z-10">
            <h2 className="text-6xl">{countryname}</h2>
          </div>
        </div>
        <div className=" container mx-auto p-5 bg-white">
          <div>
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
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default Page;
