'use client';

import ExperianceCard from '@/components/ExperianceCard';
import SectionIcon from '@/components/sectionIcon';
import { motion } from 'framer-motion';
import React from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function About() {
  return (
    <div className='pt-[200px] mt-[-70px] relative z-0 overflow-hidden pb-[50px]' id='about-bg'>
      <div className='max-w-[1053px] mx-auto'>
        <div className='flex justify-end'>
          <SectionIcon color='black' title='About' />
        </div>
        <h1 className='mt-[20px] w-[1053px] !leading-[126px] text-[70px] font-bold !text-right'>
          I’ve been
          <span className='bg-black text-white px-[20px] rounded-xl'>Developing</span> Websites since
          <span className='bg-black text-white px-[20px] rounded-xl'>2013</span>
        </h1>
        <p className='w-[921px] mx-auto items-center text-center text-[18px] mt-[30px]'>
          We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.
        </p>
      </div>

      <div className='max-w-[1346px] mx-auto mt-[70px] flex items-center'>
        <div>
          <h3 className='text-[26px] font-bold w-[244px] ml-[40px]'>PREVIOUSLY WORKED ON</h3>
        </div>
        <div className='flex flex-wrap gap-[40px] justify-end'>
          {[
            { bg: 'black', src: '/images/experiance1.png', rotate: '-rotate-12' },
            { bg: 'white', src: '/images/experiance2.png', rotate: '' },
            { bg: 'white', src: '/images/experiance3.png', rotate: 'rotate-' },
            { bg: 'white', src: '/images/experiance4.png', rotate: '' },
            { bg: 'white', src: '/images/experiance5.png', rotate: '-rotate-18' },
            { bg: 'white', src: '/images/experiance6.png', rotate: '' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.15 }}
            >
              <ExperianceCard bg={item.bg} logoSrc={item.src} rotate={item.rotate} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
