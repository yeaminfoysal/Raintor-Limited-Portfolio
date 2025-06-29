// import Image from 'next/image'
import Image from 'next/image'
import React from 'react'
import SkillCard from '@/components/skillCrad';
import SectionIcon from '@/components/sectionIcon';

export default function skill() {
    return (
        <div className='max-w-[1410px] relative !z-20 mx-auto px-[65px] py-[70px] rounded-[40px] bg-[#000000] text-white mt-[90px]'>
            <SectionIcon color='white' title='Why Choose me'/>
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
