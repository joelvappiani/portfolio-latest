"use client"
import React from 'react'
import { motion } from 'framer-motion'
import NeuInput from '../elements/form/NeuInput'
import Image from 'next/image';

const Contact = () => {

    function handleInputValue(id: string, value: string) {
        console.log(id, value)
    }
    return (
        <motion.div
            id='Contact'
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='flex flex-col w-screen z-10 h-[calc(100vh-9rem)] bg-gradient-to-b from-gray-50 to-gray-200 font-poppins'
        >
            <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .7, delay: .3 }}
                className='text-purple font-bold flex justify-center md:justify-start text-4xl sm:text-6xl md:text-7xl uppercase drop-shadow-md w-full mt-28 md:mt-40 md:pl-40'
            >Contact Me</motion.h2>
            <div className='flex flex-col md:flex-row justify-center items-center h-[70%] w-full lg:gap-24'>
                <div className='hidden lg:flex  shadow-neumorphism-outer md:w-[390px] md:min-h-[390px] rounded-md overflow-hidden'>
                    <Image src='/images/avatar/paper-plane.png' width={500} height={500} className='md:min-w-[390px] md:min-h-[390px]' alt='paper-plane-img' />
                </div>
                <form
                    className='z-30 flex flex-col items-center justify-center w-full md:w-1/2 h-4/6 gap-2 sm:gap-4 max-w-[600px]'
                    action=""
                >
                    <NeuInput id='name' type='classic' placeholder='😁 name' handleInputValue={handleInputValue} />
                    <NeuInput id='email' type='classic' placeholder='✉️ email' handleInputValue={handleInputValue} />
                    <NeuInput id='textfield' type='textfield' placeholder='🖊️ message' handleInputValue={handleInputValue} />
                    <div className='flex justify-between items-center h-20 rounded-full gap-[12rem] sm:gap-64 lg:gap-[350px] p-4 px-8 bg-orange shadow-neumorphism-button-orange'>
                        <button type='button' className='text-black font-medium'>Send </button>
                        <span className='rounded-full bg-black w-8 h-8 flex justify-center items-center '> <span className='text-orange text-md'>→</span></span>
                    </div>
                </form>
            </div>

        </motion.div>
    )
}

export default Contact