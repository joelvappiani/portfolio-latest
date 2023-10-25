'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import TechLogo from '../elements/TechLogo'
import BrandLogo from '../elements/BrandLogo'
const Footer = () => {

    const brandLogos = [['linkedin', 'Contact me', 'https://linkedin.com/in/joël-vappiani-642840246'], ['github', 'Take a look', 'https://github.com/joelvappiani']]
    return (
        <motion.div
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='z-20 h-40 w-full bg-black flex flex-col justify-center items-center font-poppins '
        >

            <div className='flex justify-center  w-full mt-2'>
                {brandLogos.map((logo: string[], i: number) => <BrandLogo key={i} src={logo[0]} desc={logo[1]} link={logo[2]} />)}
            </div>
            <span className='text-gray-600 py-2'> djovap.com</span>

        </motion.div>
    )
}

export default Footer