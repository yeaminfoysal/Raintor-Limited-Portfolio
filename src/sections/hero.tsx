"use client"
import ScheduleBtn from '@/components/ScheduleBtn'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Hero() {
    return (
        <div className="py-[140px] my-[-130px]" id='hero-bg' >
            <h1 className="ml-[50px] mt-[95px] w-[1128px] !leading-[126px] text-[70px] font-bold">
                Trusted <span className='bg-black text-white px-[20px] rounded-xl'>Partner</span> for Your Website <span className='bg-black text-white px-[20px] rounded-xl'>Develop.</span>
            </h1>
            <div className='flex items-center'>
                <div className='-rotate-90'>
                    <p className='text-[18px] mb-[22px]'>@williamrey</p>
                    <div className='flex gap-[20px] items-center'>
                        <hr className='w-[45px] border-b-2 border-black' />
                        <button className='cursor-pointer'>
                            <FaFacebook className={`text-[27px]`} />
                        </button>
                        <button className='cursor-pointer'>
                            <FaInstagram className={`text-[27px]`} />
                        </button>
                        <button className='cursor-pointer'>
                            <FaTwitter className={`text-[27px]`} />
                        </button>
                    </div>
                </div>
                <div className='text-center w-[703px] mx-auto my-[50px]'>
                    <p className='mb-[42px] text-[18px]'>Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                    <ScheduleBtn />
                </div>
            </div>
        </div>


    )
}
