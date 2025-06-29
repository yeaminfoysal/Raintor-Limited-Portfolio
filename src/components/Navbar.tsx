"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import useTheme from '@/hooks/useTheme';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Navbar() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className=' max-w-[1340px] mx-auto py-[28px]'>
            <div className='flex justify-between items-center'>
                <h3 className='uppercase text-[34px] font-extrabold'>devlop.me</h3>
                <div className='font-grotesque flex items-center gap-[67px]'>
                    <div className="hidden md:flex space-x-[36px]">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`hover:text-primary text-[16px] ${pathname === link.href ? 'text-primary font-semibold' : 'text-[#00000088] dark:text-gray-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white hover:scale-110 transition-transform"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                    </button>
                    <button className='flex items-center gap-[12px] py-[10px] pr-[21px] border rounded-full text-[18px] cursor-pointer'>
                        <div className='py-[12px] px-[8px] border border-black rounded-full'>
                            <Image src="/images/arrow-right-blk.png" width={22} height={13} alt="" />
                        </div>
                        Start Project
                    </button>
                </div>
            </div>
        </div>
    )
}
