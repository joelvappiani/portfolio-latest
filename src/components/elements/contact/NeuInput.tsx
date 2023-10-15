'use client'
import React, { useState, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { NeuInputProps } from '@/types/Inputs'
const NeuInput = ({ id, type, placeholder, handleInputValue }: NeuInputProps) => {
    const [value, setValue] = useState<string>('')
    if (type === 'classic') {

        return (
            <motion.input
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                id={id}
                className='z-30 w-80 sm:w-96 md:w-[600px] lg:w-[400px] xl:w-[600px] h-12 pl-4 rounded-full shadow-neumorphism-inner bg-neumorphism-white text-black'
                placeholder={placeholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                onBlur={() => handleInputValue(id, value)}
                value={value}
            />
        )
    } else {
        return (

            <motion.textarea
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                id={id}
                className='z-30 w-80 sm:w-96 md:w-[600px] lg:w-[400px] xl:w-[600px] h-60 pl-4 pt-4 rounded-3xl shadow-neumorphism-inner bg-neumorphism-white text-black'
                placeholder={placeholder}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                onBlur={() => handleInputValue(id, value)}
                value={value}
            />
        )
    }
}

export default NeuInput