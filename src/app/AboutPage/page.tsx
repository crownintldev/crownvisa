//@ts-nocheck
import Mission from "@/components/Mission";
import Stats from "@/components/Stats/Stats";
import Values from "@/components/Values";
import Vision from "@/components/Vision";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="lg:pt-[120px] antialiased">
      <div className="h-[400px] flex flex-col rounded-3xl mx-[35px] bg-[url('https://motivoweb.com/saga/wp-content/themes/saga/assets/images/bg-titlebar.jpg')] bg-fixed bg-cover bg-no-repeat mb-10 relative">
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
      <section className="container mx-auto px-4 bg-white mb-10">
        <div className=" gap-10 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 mb-10">
          <div className="sm:text-lg">
            <h2 className="mb-3 text-3xl tracking-tight font-semibold  dark:text-white">
              Our Company <span className="text-[#fe720f]">History</span>
            </h2>
            <p className="mb-2">
              We are a family-owned business, established in 1990 by Mr. Nazir
              Ahmed (Late), We have been offering a range of travel and tourism
              services for over 32 years. The journey started with just four
              people and now we have grown to and now we have grown to More
              Mature and lot number of staff in counts. In 2007 we expanded our
              business to a corporate level and registered with many local and
              international organizations.
            </p>
            <p>
              In 2010 we were awarded the Sustainable Tourism Award sponsored by
              the Travel Port. This award recognizes our work in promoting
              sustainable tourism through an eco-friendly approach.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
              width={200}
              height={200}
            />
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-3">
            Crown International Travels (Pvt) Ltd.
          </h2>
          <p>
            is established in 2007 as IATA travel Agency. We have authority To
            issue Crown International Travels introduces itself as a company
            which offers lowest available rates on all of our service right on
            door steps. Crown International Travels is serving its valuable
            customers since 2007. We are operating from Rawalpindi, Office No
            F-15 Rizwan Arcade I, Adam Jee Road Saddar, offers its service to
            all over the Pakistan. Our company serves as a cheap alternative to
            other high priced companies in Rawalpindi.
          </p>
          <br />
          <p>
            We have a well co-coordinated team of professionals who are
            experienced and competent to provide quality services to our clients
            at their doorsteps, and that is the reason that we have won the
            trust and commendations of our clients. Crown International Travels
            is an experienced, locally owned and operated, independent Hajj &
            Umrah, Rent a Car, Air Ticketing and Travel Insurance Company that
            offers better prices selections and ultimate services which always
            exceed customers expectations. Crown International Travels offer all
            types of cars, hi-aces and coasters on hourly daily, monthly and
            yearly basis.
          </p>
          <br />
          <p>
            We are providing tour packages to our esteemed customers desiring to
            explore UAE, Turkey, Thailand, Malaysia, Indonesia, Singapore,
            Vietnam, brazil and egypt. As because of our outclass service our
            clients are increasing day by day demanding tour packages for other
            destinations as well.
          </p>
          <br />
          <p className="font-bold">
            We have Visa application center of Malaysia and nominated drop box
            agent of Vietnam.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 mb-10">
          <Mission />
          <Vision />
          <Values />
        </div>
        <div className="flex flex-col mb-10">
          <Stats />
        </div>
      </section>
    </div>
  );
};

export default Page;
