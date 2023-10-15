"use client"
import React, { useEffect } from 'react'
import { motion, useAnimate, useInView, stagger } from 'framer-motion'
import NeuInput from '../elements/contact/NeuInput'
import NeuButton from '../elements/contact/NeuButton';
import NeuImage from '../elements/contact/ContactImage';


const Contact = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)

    useEffect(() => {
        if (isInView) {
            animate('span', { y: -20, opacity: 1 }, { delay: stagger(0.4) })
        }
    }, [isInView])

    console.log(isInView)
    function handleInputValue(id: string, value: string) {
        console.log(id, value)
    }

    return (
        <motion.div
            id='Contact'
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className='flex flex-col w-screen z-10 h-[calc(100vh-9rem)] bg-gradient-to-b from-gray-100 to-gray-200 font-poppins'
        >
            <motion.h2
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .7, delay: .3 }}
                className='text-purple font-bold flex justify-center md:justify-start text-4xl sm:text-6xl md:text-7xl uppercase drop-shadow-md w-full mt-28 md:mt-40 md:pl-40'
            >Contact Me</motion.h2>


            <NeuImage />

            <div className='flex flex-col md:flex-row justify-center items-center h-[70%] w-full lg:gap-24'>
                <form
                    ref={scope}
                    className=' lg:absolute lg:right-[10%] 2xl:right-[15%] flex flex-col items-center justify-center w-1/2 md:w-1/3 h-2/3 lg:h-2/5 gap-2 sm:gap-4 max-w-[600px]'
                    action=""
                >
                    <span className='opacity-0 -translate-y-[10px] max-h-fit'>
                        <NeuInput id='name' type='classic' placeholder='😁 name' handleInputValue={handleInputValue} />
                    </span>
                    <span className='opacity-0 -translate-y-[10px] max-h-fit'>

                        <NeuInput id='email' type='classic' placeholder='✉️ email' handleInputValue={handleInputValue} />
                    </span>
                    <span className='opacity-0 -translate-y-[10px] max-h-fit'>

                        <NeuInput id='textfield' type='textfield' placeholder='🖊️ message' handleInputValue={handleInputValue} />
                    </span>
                    <span className='opacity-0 -translate-y-[10px] max-h-fit'>

                        <NeuButton />
                    </span>
                </form>
            </div>

        </motion.div>
    )
}

export default Contact