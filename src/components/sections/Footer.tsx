'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import TechLogo from '../elements/TechLogo'
const Footer = () => {

    const brandLogos = [['linkedin', 'Contact me'], ['github', 'Take a look']]
    return (
        <motion.div
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='z-20 h-40 w-full bg-black flex flex-col justify-center items-center font-poppins '
        >
            <div className='w-full flex justify-center gap-2 py-1'>
                {/* <a href='https://github.com/joelvappiani'><FontAwesomeIcon icon={faGithub} className='text-gray-600 hover:text-white text-2xl' /></a>
                <a href='https://linkedin.com/in/joël-vappiani-642840246'><FontAwesomeIcon icon={faLinkedin} className='text-gray-600 hover:text-white text-2xl' /></a> */}
                <div className='flex justify-center gap-16 w-full mt-2'>
                    {brandLogos.map((logo: string[], i: number) => <TechLogo src={logo} from='contact' />)}
                </div>
            </div>
            <span className='text-gray-600 py-2'> djovap.com</span>
        </motion.div>
    )
}

export default Footer