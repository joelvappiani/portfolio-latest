'use client'
import { motion } from 'framer-motion'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { NeuInputProps } from '@/types/Inputs'
const NeuInput = ({ id, type, placeholder, handleInputValue, inputValue, submitted, sent }: NeuInputProps) => {

    const [validationMessage, setValidationMessage] = useState<string>('')
    useEffect(() => {
        if (sent) return
        submitted && validateValue(id, inputValue)
    }, [submitted])
    // Check if a value is passed and if the email is a valid one, pass the formatted value to the parent component 
    const validateValue = (id: string, value: string) => {

        if (id === 'name') {

            !value.trim() ? setValidationMessage('Please enter your name...') : setValidationMessage('')
        }
        if (id === 'email') {
            (!value.trim() || !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(value)) ? setValidationMessage('Please enter a valid email adress...') : setValidationMessage('')
        }
        if (id === 'message') {
            !value.trim() ? setValidationMessage('Please write a message before sending...') : setValidationMessage('')
        }

    }
    if (type === 'classic') {

        return (
            <div className='flex flex-col'>

                <motion.input
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    id={id}
                    className={` ${validationMessage.length && 'outline outline-1 outline-red'} z-30 w-80 sm:w-96 md:w-[600px] lg:w-[400px] xl:w-[600px] h-8 md:h-12 pl-4 rounded-full shadow-neumorphism-inner bg-neumorphism-white text-black`}
                    placeholder={placeholder}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputValue(id, e.target.value)}
                    onBlur={() => validateValue(id, inputValue)}
                    value={inputValue}
                />
                <span className='text-red text-xs px-4'>{validationMessage}</span>
            </div>
        )
    } else {
        return (
            <div className='flex flex-col'>

                <motion.textarea
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    id={id}
                    className='z-30 w-80 sm:w-96 md:w-[600px] lg:w-[400px] xl:w-[600px] h-36 md:h-60 pl-4 pt-4 rounded-3xl shadow-neumorphism-inner bg-neumorphism-white text-black'
                    placeholder={placeholder}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputValue(id, e.target.value)}
                    onBlur={() => validateValue(id, inputValue)}
                    value={inputValue}
                />
                <span className='text-red text-xs px-4'>{validationMessage}</span>
            </div>
        )
    }
}

export default NeuInput