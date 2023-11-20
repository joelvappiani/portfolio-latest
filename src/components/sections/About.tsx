'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimate, useInView, stagger } from 'framer-motion'
import AnimatedPicture from '../elements/AnimatedPicture'
import { TypeAnimation } from 'react-type-animation'
import TechStack from '../elements/about/TechStack'

const About = () => {
    const [typingText, setTypingText] = useState<string[]>([])
    const [firstTime, setFirstTime] = useState<boolean>(true)
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref)
    const textArr = [
        "Hi ! I'm Joel,",
        "Fullstack developer since 2021.",
        "Javascript bootcamp teacher",
        "Specialized in web development",
        "In nextjs | nestjs | mongoDB architectures.",
        "Take a look at my work and don't hesitate to contact me ! "
    ]

    useEffect(() => {
        if (firstTime && isInView) typeText()
    }, [isInView])

    const promises = textArr.map((text: string, index: number): Promise<string> => (
        new Promise(resolve => setTimeout(() => { resolve(text) }, (index + 1) * 400))
    ))

    const typeText = () => {
        promises.forEach(async (promise: Promise<string>) => {
            const text = await promise
            setTypingText((arr: string[]) => [...arr, text])
        })
        setFirstTime(false)
    }

    return (
        <motion.div
            id='About'
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='relative w-screen z-20  bg-opacity-10 backdrop-blur-lg bg-gray-200 font-poppins flex flex-col items-center'
        >
            <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .6, delay: .1 }}
                className='text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink font-bold flex justify-center md:justify-start text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase w-full mt-28 md:mt-40 md:pl-40 drop-shadow-lg'
            >About Me</motion.h2>
            <div className='flex flex-col-reverse justify-center mt-40 sm:mt-6 gap-40 lg:gap-0 lg:justify-around items-center  md:mt-40 lg:flex-row w-full'>

                <TechStack />
                <AnimatedPicture />
            </div>
            <div ref={ref} className=' my-40 w-11/12 lg:w-2/3 min-h-[40vh] bg-opacity-10 backdrop-blur-lg bg-gray-800 p-8 rounded-2xl flex flex-col items-start gap-6 text-lg lg:text-2xl' >


                {typingText.map((text: string, index: number) => (
                    <TypeAnimation key={index} className='font-extralight' sequence={[text]} cursor={index === textArr.length - 1} speed={90} />
                ))}


            </div>
        </motion.div>
    )
}

export default About