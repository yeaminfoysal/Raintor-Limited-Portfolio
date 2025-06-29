import Image from 'next/image'
import React from 'react'
type workProcessCardProps = {
    title: string,
    desc: string
}
export default function WorkProcessCard({ title, desc }: workProcessCardProps) {
    return (
        <div className='w-[635px] bg-[#000000] p-[30px] rounded-[30px]'>
            <div className='flex justify-between items-center'>
                <span className='text-[20px] px-[36px] py-[4px] bg-[#C5FFEE] rounded-full text-black'>{title}</span>
                <div className='flex gap-[15px]'>
                    <Image width={22} height={15} src='/images/arrow-right.png' alt='' />
                    <button className='underline'>Read More</button>
                </div>
            </div>
            <p className='leading-[30px] mt-[45px] text-[#b8b8b8]'>
                {desc}
            </p>
        </div>
    )
}
