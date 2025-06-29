import Image from 'next/image'
import React from 'react'

type workProcessCardProps = {
    title: string,
    desc: string
}

export default function WorkProcessCard({ title, desc }: workProcessCardProps) {
    return (
        <div className='lg:w-[400px] xl:w-[635px] p-[30px] bg-[#000000] hover:bg-[#C5FF41] text-[#b8b8b8] hover:text-[#141414] hover:rotate-6  rounded-[30px] transition-all duration-300 ease-in-out cursor-pointer'>
            <div className='flex justify-between items-center'>
                <span className='text-[20px] px-[36px] py-[4px] bg-[#C5FFEE] rounded-full text-black'>{title}</span>
                <div className='flex gap-[15px]'>
                    <Image width={22} height={15} src='/images/arrow-right.png' alt='' />
                    <button className='underline'>Read More</button>
                </div>
            </div>
            <p className='leading-[30px] mt-[45px]'>
                {desc}
            </p>
        </div>
    )
}
