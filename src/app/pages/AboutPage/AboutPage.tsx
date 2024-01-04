//@ts-nocheck
import Stats from "@/app/components/Layout/Stats/Stats";
import Image from "next/image";
import Mission from "./Mission";
import Values from "./Values";
import Vision from "./Vision";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="lg:pt-[110px] antialiased">
      <div className="h-[400px] flex justify-center pl-[60px] items-center flex-col rounded-[30px] mx-[35px] bg-[url('https://motivoweb.com/saga/wp-content/themes/saga/assets/images/bg-titlebar.jpg')] bg-fixed bg-cover bg-no-repeat mb-10">
        <h2 className="text-[55px]">About us</h2>
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
                <a
                  href="/AboutPage"
                  className="ms-1 text-sm font-medium  md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  About Company
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <section className="bg-white dark:bg-gray-900 mb-10">
        <div className=" gap-10 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
          <div className="sm:text-lg">
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold  dark:text-white">Our Company <span className="text-[#fe720f]">History</span></h2>
            <p className="mb-2">We are a family-owned business, established in 1990 by Mr. Nazir Ahmed (Late), We have been offering a range of travel and tourism services for over 32 years. The journey started with just four people and now we have grown to and now we have grown to More Mature and lot number of staff in counts. In 2007 we expanded our business to a corporate level and registered with many local and international organizations.</p>
            <p>In 2010 we were awarded the Sustainable Tourism Award sponsored by the Travel Port. This award recognizes our work in promoting sustainable tourism through an eco-friendly approach.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" width={200} height={200} />
            <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" width={200} height={200} />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 grid grid-cols-12 gap-6  mb-10">
        <Mission />
        <Vision />
        <Values />
      </div>
      <div className="container mx-auto flex flex-col my-3 px-4">
        <Stats />
      </div>
    </div>
  );
};

export default AboutPage;
