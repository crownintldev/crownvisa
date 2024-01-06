import Image from "next/image";

const AboutCeoPage = () => {
  return (
    <section className="about-us lg:pt-[100px]">
      <div className="h-[400px] flex justify-center pl-[60px] items-center flex-col rounded-[30px] mx-[35px] bg-[url('https://motivoweb.com/saga/wp-content/themes/saga/assets/images/bg-titlebar.jpg')] bg-fixed bg-cover bg-no-repeat">
        <h2 className="text-[55px]">About CEO</h2>
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
                  href="/AboutCeoPage"
                  className="ms-1 text-sm font-medium text-gray-700  md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  About CEO
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="about">
        <div className="text">
          <h2>CEO Message</h2>
          <p>
            Crown International is a renowned name in the Travel industry since
            2007 and has excellent record of best customer satisfaction. We
            ensure that our client get professional, reliable and hassle free
            services 24/7, round the year. We’ve a team of professionals who are
            qualified and have years of experience in handling travel
            requirement.
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
        <Image
          src="/images/about-ceo_msg.jpg"
          alt="ceo image"
          className="pic h-full"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default AboutCeoPage;
