// import Image from 'next/image'
import Image from 'next/image'
import React from 'react'
import SkillCard from '@/components/skillCrad';

export default function skill() {
    return (
        <div className='max-[1410px] px-[65px] py-[70px] rounded-[40px] min-h-screen bg-[#000000] text-white'>
            <div className='flex items-center py-[12px] pr-[21px]'>
                <div className='p-[16px] border border-white rounded-full'>
                    <Image width={16} height={16} className='' src="/images/arrow-buttom.png" alt='' />
                </div>
                <span className='border border-white rounded-full py-[10px] px-[20px]'>Why Choose me</span>
            </div>
            <div className='mt-[40px] flex justify-between'>
                <h1 className='text-[58px] w-[516px] leading-[86px]'>My Extensive List of Skills</h1>
                <div className='w-[510px]'>
                    <p className='text-right'>Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p>
                    <hr className='border-white border-t mt-[21px]' />
                    <div className='flex justify-end gap-[20px] mt-[35px]'>
                        <div className='py-[18px] px-[12px] border border-white rounded-full'>
                            <Image width={36} height={36} className='' src="/images/arrow-left.png" alt='' />
                        </div>
                        <div className='py-[18px] px-[12px] border border-white rounded-full'>
                            <Image width={36} height={36} className='' src="/images/arrow-right.png" alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[40px] flex gap-[10px]'>
                {/* <skillCard /> */}
                <SkillCard title='HTML & CSS'/>
                <SkillCard title='Javascript'/>
                <SkillCard title='Webflow'/>
            </div>
        </div>
    )
}
