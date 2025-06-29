import Image from 'next/image'
import React from 'react'

export default function ScheduleBtn() {
    return (
        <div>
            <button className='flex items-center gap-[12px] py-[12px] pr-[21px] border rounded-full'>
                <div className='p-[17px] border border-black rounded-full'>
                    <Image src="/images/phone.png" width={20} height={20} alt="" />
                </div>
                Schedule a Call
            </button>
        </div>
    )
}
