import React from 'react'
import { FaBehance, FaDribbble, FaArrowUp } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import Name from '@/assets/image/name.png'
import Image from 'next/image';




const Footer = () => {
  return (
    <div className='container'>
        <div className='pt-[119px] pb-[72px] grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3  justify-center gap-[24px] '>
            <div className='pt-48px relative'>
                <span className='w-[60px] h-[60px] bg-[#FFB646] absolute top-2 left-0 rounded-full z-[-1] '></span>
            <h2 className='font-bold text-[64px] leading-[72px] tracking-[-1px]'>Let’s work
            together</h2>
            <div className='pt-10 flex gap-[11px] items-center font-bold text-[20px] leading-[28px]'>
            <p>Based in Germany |</p>
            <div className='flex gap-4'>
                <a href="#"><FaBehance /></a>
                <a href="#"><TiSocialLinkedin /></a>
                <a href="#"><FaDribbble /></a>
                <a href="#"><FaGithub /></a>
            </div>
            </div>
            </div>
            <div className='border-[rgba(255,255,255,0.20)] border-[1px]  rounded-[16px]'>
                <div className='px-[28px] py-[36px]'>
                    <h4 className='font-bold text-[20px] leading-[28px]'>Looking for a hectic 
                    designer?</h4>
                    <div className='flex justify-between items-center pt-[94px] font-bold text-[24px] leading-[32px]'>
                        <p className='text-[#FFB646]'>iam@devredwan.com</p>
                        <a href="#"><LuArrowUpRight className='text-[25px]' /></a>
                    </div>
                </div>
            </div>
            <div className='border-[rgba(255,255,255,0.20)] border-[1px]  rounded-[16px]'>
                <div className='px-[28px] py-[36px]'>
                    <h4 className='font-bold text-[20px] leading-[28px]'>Want a more in-depth look at my history?</h4>
                    <div className='flex justify-between items-center pt-[94px] font-bold text-[24px] leading-[32px]'>
                        <p className='text-[#FFB646]'>+8801521702577</p>
                        <a href="#"><LuArrowUpRight className='text-[25px]'/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center pb-[83px]'>
            <Image src={Name}  alt='image'/>
        </div>
        <div className="border-t border-border-white pt-6 pb-10 ">
                        <div className="grid grid-cols-12">

                            <div className="col-span-12 sm:col-span-8 order-last sm:order-first">
                                <p className="text-white text-lg font-normal font-sans leading-7">©2024 Redwan  Labib, All Rights Reserved
                                </p>
                            </div>
                            <div className="col-span-12 sm:col-span-4 order-first sm:order-last">
                                <div className="flex justify-end mb-2 sm:mb-0">
                                    <a id="scrollUp" className="flex flex-wrap items-center gap-2 group" href="#" aria-label="scroll up">
                                        <span
                            className="text-white text-lg font-normal font-sans leading-7 transition-all group-hover:text-orange">Back
                            to
                            Top</span>
                            <FaArrowUp className='text-[#FFB646] '/>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Footer