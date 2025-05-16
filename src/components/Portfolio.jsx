import Image from "next/image";
import React from "react";
import PortfolioImage from '@/assets/image/portfolio.jpg'

const Portfolio = () => {
  return (
    <section className="bg-secondary py-[120px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12" data-aos="fade-up">
            <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Portfolio</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                My recent
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  w
                </span>
                ork
              </h3>
            </div>
          </div>

          <div
            className="col-span-12 md:col-span-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="rounded-[20px] overflow-hidden mb-6">
            <Image src={PortfolioImage} alt="image"/>
            </div>
            <div className="flex flex-wrap flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <a
                  className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                  href="projects.html"
                >
                  APP
                </a>
                <a
                  className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                  href="projects.html"
                >
                  DEVELOPMENT
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                <h4 className="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                  <a className="transition-all" href="project-details.html">
                    Basinik Finance App
                  </a>
                </h4>
                <a
                  className="group-hover:animate-arrow-move-up"
                  href="project-details.html"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-span-12 md:col-span-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="rounded-[20px] overflow-hidden mb-6">
                <Image src={PortfolioImage} alt="image"/>
            </div>
            <div className="flex flex-wrap flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <a
                  className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                  href="projects.html"
                >
                  APP
                </a>
                <a
                  className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                  href="projects.html"
                >
                  DEVELOPMENT
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                <h4 className="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                  <a className="transition-all" href="project-details.html">
                    Oxilex Dashboard design
                  </a>
                </h4>
                <a
                  className="group-hover:animate-arrow-move-up"
                  href="project-details.html"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-12" data-aos="fade-up">
          <div className="flex group">
            <a
              href="projects.html"
              className="flex items-center justify-center flex-wrap btn-primary grow"
            >
              View All Project
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
    </section>
  );
};

export default Portfolio;
