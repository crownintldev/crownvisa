//@ts-nocheck
import Stats from "@/app/components/Layout/Stats/Stats";
import About from "./About";
import Mission from "./Mission";
import Values from "./Values";
import Vision from "./Vision";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="lg:pt-[110px]">
      <div className="h-[400px] flex justify-center pl-[60px] items-center flex-col rounded-[30px] mx-[35px] bg-[url('https://motivoweb.com/saga/wp-content/themes/saga/assets/images/bg-titlebar.jpg')] bg-fixed bg-cover bg-no-repeat mb-10">
        <h2 className="text-[55px]">About us</h2>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:text-white"
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
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-700 mx-1"
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
                  className="ms-1 text-sm font-medium text-gray-700  md:ms-2 dark:text-gray-400 dark:hover:text-white"
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
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didnt reinvent the wheel</h2>
            <p className="mb-2">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" width={200} height={200} />
            <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" width={200} height={200} />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 grid grid-cols-12 gap-6  mb-10">
        {/* <About /> */}
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
