'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Introducing = () => {
    return (
        <div className='flex md:w-2/3 md:h-full flex-col justify-end items-center md:items-end pb-32 font-poppins  m-0'>

            <motion.h2
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .7, delay: .3 }}
                className='text-orange font-bold flex text-end text-5xl sm:text-7xl md:text-8xl justify-end uppercase drop-shadow-md w-full pr-0 mr-0'
            >Joel Vappiani</motion.h2>
            <motion.span
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .7, delay: .5 }}
                className='font-bold uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl '
            >Developer Fullstack JS</motion.span>
        </div >
    )
}

export default Introducing