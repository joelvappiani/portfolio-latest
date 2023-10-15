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
        await animate(scope.current, { y: 80 }, { duration: .3 })
        await animate(scope.current, { opacity: 1, y: 0 }, { duration: .7 })
        animate('.image', { y: 6 }, { duration: 1, repeat: Infinity, repeatType: 'mirror' })
    }
    return (

        <div
            ref={scope}
            className='hidden relative rounded-xl top-20 lg:left-[10%] xl:left-[15%] 2xl:left-[20%] opacity-0 lg:flex justify-center w-[80vw] h-60'
        >
            <div className='absolute top-0 left-0 m-0 w-[390px] h-[410px] bg-white rounded-xl'></div>
            <img src='/images/avatar/paper-plane.png' width={500} height={500} className=' image absolute top-0 left-[10px] w-[370px] h-[390px] m-0 rounded-xl saturate-150' alt='paper-plane-img' />
            <div className='absolute top-0 left-0  w-[390px] h-[410px] opacity-10 bg-gray-500 shadow-neumorphism-image rounded-xl m-0'></div>
            <div className='absolute top-0 left-0  w-[390px] h-[410px]  shadow-neumorphism-image rounded-xl m-0'></div>
        </div>

    )
}

export default ContactImage