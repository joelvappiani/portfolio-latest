import React, { useEffect } from 'react'
import { useAnimate, useInView } from 'framer-motion'
const ContactImage = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
    useEffect(() => {
        if (isInView) {
            animateImage()
        }
    }, [isInView])

    async function animateImage() {
        await animate(scope.current, { opacity: 1, x: 0 }, { duration: .7, delay: .7 })
        animate('div', { scale: 0.98 }, { duration: .6, repeat: Infinity, repeatType: 'mirror' })
        animate('img', { scale: 0.98 }, { duration: .6, repeat: Infinity, repeatType: 'mirror' })
    }
    return (

        <div
            ref={scope}
            className='hidden lg:block relative rounded-xl top-20 lg:left-[10%] xl:left-[15%] 2xl:left-[20%] opacity-0 -translate-x-[80px]'
        >
            <img src='/images/avatar/paper-plane.png' width={500} height={500} className='absolute top-0 left-0  w-[390px] h-[410px] rounded-xl saturate-150' alt='paper-plane-img' />
            <div className='absolute top-0 left-0  w-[390px] h-[410px] opacity-10 bg-gray-500 shadow-neumorphism-image rounded-xl'></div>
            <div className='absolute top-0 left-0  w-[390px] h-[410px]  shadow-neumorphism-image rounded-xl'></div>
        </div>

    )
}

export default ContactImage