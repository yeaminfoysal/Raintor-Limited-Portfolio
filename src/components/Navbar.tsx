"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className='font-grotesque max-w-[1340px] mx-auto py-[28px]'>
            <div className='flex justify-between items-center'>
                <h3 className='uppercase text-[34px]'>devlop.me</h3>
                <div className="hidden md:flex space-x-6">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:text-primary text-[16px] ${pathname === link.href ? 'text-primary font-semibold' : 'text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
