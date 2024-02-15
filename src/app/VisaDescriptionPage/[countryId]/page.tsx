//@ts-nocheck
"use client";
import FooterComp from "@/components/FooterComp";
import Navbar from "@/components/Navbar";
import { Tabs, Timeline } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [visaRequirements, setVisaRequirements] = useState([]);
  const [travelitinerary, settravelitinerary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countryOverview, setCountryOverview] = useState("");
  const [countryname, setCountryname] = useState("");
  const [bgurl, setbgurl] = useState("");
  const params = useParams();
  const countryid = params.countryId ? parseInt(params.countryId) : null;
  console.log(countryid);
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/api/visaapi/countries/${countryid}`);
        setCountryOverview(data.country.overview); // Set the fetched overview
        setCountryname(data.country.countryname);
        setbgurl(data.country.countrybgurl);
        console.log(data.country.overview);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchVisaRequirements = async () => {
      try {
        setIsLoading(true);
        // Replace with your API endpoint
        const { data } = await axios.get(
          `/api/visaapi/visarequirements/countryid/${countryid}`
        );
        console.log(data);
        setVisaRequirements(data.visaRequirements);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchTravelItinerary = async () => {
      try {
        setIsLoading(true);
        // Replace with your API endpoint
        const { data } = await axios.get(
          `/api/visaapi/travelitinerary/countryid/${countryid}`
        );
        console.log(data);
        settravelitinerary(data.travelItinerary);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountryData();
    fetchVisaRequirements();
    fetchTravelItinerary();
  }, [countryid]);
  const tabItems = visaRequirements.map((req) => ({
    label: req.title,
    key: req.id.toString(),
    children: (
      <div
        className="custom-list-style"
        dangerouslySetInnerHTML={{ __html: req.description }}
      />
    ), // Handle rich text
  }));
  const timelineItems = travelitinerary.map((itinerary) => ({
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
      <Navbar/>
      <div className="lg:pt-[120px] antialiased">
        <div
          className="h-[400px] flex flex-col rounded-3xl mx-[35px] bg-center bg-fixed bg-cover bg-no-repeat mb-10 relative"
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
