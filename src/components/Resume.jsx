import React from "react";

const Resume = () => {
  return (
    <section className="py-[80px] lg:py-[100px] bg-white">
      <div className="container ">
        <div className="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[134px]">
          <div
            className="col-span-12 lg:col-span-5 2xl:col-span-4"
            data-aos="fade-up"
          >
            <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-4">
              <span className="text-orange text-xl">Resume</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                All over my details find here...
              </h3>
            </div>
            <div className="tabs flex flex-wrap lg:flex-col gap-2 my-8 lg:my-0">
              <button
                data-tab="about_me_tab"
                className="tab-btn justify-between items-center inline-flex group active"
              >
                About me
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
              </button>
              <button
                data-tab="experience_tab"
                className="tab-btn justify-between items-center inline-flex group"
              >
                Experience
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
              </button>
              <button
                data-tab="education_tab"
                className="tab-btn justify-between items-center inline-flex group"
              >
                Education
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
              </button>
              <button
                data-tab="skills_tab"
                className="tab-btn justify-between items-center inline-flex group"
              >
                Skills
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
              </button>
              <button
                data-tab="awards_tab"
                className="tab-btn justify-between items-center inline-flex group"
              >
                Awards
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
              </button>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-7 2xl:col-span-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div id="about_me_tab" className="tab-content active relative">
              <div className="grid grid-cols-1">
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                  Based in German
                </h4>
                <p className="paragraph mb-7">
                  Mark Henry,
                  <span className="text-black-800">Product Designer</span>,
                  based in German. That is where I come in. A lover of words, a
                  wrangler of copy. Here to create copy that not only reflects
                  who you are and what you stand for,
                </p>
                <p className="paragraph mb-14">
                  but words that truly land with those that read them, calling
                  your audience in and making them want more.
                </p>

                <ul className="flex-col gap-3 inline-flex">
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Name
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      Mark Henry
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Nationality
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      Germany
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Phone
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      +(2) 870 174 302
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Email
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      hello@henry.com
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Experience
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      12+ years
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Freelance
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      Available
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Skype
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      henry.halk23
                    </span>
                  </li>
                  <li className="gap-10 inline-flex items-center">
                    <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                      Language
                    </span>
                    <span className="text-black-800 text-2xl font-bold font-Syne leading-8">
                      German, English
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="experience_tab" className="tab-content relative">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Experience
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    03/216 – Running
                  </span>
                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Axtra
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      Lead digital marketer
                    </h4>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    03/2008 – 07/2011
                  </span>
                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Axtra
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      JavaScript developer
                    </h4>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    03/2008 – 07/2011
                  </span>
                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Axtra
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      Product designer
                    </h4>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    03/2008 – 07/2011
                  </span>
                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Axtra
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      UX researcher
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div id="education_tab" className="tab-content">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Education
              </h4>

              <div className="grid grid-cols-1 gap-6">
                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    003/2008 – 07/2011
                  </span>
                  <div className="flex-1">
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Axtra
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      BA Business Management
                    </h4>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    03/2008 – 07/2011
                  </span>
                  <div className="flex-1">
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Axtra
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      BA Business Management
                    </h4>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                  <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                    03/2008 – 07/2011
                  </span>
                  <div className="flex-1">
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Axtra
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-2xl text-black-800">
                      BA Business Management
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div id="skills_tab" className="tab-content">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Skills
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                  {/* <img
                      className="items-start"
                      src="assets/images/skills/vs-code.png"
                      alt="icons"
                    /> */}
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      React JS
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (90%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                  {/* <img
                      className="items-start"
                      src="assets/images/skills/figma.png"
                      alt="icons"
                    /> */}
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Figma
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (70%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                  {/* <img
                      className="items-start"
                      src="assets/images/skills/framer.png"
                      alt="icons"
                    /> */}
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Framer
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (80%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                  {/* <img
                      className="items-start"
                      src="assets/images/skills/framer.png"
                      alt="icons"
                    /> */}
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Framer
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (80%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                  {/* <img
                      className="items-start"
                      src="assets/images/skills/framer.png"
                      alt="icons"
                    /> */}
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Framer
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (80%)
                    </p>
                  </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                  {/* <img
                      className="items-start"
                      src="assets/images/skills/framer.png"
                      alt="icons"
                    /> */}
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      Framer
                    </h4>
                    <p className="text-sm font-normal font-Inter leading-none text-black-800">
                      (80%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="awards_tab" className="tab-content">
              <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                Awards
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                  <div className="flex items-start justify-between">
                    {/* <img src="assets/images/awards/w-dot.png" alt="icons" /> */}
                    <span className="font-normal text-sm font-Inter text-black-text-800">
                      2018
                    </span>
                  </div>

                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Winner
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      01X Developer Award
                    </h4>
                  </div>
                </div>

                <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                  <div className="flex items-start justify-between">
                    {/* <img src="assets/images/awards/webby.png" alt="icons" /> */}
                    <span className="font-normal text-sm font-Inter text-black-text-800">
                      2018
                    </span>
                  </div>

                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Winner
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      01X Developer Award
                    </h4>
                  </div>
                </div>

                <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                  <div className="flex items-start justify-between">
                    {/* <img src="assets/images/awards/fwa.png" alt="icons" /> */}
                    <span className="font-normal text-sm font-Inter text-black-text-800">
                      2018
                    </span>
                  </div>

                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Winner
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      01X Developer Award
                    </h4>
                  </div>
                </div>

                <div className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-8">
                  <div className="flex items-start justify-between">
                    {/* <img
                        src="assets/images/awards/wordpress.png"
                        alt="icons"
                      /> */}
                    <span className="font-normal text-sm font-Inter text-black-text-800">
                      2018
                    </span>
                  </div>

                  <div>
                    <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                      Winner
                    </p>
                    <h4 className="font-bold font-Syne leading-normal text-xl text-black-800">
                      01X Developer Award
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <span className="flex justify-end mt-14 -mr-3">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z"
                  fill="#FFB646"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
