"use client"
import React from 'react'
import { motion } from 'framer-motion'
import NeuInput from '../elements/form/NeuInput'

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
            <div className='flex flex-col md:flex-row justify-around items-center h-[70%]'>
                <div className='m-10 shadow-neumorphism-outer bg-neumorphism-outer w-1/2 h-[70%] rounded-md'></div>
                <form
                    className='z-30 flex flex-col items-center justify-center w-full md:w-1/2 h-4/6 gap-2 sm:gap-4 xl:-mt-48'
                    action=""
                >
                    <NeuInput id='name' type='classic' placeholder='😁 name' handleInputValue={handleInputValue} />
                    <NeuInput id='email' type='classic' placeholder='✉️ email' handleInputValue={handleInputValue} />
                    <NeuInput id='textfield' type='textfield' placeholder='🖊️ message' handleInputValue={handleInputValue} />
                    <div className='flex justify-between items-center w-80 sm:w-96 h-20 rounded-3xl lg:w-[500px] mx-20 px-28 sm:px-36 md:px-36 lg:px-52 bg-orange'>
                        <button type='button'>Send </button>
                        <span> →</span>
                    </div>
                </form>
            </div>

        </motion.div>
    )
}

export default Contact