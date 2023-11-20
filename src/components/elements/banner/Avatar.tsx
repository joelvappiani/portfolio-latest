'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useAnimate } from 'framer-motion'
type AvatarProps = {
    isLow: boolean;
}
const Avatar = ({ isLow }: AvatarProps) => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        avatarAnimation()

    }, [])
    async function avatarAnimation() {
        await animate(scope?.current, { opacity: 1, y: -10 }, { delay: 3.5, duration: 0.6, ease: "easeInOut" })
        animate(scope?.current, { y: 0 }, { repeat: Infinity, repeatType: "mirror", duration: 1, ease: 'linear' })
    }
    return (

        <div ref={scope} className={`absolute z-10 right-1/3 lg:right-[50vw] top-[30vh] ${isLow ? "sm:top-36 md:w-52 md:h-52" : "sm:top-52 md:w-72 md:h-72"} w-1/3 h-1/5  pointer-events-none opacity-0`} >
            <Image src='/images/avatar/laptop-sitting.png' width={300} height={300} alt='3d avatar' />
        </div>
    )
}

export default Avatar