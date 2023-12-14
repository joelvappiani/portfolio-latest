import React, { useEffect, useState } from 'react'
import { useAnimate } from 'framer-motion'
import Image from 'next/image'
import { TechLogoProps } from '@/types/Logo'


const TechLogo = ({ src, from, size }: TechLogoProps): JSX.Element => {
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
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className='relative form' style={{ transform: "translateZ(30px)" }}>

                    <span className='floating-text description absolute -left-7 -top-7 text-white bg-gray-800 bg-opacity-50 backdrop-blur-md  px-3 rounded-full text-sm'>{src[0]}</span>
                </div>
                <Image src={`/images/icons/icon-3d-${src[0]}.png`} width={100} height={100} style={{ width: 50, height: 50 }} className={`w-[${size}px] h-[${size}px]  z-10 hover:z-[100]`} alt={`${src[0]} logo`} />

            </div >
        </div>
    )
}

export default TechLogo