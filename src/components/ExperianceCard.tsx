import Image from 'next/image'
import React from 'react'

type ExperianceCardProps = {
    bg: string,
    logoSrc: string,
    rotate: string
}
export default function ExperianceCard({ bg, logoSrc, rotate }: ExperianceCardProps) {
    return (
        <div className={`bg-${bg} !h-[80px] py-[20px] px-[66px] rounded-full hover:rotate-6 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer ${bg == 'white' ? "border-2 border-black" : ""}`}>
            <Image width={130} height={10} src={logoSrc} className={rotate} alt='' />
        </div>
    )
}
