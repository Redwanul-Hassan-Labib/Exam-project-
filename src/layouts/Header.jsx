import React from 'react'
import { FaBarsProgress } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import logo  from '@/assets/image/logo/logo.png'
import Image from 'next/image'


const Header = () => {
  return (
    <div className='bg-[#FFE9D9]'>
        <div className='container '>
            <div className='flex  justify-between items-center gap-[20px] py-[27px] border-[rgba(8,8,8,0.40)] border-b-[1px] relative'>
                <div>
                <Image src={logo} className='h-[32px] w-[32px] inline-block ' alt='image' />
                <span className='text-[#000] text-[24px] font-semibold leading-[24px] pl-2 align-middle'>Redwan</span>
                </div>
                <div className='flex justify-center align-middle gap-[20px] absolute right-0'>
                  <div className='flex justify-center items-center gap-2 text-[#080808] cursor-pointer'>
                  <p className='font-bold text-[15px] py-[27px] leading-[16px] align-middle  pl-2 ' >Let’s Talk</p>
                  <LuArrowUpRight className='text-[25px]' />
                  </div>
                  <div>
                    <div className='bg-[#000]   w-[100px] h-[87px] flex justify-center items-center text-[25px] cursor-pointer '>
                    <FaBarsProgress /> 
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header