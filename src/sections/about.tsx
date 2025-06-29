import ExperianceCard from '@/components/ExperianceCard'
import SectionIcon from '@/components/sectionIcon'
import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen pt-[200px] mt-[-70px] relative z-0 overflow-hidden' id='about-bg'>
      <div className='max-w-[1053px] mx-auto'>
        <div className='flex justify-end'>
          <SectionIcon color='black' title='About' />
        </div>
        <h1 className='mt-[35px] w-[1053px] !leading-[126px] text-[70px] font-bold !text-right'>
          I’ve been
          <span className='bg-black text-white px-[20px] rounded-xl'>Developing</span> Websites since
          <span className='bg-black text-white px-[20px] rounded-xl'>2013</span>
        </h1>
        <p className='w-[921px] mx-auto items-center text-center text-[18px] mt-[30px]'>We start every new client interaction with an in-depth discovery call where
          we get to know each other and recommend the best course of
          action.</p>
      </div>
      <div className='max-w-[1346px] mx-auto mt-[70px] flex gap-[33px] items-center'>
        <div>
          <h3 className='text-[26px] font-bold w-[244px]'>PREVIOUSLY WORKED ON</h3>
        </div>
        <div className='flex flex-wrap gap-[40px] justify-end'>
          <ExperianceCard bg='black' logoSrc='/images/experiance1.png' rotate='-rotate-12'/>
          <ExperianceCard bg='white' logoSrc='/images/experiance2.png' rotate=''/>
          <ExperianceCard bg='white' logoSrc='/images/experiance3.png' rotate=''/>
          <ExperianceCard bg='white' logoSrc='/images/experiance4.png' rotate=''/>
          <ExperianceCard bg='white' logoSrc='/images/experiance5.png' rotate='-rotate-18'/>
          <ExperianceCard bg='white' logoSrc='/images/experiance6.png' rotate=''/>
        </div>
      </div>
    </div>
  )
}
