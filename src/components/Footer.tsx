import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='max-w-[1410px] mt-[-70px] relative mx-auto px-[65px] py-[90px] rounded-[52px] bg-[#000000] text-white mb-[15px]'>
            <div className='grid grid-cols-7'>
                <div className='col-span-3'>
                    <h2 className='text-[#C5FF41] uppercase text-[34px] font-bold'>devlop.me</h2>
                </div>
                <div className='col-span-4 font-grotesque'>
                    <h2 className=' text-[64px] font-bold'>As You Can</h2>
                    <div className='mt-[138px] flex justify-between text-[#E4E4E4]'>
                        <div>
                            <h4 className='font-bold text-[#757575] mb-[20px]'>Say hello</h4>
                            <p className='mb-[10px]'>HELLO@DEVLOP.ME.COM</p>
                            <p>MAHBUBUL@ME.COM</p>
                            <h4 className='list-none mt-[50px] font-bold text-[#757575] mb-[20px]'>Call</h4>
                            <p className='mb-[10px]'>+784549 4981 00</p>
                            <p>+8845 0100 211</p>
                        </div>
                        <div>
                            <h4 className='font-bold text-[#757575] mb-[20px]'>Menu</h4>
                            <Link className='mb-[10px] block' href={'/'}>HOME</Link>
                            <Link className='mb-[10px] block' href={'/'}>ABOUT</Link>
                            <Link className='mb-[10px] block' href={'/'}>PORTFOLIO</Link>
                            <Link className='mb-[10px] block' href={'/'}>BLOG</Link>
                        </div>
                        <div>
                            <h4 className='font-bold text-[#757575] mb-[20px]'>Social</h4>
                            <Link className='mb-[10px] block' href={'/'}>TWITTER</Link>
                            <Link className='mb-[10px] block' href={'/'}>INSTAGRAM</Link>
                            <Link className='mb-[10px] block' href={'/'}>FACEBOOK</Link>
                            <Link className='mb-[10px] block' href={'/'}>BEHANCE</Link>
                            <Link className='mb-[10px] block' href={'/'}>DRIBBLE</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-7 mt-[126px]'>
                <h2 className='col-span-3 text-[24px] font-bold'>BESNIK</h2>
                <div className='col-span-4 flex justify-between'>
                    <p className='font-grotesque text-[#757575] '>© devlop.me 2022</p>
                    <p className='font-grotesque text-[#757575] '>PRIVACY - TERMS</p>
                </div>
            </div>
        </div>
    )
}
