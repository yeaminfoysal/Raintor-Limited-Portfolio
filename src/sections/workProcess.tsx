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
                <WorkProcessCard title='Discovery'
                    desc='We start every new client interaction
                          with an in-depth discovery call where
                          we get to know each other, discuss
                          your current and future objectives,
                          and recommend the best course of
                            action.'
                />
                <WorkProcessCard title='Strategy'
                    desc="Every end-to-end project of ours
                        begins with a tEspoke pre-build
                        strateu. From brand ID consultation
                        to in-depth ccxle reviews we're here
                        to set the stage for success."
                />
                <WorkProcessCard title='Design'
                    desc="After we have a comprehensive
                        understanding of your brand, we'll be
                        ready to move onto design. Each page
                        or will be designed, reviewed,
                        and given your stamp of approval."
                />
                <WorkProcessCard title='Build'
                    desc="Whether we've just finished
                        designing your new site or you're
                        handing off finished designs for us to
                        develop in Webflow, we're here to
                        apply our trusted development
                        process to your project."
                />
            </div>
        </div>
    )
}
