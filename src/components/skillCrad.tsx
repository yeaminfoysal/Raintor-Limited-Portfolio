import Image from 'next/image';
import React from 'react'

type SkillCardProps = {
  title: string;
};

export default function SkillCrad({ title }: SkillCardProps) {
  return (
    <div className='bg-[#141414] w-[430px] pl-[35px] pr-[55px] py-[48px] rounded-[30px]'>
      <Image width={97} height={97} src="/images/react.png" alt='' />
      <h3 className='text-[26px] mt-[35px] mb-[20px]'>{title}</h3>
      <p className='leading-[27px] text-[#b8b8b8]'>Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis</p>
    </div>
  );
}
