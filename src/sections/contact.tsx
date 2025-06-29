import ScheduleBtn from '@/components/ScheduleBtn'
import SectionIcon from '@/components/sectionIcon'
import React from 'react'
import { BsFillSendFill } from 'react-icons/bs'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Contact() {
    return (
        <div id='contact-bg' className='pb-[180px]'>
            <div className='flex gap-[60px] pt-[50px] pr-[50px] pl-[40px]'>
                <div>
                    <SectionIcon title='Contact' color='black' />
                    <h1 className='mt-[30px] w-[771px] !leading-[113px] text-[70px] font-bold !text-left'>
                        Interested in
                        <span className='bg-black text-white px-[20px] rounded-xl'>work</span>
                        together?
                    </h1>
                    <p className='text-[18px] w-[713px] mt-[25px] mb-[35px]'>We start every new client interaction with an in-depth discovery call where
                        we get to know each other</p>
                    <ScheduleBtn />
                </div>
                <div className='bg-[#000000] w-[529px] text-white rounded-[30px] px-[35px] pt-[45px]'>
                    <h3 className='text-[18px]'>Enter your name</h3>
                    <hr className='border-b mt-[15px] border-[#C5FF41]' />
                    <div className=' mt-[30px]'>
                        <input type="text" placeholder='Your email address' className='py-[14px] w-full border-[#b8b8b8] border-b  text-[18px]' />
                    </div>
                    <div className=' mt-[30px]'>
                        <input type="text" placeholder='Your email address' className='py-[14px] w-full border-[#b8b8b8] border-b  text-[18px]' />
                    </div>
                    <div className='flex mt-[46px] gap-[14px] items-center'>
                        <button className='flex items-center gap-[12px] py-[10px] pr-[21px] border rounded-full text-[18px] cursor-pointer'>
                            <div className='p-[12px] border border-white rounded-full'>
                                <BsFillSendFill />
                            </div>
                            Send
                        </button>
                        <p className='text-[18px]'>or</p>
                        <button className='flex items-center gap-[12px] py-[10px] pr-[21px] border rounded-full text-[18px] cursor-pointer'>
                            <div className='p-[12px] border border-white rounded-full'>
                                <FaEnvelope />
                            </div>
                            Contact me
                        </button>
                    </div>
                    <div className='mt-[69px] flex items-center gap-[20px]'>
                        <p className='text-[18px] text-[#b8b8b8]'>@williamrey</p>
                        <hr className='border-b-2 border-[#b8b8b8] w-[45px]' />
                        <div className='items-center flex gap-[20px]'>
                            <button className='cursor-pointer'>
                                <FaFacebook className={`text-[27px]`} />
                            </button>
                            <button className='cursor-pointer'>
                                <FaInstagram className={`text-[27px]`} />
                            </button>
                            <button className='cursor-pointer'>
                                <FaTwitter className={`text-[27px]`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
