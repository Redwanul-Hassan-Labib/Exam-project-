import React from "react";

const Pricing = () => {
  return (
    <section className="bg-white pb-[120px]">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-16">
              <div
                className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 max-w-[325px] lg:max-w-[400px] xl:max-w-[527px]"
                data-aos="fade-up"
              >
                <span className="text-orange text-xl">Pricing</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  Stay chill and pick your
                  <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[13px] before:left-[-4px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    pl
                  </span>
                  an
                </h3>
              </div>

              <div
                className="flex mt-8 md:mt-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a
                  href="contact.html"
                  className="flex items-center flex-wrap btn-primary group"
                >
                  Contact for Custom Project
                  <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/*  Pricing Item Start  */}

          <div
            className="p-6 lg:p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-normal font-sans leading-none text-black-text-600">
                Basic
              </span>
              <span className="font-bold text-xl font-Syne text-orange">
                $48/h
              </span>
            </div>

            <div className="flex flex-wrap justify-between items-end">
              <div>
                <h4 className="font-bold font-Syne leading-10 text-[32px] text-black-800 mb-1">
                  20 hrs
                </h4>
                <p className="text-lg font-normal font-sans leading-none text-black-text-600">
                  10 hours per week
                </p>
              </div>

              <a
                href="#"
                className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all"
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    className="transition-all"
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Pricing Item End  */}
          {/*  Pricing Item Start  */}

          <div
            className="p-6 lg:p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 group"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-normal font-sans leading-none text-black-text-600">
                Premium
              </span>
              <span className="font-bold text-xl font-Syne text-orange">
                $60/h
              </span>
            </div>

            <div className="flex flex-wrap justify-between items-end">
              <div>
                <h4 className="font-bold font-Syne leading-10 text-[32px] text-black-800 mb-1">
                  30 hrs
                </h4>
                <p className="text-lg font-normal font-sans leading-none text-black-text-600">
                  15 hours per week
                </p>
              </div>

              <a
                href="#"
                className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all"
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    className="transition-all"
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/*  Pricing Item End  */}
          {/*  Pricing Item Start  */}

          <div
            className="p-6 lg:p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 group"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-normal font-sans leading-none text-black-text-600">
                Platinum
              </span>
              <span className="font-bold text-xl font-Syne text-orange">
                $60/h
              </span>
            </div>

            <div className="flex flex-wrap justify-between items-end">
              <div>
                <h4 className="font-bold font-Syne leading-10 text-[32px] text-black-800 mb-1">
                  20 hrs
                </h4>
                <p className="text-lg font-normal font-sans leading-none text-black-text-600">
                  80 hours per week
                </p>
              </div>

              <a
                href="#"
                className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all"
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    className="transition-all"
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/*  Pricing Item End  */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
