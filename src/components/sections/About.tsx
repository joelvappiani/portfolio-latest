'use client'
import React from 'react'
import { motion } from 'framer-motion'
import AboutScrollCarousel from '@/components/elements/about/AboutScrollCarousel'

const About = () => {
    return (
        <motion.div
            id='About'
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='w-screen z-20 bg-gradient-to-b from-gray-50 to-gray-200 font-poppins flex flex-col'
        >
            <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .6, delay: .1 }}
                className='text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink font-bold flex justify-center md:justify-start text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase w-full mt-28 md:mt-40 md:pl-40 drop-shadow-lg'
            >About Me</motion.h2>
            <AboutScrollCarousel />

        </motion.div>
    )
}

export default About