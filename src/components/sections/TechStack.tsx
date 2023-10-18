import React, { useEffect } from 'react'
import { useAnimate, useInView, stagger } from 'framer-motion'
import FrontendSection from '../elements/about/FrontendSection'
import BackendSection from '../elements/about/BackendSection'

const TechStack = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
    useEffect(() => {
        isInView && animate('.tech-logo', { scale: [0, 0.2, 1], y: [0, -50, 0], rotate: [0, -360, 0] }, { delay: stagger(.05), duration: .6 })
    }, [isInView])
    return (
        <div className=' w-[200vw] md:w-[95vw] xl:w-[80vw] h-[90vh] text-black rounded-lg bg-neumorphism-white shadow-neumorphism-image'>


            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange font-thin text-3xl sm:text-4xl md:text-6xl md:mb-6  uppercase drop-shadow-md mt-10 mb-2 w-full text-center'>My Tech Stack</h2>

            <div ref={scope} className='w-full h-[80%] flex justify-stretch items-center md:flex-col md:justify-around md:items-center '>

                <FrontendSection />
                <BackendSection />
            </div>
        </div>
    )
}

export default TechStack