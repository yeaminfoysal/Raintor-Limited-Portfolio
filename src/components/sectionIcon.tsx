import React from 'react'
import { FaArrowDown } from 'react-icons/fa';

type sectionIconProps = {
    color: string;
    title: string
}

export default function SectionIcon({color, title}: sectionIconProps) {
    return (
        <div className='flex items-center py-[12px] pr-[21px]'>
            <div className={`py-[15px] px-[15px] border-2 border-${color} rounded-full`}>
                <FaArrowDown />
            </div>
            <span className={`border-2 border-${color} rounded-full py-[10px] px-[20px] text-${color}`}>{title}</span>
        </div>
    )
}
