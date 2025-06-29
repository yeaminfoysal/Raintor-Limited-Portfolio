
import React from 'react'
import { FaPhone } from 'react-icons/fa'

export default function ScheduleBtn() {
    return (
        <div>
            <button className='flex items-center gap-[12px] py-[12px] pr-[21px] border rounded-full cursor-pointer'>
                <div className='p-[17px] border border-black rounded-full rotate-90'>
                    <FaPhone />
                </div>
                Schedule a Call
            </button>
        </div>
    )
}
