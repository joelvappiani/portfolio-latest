'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/types/Inputs';
import { TailSpin } from 'react-loader-spinner'

const NeuButton = ({ handleSend, submitted }: Button): JSX.Element => {

    return (
        <motion.div
            onClick={() => handleSend()}
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -4 }}
            className='flex justify-between items-center  h-8 md:h-12 rounded-full w-80 sm:w-96 md:w-[600px] lg:w-[400px] xl:w-[600px] p-4 px-8 bg-gradient-to-r from-purple to-pink shadow-neumorphism-button-purple '
        >
            <button type='button' className='text-white font-medium' >Send </button>
            {!submitted ? <motion.div
                initial={{ x: -2 }}
                animate={{ x: 2 }}
                transition={{ repeat: Infinity, duration: .5, repeatType: 'mirror', ease: 'easeIn' }}
            ><FontAwesomeIcon icon={faArrowRight} /></motion.div> : <TailSpin
                height="20"
                width="20"
                color="white"
                ariaLabel="tail-spin-loading"
                radius="2"
            />}
        </motion.div>
    )
}

export default NeuButton