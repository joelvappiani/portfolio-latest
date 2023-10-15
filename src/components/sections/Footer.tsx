'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <motion.div
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='z-10 h-36 w-full bg-black flex flex-col justify-center items-center font-poppins '
        >
            <span className='text-gray-600 py-2'> djovap.com</span>
            <div className='w-full flex justify-center gap-4 py-2'>
                <a href='https://github.com/joelvappiani'><FontAwesomeIcon icon={faGithub} className='text-gray-600 hover:text-white text-2xl' /></a>
                <a href='https://linkedin.com/in/joël-vappiani-642840246'><FontAwesomeIcon icon={faLinkedin} className='text-gray-600 hover:text-white text-2xl' /></a>
            </div>
        </motion.div>
    )
}

export default Footer