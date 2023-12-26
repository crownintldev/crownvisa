"use client";
import { Collapse, CollapseProps, Tabs, Timeline } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const VisaDescriptionPage = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="pt-[110px]">
      <div className=" container mx-auto p-5 bg-white">
        <div>
          <h1 className="font-bold text-[35px]">Visa Description Page</h1>
          <div className="mb-10">
            <Tabs
              defaultActiveKey="1"
              type="card"
              size="large"
              items={new Array(3).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                  label: `Card Tab ${id}`,
                  key: id,
                  children: `Content of card tab ${id}`,
                };
              })}
            />
            <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
          </div>
          <div className="mb-10">
            <h2 className="text-[25px] mb-5">Overview About Malaysia</h2>
            <p className="text-justify">
              Malaysia is a vibrant and diverse country located in Southeast Asia, known for its stunning natural landscapes, rich cultural heritage, and modern cities. It is a melting pot of various cultures, including Malay, Chinese, Indian, and indigenous groups. Malaysia is home to numerous attractions, including beautiful beaches, lush rainforests, and impressive architecture, such as the iconic Petronas Twin Towers in Kuala Lumpur.

              The country is also known for its delicious cuisine, which is a fusion of various culinary traditions. Popular dishes include nasi lemak, satay, and laksa. Additionally, Malaysia is a shopper’s paradise, with an abundance of shopping malls and markets offering everything from luxury brands to unique local handicrafts.

              In terms of tourism, Malaysia is a popular destination for both leisure and business travelers, with a well-developed tourism industry that offers a range of services and experiences. From exploring the historic sites of Malacca to scuba diving in the waters of Sipadan Island, there is something for everyone in Malaysia.

              To make the most of your trip to Malaysia, it is recommended to plan ahead and book accommodation, transportation, and activities in advance. With its friendly locals, stunning scenery, and vibrant culture, Malaysia is truly a destination worth experiencing.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="mb-5 text-[25px]">Malaysia Travel Itinerary</h2>
            <Timeline
              items={[
                {
                  children: <div>
                    <h2 className="font-bold">Day 1 Planning</h2>
                    <ul className="list-disc pl-5">
                      <li>Arrive at Kuala Lumpur International Airport and check into your hotel.</li>
                      <li>Visit the iconic Petronas Twin Towers and take in the breathtaking views of the city from the observation deck.</li>
                      <li>Stroll around the lively Bukit Bintang shopping district and indulge in some retail therapy.</li>
                      <li>End the day with a visit to the vibrant night market at Jalan Alor and taste some delicious local street food.</li>
                    </ul>
                  </div>,
                  color: "#fe720f"
                },
                {
                  children: <div>
                    <h2 className="font-bold">Day 1 Planning</h2>
                    <ul className="list-disc pl-5">
                      <li>Arrive at Kuala Lumpur International Airport and check into your hotel.</li>
                      <li>Visit the iconic Petronas Twin Towers and take in the breathtaking views of the city from the observation deck.</li>
                      <li>Stroll around the lively Bukit Bintang shopping district and indulge in some retail therapy.</li>
                      <li>End the day with a visit to the vibrant night market at Jalan Alor and taste some delicious local street food.</li>
                    </ul>
                  </div>,
                  color: "#fe720f"
                },
                {
                  children: <div>
                    <h2 className="font-bold">Day 1 Planning</h2>
                    <ul className="list-disc pl-5">
                      <li>Arrive at Kuala Lumpur International Airport and check into your hotel.</li>
                      <li>Visit the iconic Petronas Twin Towers and take in the breathtaking views of the city from the observation deck.</li>
                      <li>Stroll around the lively Bukit Bintang shopping district and indulge in some retail therapy.</li>
                      <li>End the day with a visit to the vibrant night market at Jalan Alor and taste some delicious local street food.</li>
                    </ul>
                  </div>,
                  color: "#fe720f"
                },
                {
                  children: <div>
                    <h2 className="font-bold">Day 1 Planning</h2>
                    <ul className="list-disc pl-5">
                      <li>Arrive at Kuala Lumpur International Airport and check into your hotel.</li>
                      <li>Visit the iconic Petronas Twin Towers and take in the breathtaking views of the city from the observation deck.</li>
                      <li>Stroll around the lively Bukit Bintang shopping district and indulge in some retail therapy.</li>
                      <li>End the day with a visit to the vibrant night market at Jalan Alor and taste some delicious local street food.</li>
                    </ul>
                  </div>,
                  color: "#fe720f"
                },
              ]}
            />
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
  );
};

export default VisaDescriptionPage;
