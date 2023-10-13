'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useAnimate } from 'framer-motion'

const Avatar = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        avatarAnimation()
    }, [])
    async function avatarAnimation() {
        await animate(scope?.current, { opacity: 1, y: -10 }, { delay: 3, duration: 0.3 })
        animate(scope?.current, { y: 0 }, { repeat: Infinity, repeatType: "mirror", duration: 1, ease: 'linear' })
    }
    return (

        <div ref={scope} className='w-1/3 h-1/3 md:w-72 md:h-72 pointer-events-none opacity-0' >
            <Image src='/images/avatar/laptop-sitting.png' width={1000} height={1000} alt='3d avatar' />
        </div>
    )
}

export default Avatar