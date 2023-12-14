'use client'
import React from 'react'
import { motion } from 'framer-motion'

type IntroducingProps = {
    isLow: boolean
}
const Introducing = ({ isLow }: IntroducingProps): JSX.Element => {
    return (
        <div className={`absolute ${isLow ? "bottom-5 right-5 md:right-5 md:bottom-5" : "bottom-5 right-5 md:right-10 md:bottom-10 lg:bottom-20 lg:right-20"} flex flex-col w-full items-end justify-center font-poppins`}>

            <motion.h2
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .7, delay: 3.3 }}
                className='text-orange font-bold text-end text-4xl sm:text-7xl md:text-8xl  uppercase drop-shadow-md w-full pr-0 mr-0 z-10'
            >Joel Vappiani</motion.h2>
            <motion.span
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .7, delay: 3.5 }}
                className='font-bold uppercase text-lg sm:text-2xl md:text-3xl lg:text-4xl text-end z-10'
            >Developer Fullstack JS</motion.span>
        </div >
    )
}

export default Introducing