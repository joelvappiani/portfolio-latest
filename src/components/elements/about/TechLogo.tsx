import React, { useEffect, useState, useRef, MouseEvent } from 'react'
import { useAnimate, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { LogoProps } from '@/types/Logo'
import Tilt from 'react-parallax-tilt'

const TechLogo = ({ src }: LogoProps) => {
    const [scope, animate] = useAnimate()
    const [hovered, setHovered] = useState<boolean>(false)


    // useEffect(() => {
    //     hovered ? animateIcon() : stopAnimateIcon()

    // }, [hovered])

    // async function animateIcon() {
    //     // await animate(scope.current, { scale: 2 }, { ease: "easeInOut", duration: .2 })


    //     // animate(scope.current, { transform: ` perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)` })
    // }


    // function stopAnimateIcon() {
    //     animate(scope.current, { scale: 1 }, { ease: "easeInOut", duration: .2 })
    // }

    return (


        <div ref={scope} className='tech-logo flex flex-col items-center  2xl:basis-36'>
            <Tilt scale={2}>
                <Image src={`/images/icons/icon-3d-${src}.png`} width={300} height={300} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] z-10 hover:z-[100]' alt={`${src} logo`} />
            </Tilt >
            <span className='font-thin text-xs text-gray-800 hover:drop-shadow-[0_10px_30px_rgba(255,94,0,0.25)]'>{src.slice(0, 1).toUpperCase() + src.slice(1).toLowerCase()}</span>
        </div>
    )
}

export default TechLogo