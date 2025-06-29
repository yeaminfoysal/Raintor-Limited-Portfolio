"use client"
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className="bg-cover bg-center" >
            <h1 className="ml-[50px] mt-[95px] w-[1128px] !leading-[126px] text-[70px] font-bold">
                Trusted <span className='bg-black text-white px-[20px] rounded-xl'>Partner</span> for Your Website <span className='bg-black text-white px-[20px] rounded-xl'>Develop.</span>
            </h1>
            <div className='text-center w-[703px] mx-auto my-[50px]'>
                <p className='mb-[42px] text-[18px]'>Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                <button className='flex items-center gap-[12px] py-[12px] pr-[21px] border rounded-full'>
                    <div className='p-[17px] border border-black rounded-full'>
                        <Image src="/images/phone.png" width={20} height={20} alt="" />
                    </div>
                    Schedule a Call
                </button>
            </div>
        </div>


    )
}
