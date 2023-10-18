import React, { useEffect, useState, useRef, MouseEvent } from 'react'
import { useAnimate, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { LogoProps } from '@/types/Logo'
import Tilt from 'react-parallax-tilt'

const TechLogo = ({ src }: LogoProps) => {
    const [scope, animate] = useAnimate()
    const [hovered, setHovered] = useState<boolean>(false)


    useEffect(() => {

        hovered ? animateIcon() : stopAnimateIcon()

    }, [hovered])


    async function animateIcon() {
        animate(".floating-text", { opacity: [0, 1], x: [-80, 0] }, { ease: "easeInOut", duration: .4 })
    }


    function stopAnimateIcon() {
        animate(".floating-text", { opacity: [1, 0], x: [0, -80] }, { ease: "easeInOut", duration: .4 })
    }

    return (


        <div ref={scope} className='tech-logo flex flex-col items-center  2xl:basis-36'>
            <Tilt scale={2} perspective={500} style={{ transformStyle: 'preserve-3d' }} onEnter={() => setHovered(true)} onLeave={() => setHovered(false)}>
                <div className='relative' style={{ transform: "translateZ(30px)" }}>

                    <span className='floating-text absolute -left-3 text-transparent bg-clip-text bg-gradient-to-r from-pink to-purple uppercase'>{src}</span>
                </div>
                <Image src={`/images/icons/icon-3d-${src}.png`} width={300} height={300} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] z-10 hover:z-[100]' style={{ transform: "translateZ(10px)" }} alt={`${src} logo`} />
            </Tilt >
            {/* <span className='font-thin text-xs text-gray-800 hover:drop-shadow-[0_10px_30px_rgba(255,94,0,0.25)]'>{src.slice(0, 1).toUpperCase() + src.slice(1).toLowerCase()}</span> */}
        </div>
    )
}

export default TechLogo