"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
    return (
        <motion.div
            id='Contact'
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='w-screen z-10 h-[calc(100vh-9rem)] bg-gradient-to-b from-gray-100 to-gray-400 font-poppins'
        >
            <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .7, delay: .3 }}
                className='text-purple-600 font-bold flex justify-center md:justify-start text-4xl sm:text-6xl md:text-7xl uppercase drop-shadow-md w-full mt-28 md:mt-40 md:pl-40'
            >Contact Me</motion.h2>
        </motion.div>
    )
}

export default Contact