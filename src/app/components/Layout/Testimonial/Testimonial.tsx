import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { useEffect, useRef, useState } from "react";
import TestimonialComp from "./TestimonialComp";

const Testimonial = () => {
  const [slider, setSlider] = useState<KeenSliderInstance | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderContainerRef.current && !slider) {
      const newSlider = new KeenSlider(sliderContainerRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });

      setSlider(newSlider);
    }

    // Cleanup on unmount
    return () => {
      if (slider) {
        slider.destroy();
      }
    };
  }, [slider]);
  return (
    <section className="bg-[#F5F5F5] mb-10 antialiased">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
              Dont just take our word for it...
            </h2>

            <p className="mt-4 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                onClick={() => slider?.prev()}
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-[#fe720f] p-3 text-[#fe720f] transition hover:bg-[#fe720f] hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                onClick={() => slider?.next()}
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-[#fe720f] p-3 text-[#fe720f] transition hover:bg-[#fe720f] hover:text-black"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div
              id="keen-slider"
              className="keen-slider"
              ref={sliderContainerRef}
            >
              <TestimonialComp
                title="Stayin Alive"
                description="No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?"
                author="Michael Scott"
              />
              <TestimonialComp
                title="Stayin Alive"
                description="No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?"
                author="Michael Scott"
              />
              <TestimonialComp
                title="Stayin Alive"
                description="No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?"
                author="Michael Scott"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            onClick={() => slider?.prev()}
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full border border-[#FFC224] p-4 text-[#FFC224] transition hover:bg-[#FFC224] hover:text-black"
          >
            <svg
              className="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            onClick={() => slider?.next()}
            aria-label="Next slide"
            id="keen-slider-next"
            className="rounded-full border border-[#FFC224] p-4 text-[#FFC224] transition hover:bg-[#FFC224] hover:text-black"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
