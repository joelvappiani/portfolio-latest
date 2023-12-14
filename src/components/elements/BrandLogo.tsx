import React, { useEffect, useState } from 'react'
import { useAnimate } from 'framer-motion'
import Image from 'next/image'
import { BrandLogoProps } from '@/types/Logo'


const BrandLogo = ({ src, desc, link }: BrandLogoProps): JSX.Element => {
    const [scope, animate] = useAnimate()
    const [hovered, setHovered] = useState<boolean>(false)


    useEffect(() => {

        hovered ? animateIcon() : stopAnimateIcon()

    }, [hovered])


    async function animateIcon() {
        animate(scope.current, { scale: 1.2 })
        animate(".description", { opacity: [0, 1], x: [-80, 0] }, { ease: "easeInOut", duration: .4 })
    }


    function stopAnimateIcon() {
        animate(".description", { opacity: [1, 0], x: [0, -80] }, { ease: "easeInOut", duration: .4 })
        animate(scope.current, { scale: 1 })
    }

    return (


        <a href={link} ref={scope} target='_blank' className='tech-logo flex flex-col items-center w-20 z-30 cursor-pointer' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >

            <Image src={`/images/icons/icon-3d-${src}.png`} width={100} height={100} className={`w-[40px] h-[40px]`} alt={`${src} logo`} />

            <span className='opacity-0 description text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-200 text-center text-xs w-[200px] '>{desc}</span>



        </a>
    )
}

export default BrandLogo