'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Footer = () => {
    return (
        <motion.div
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='z-10 h-36 w-full -pb-24 bg-black flex justify-center items-center font-poppins'
        >
            <span className='text-gray-600'> djovap.com</span>
        </motion.div>
    )
}

export default Footer