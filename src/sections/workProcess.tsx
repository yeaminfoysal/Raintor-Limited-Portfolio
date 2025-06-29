import SectionIcon from '@/components/sectionIcon'
import WorkProcessCard from '@/components/workProcessCard'
import React from 'react'

export default function WorkProcess() {
    return (
        <div className='max-w-[1410px] mx-auto px-[65px] py-[70px] rounded-[40px] bg-[#141414] text-white '>
            <div className='flex items-center gap-[97px] mt-[20px]'>
                <SectionIcon color='white' title='Work Process' />
                <h1 className='text-[58px] font-bold '>My Work Process</h1>
            </div>
            <div className='mt-[50px] grid grid-cols-2 gap-[10px]'>
                <WorkProcessCard title='Discovery'/>
                <WorkProcessCard title='Strategy'/>
                <WorkProcessCard title='Design'/>
                <WorkProcessCard title='Build'/>
            </div>
        </div>
    )
}
