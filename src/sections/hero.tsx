"use client"
import ScheduleBtn from '@/components/ScheduleBtn'
import React from 'react'

export default function Hero() {
    return (
        <div className="bg-cover bg-center" >
            <h1 className="ml-[50px] mt-[95px] w-[1128px] !leading-[126px] text-[70px] font-bold">
                Trusted <span className='bg-black text-white px-[20px] rounded-xl'>Partner</span> for Your Website <span className='bg-black text-white px-[20px] rounded-xl'>Develop.</span>
            </h1>
            <div className='text-center w-[703px] mx-auto my-[50px]'>
                <p className='mb-[42px] text-[18px]'>Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                <ScheduleBtn/>
            </div>
        </div>


    )
}
