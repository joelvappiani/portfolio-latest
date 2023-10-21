import React, { useEffect, useState, useRef, MouseEvent } from 'react'
import { useAnimate } from 'framer-motion'
import Image from 'next/image'
import { TechLogoProps } from '@/types/Logo'
import Tilt from 'react-parallax-tilt'

const TechLogo = ({ src, from }: TechLogoProps) => {
    const [scope, animate] = useAnimate()
    const [hovered, setHovered] = useState<boolean>(false)


    useEffect(() => {

        hovered ? animateIcon() : stopAnimateIcon()

    }, [hovered])


    async function animateIcon() {
        animate(scope.current, { z: [0, 100] })
        animate(".description", { opacity: [0, 1], x: [-80, 0] }, { ease: "easeInOut", duration: .4 })
    }


    function stopAnimateIcon() {
        animate(".description", { opacity: [1, 0], x: [0, -80] }, { ease: "easeInOut", duration: .4 })
        animate(scope.current, { z: [100, 0] })
    }

    return (


        <div ref={scope} className='tech-logo flex flex-col items-center  2xl:basis-36 z-30' style={from === 'contact' ? { zIndex: 200 } : {}}>
            <Tilt scale={2} perspective={500} style={{ transformStyle: 'preserve-3d' }} onEnter={() => setHovered(true)} onLeave={() => setHovered(false)}>
                <div className='relative form' style={{ transform: "translateZ(30px)" }}>

                    {from === "techstack" && <span className='floating-text description absolute -left-3 text-transparent bg-clip-text bg-gradient-to-r from-pink to-purple uppercase'>{src[0]}</span>}
                </div>
                <Image src={`/images/icons/icon-3d-${src[0]}.png`} width={300} height={300} className='w-[50px] h-[50px]  md:w-[90px] md:h-[90px] z-10 hover:z-[100]' style={{ transform: "translateZ(10px)" }} alt={`${src[0]} logo`} />
                <div className='relative' style={{ transform: "translateZ(30px)" }}>
                    <span className='opacity-0 description absolute -left-10 -top-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-200 text-center text-xs w-[200px] '>{src[1]}</span>
                </div>
            </Tilt >
            {/* <span className='font-thin text-xs text-gray-800 hover:drop-shadow-[0_10px_30px_rgba(255,94,0,0.25)]'>{src.slice(0, 1).toUpperCase() + src.slice(1).toLowerCase()}</span> */}
        </div>
    )
}

export default TechLogo