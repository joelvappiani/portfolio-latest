'use client'
import React from 'react'
import { motion } from 'framer-motion'
import HorizontalScrollCarousel from '../elements/projects/HorizontalScrollCarousel'

const Projects = () => {

    return (
        <motion.div
            id='Projects'
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className=' w-screen font-poppins backdrop-grayscale pointer-events-none flex flex-col'
        >
            <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .7, delay: .3 }}
                className='text-orange font-bold flex justify-center md:justify-start text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase drop-shadow-md w-full mt-28 md:mt-40 md:pl-40'
            >My Projects</motion.h2>
            <HorizontalScrollCarousel />
        </motion.div>
    )
}

export default Projects