import React from 'react'
import Image from 'next/image'
import { LogoProps } from '@/types/Logo'
const TechLogo = ({ src }: LogoProps) => {
    return (
        <div className='flex flex-col items-center'>
            <Image src={`/images/icons/icon-3d-${src}.png`} width={300} height={300} className='w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] xl:w-[100px] xl:h-[100px]' alt={`${src} logo`} />
            <span className='font-thin text-xs text-gray-800'>{src.slice(0, 1).toUpperCase() + src.slice(1).toLowerCase()}</span>
        </div>
    )
}

export default TechLogo