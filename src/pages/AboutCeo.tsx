import Image from "next/image";
import Link from "next/link";

const AboutCeoPage = () => {
  return (
    <section className="about-us lg:pt-[125px]">
      <div className="h-auto flex justify-center flex-col rounded-[30px] mx-[35px] bg-[#fe720f] mb-10">
        <div className="grid grid-cols-12 gap-10 container mx-auto">
          <div className="col-span-8 my-5">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium dark:text-gray-400 dark:hover:text-white"
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
                      className="rtl:rotate-180 w-3 h-3 mx-1"
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
                      href="/AboutCeoPage"
                      className="ms-1 text-sm font-medium  md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      About CEO
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
            <h2 className="text-4xl pt-3">CEO</h2>
            <h1 className="text-5xl underline decoration-black decoration-3">
              Mubashir Nazir
            </h1>
            <p className="pt-5">
              My name is Mubashir Nazir. I am the CEO of our family-owned travel
              company. We’re a leading provider of domestic & international
              tourism packages and tours for people from all over the world.
              We’re passionate about what we do and we want to share this
              passion with you.
            </p>
            <br />
            <p>
              Crown International Travels (Pvt) Ltd was founded by my father in
              1990, and has been passed down to me as the new generation. I’m
              proud of how far we’ve come since then, and I’m excited to take
              Crown International Travels (Pvt) Ltd to the next level!
            </p>
          </div>
          <div className="col-span-4">
            <Image
              src="/images/about-ceo_msg.png"
              alt="ceo image"
              className="pic"
              width={300}
              height={250}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <h2 className="text-3xl font-semibold">CEO Message</h2>
        <p className="pt-5">
          Crown International is a renowned name in the Travel industry since
          2007 and has excellent record of best customer satisfaction. We ensure
          that our client get professional, reliable and hassle free services
          24/7, round the year. We’ve a team of professionals who are qualified
          and have years of experience in handling travel requirement.
        </p>
        <br />
        <p>
          At Crown International , we strive to do our best and with “The Name
          of Confidence” you’re assured of quality services that are provided
          with the highest standards of customer support. As a leading Travel
          Agent in the area, we are tied-up with all airlines and hotels to
          provide our customers with the best value for their money.
        </p>
        <br />
        <p>
          Whether you want a cheap Air Ticket, looking forward to perform
          religious activity like Hajj or Umrah or just a leisure or family
          vacation, our experienced staff will help you choose from customized
          packages. Our travel representative can also compare prices across
          airlines and hotels to find the best deal for our customers to match
          their budget needs also.
        </p>
      </div>
    </section>
  );
};

export default AboutCeoPage;
