'use client'
import React, { useState, ChangeEvent } from 'react'
import { NeuInputProps } from '@/types/Inputs'
const NeuInput = ({ id, type, placeholder, handleInputValue }: NeuInputProps) => {
    const [value, setValue] = useState<string>('')
    if (type === 'classic') {

        return (
            <input
                id={id}
                className='z-30 w-80 sm:w-96 lg:w-[500px] h-20 pl-4 rounded-full bg-neumorphism-inner shadow-neumorphism-inner'
                placeholder={placeholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                onBlur={() => handleInputValue(id, value)}
                value={value}
            />
        )
    } else {
        return (
            <textarea
                id={id}
                className='z-30 w-80 sm:w-96 lg:w-[500px] h-80 pl-4 pt-4 rounded-3xl bg-neumorphism-inner shadow-neumorphism-inner'
                placeholder={placeholder}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                onBlur={() => handleInputValue(id, value)}
                value={value}
            />
        )
    }
}

export default NeuInput