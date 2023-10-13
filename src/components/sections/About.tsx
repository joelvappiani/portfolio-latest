'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'


const About = () => {
    return (
        <motion.div
            id='About'
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='w-screen h-screen z-20 bg-gradient-to-b from-gray-50 to-gray-200 font-poppins flex flex-col'
        >
            <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .7, delay: .3 }}
                className='text-purple font-bold flex justify-center md:justify-start text-4xl sm:text-6xl md:text-7xl uppercase drop-shadow-md w-full mt-28 md:mt-40 md:pl-40'
            >About Me</motion.h2>
            <div className='w-full h-11/12 flex'>
                <div className='m-10 shadow-neumorphism-outer bg-neumorphism-outer w-1/2 h-full rounded-md'></div>
                <div className='m-10 shadow-neumorphism-outer bg-neumorphism-outer w-1/2 h-full rounded-md'></div>

            </div>

        </motion.div>
    )
}

export default About