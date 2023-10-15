import React from 'react'
import { motion } from 'framer-motion'
const ContactImage = () => {
    return (

        <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7, delay: .7 }}
            className='hidden lg:block relative rounded-xl top-20 lg:left-[10%] xl:left-[15%] 2xl:left-[20%]'
        >
            <img src='/images/avatar/paper-plane.png' width={500} height={500} className='absolute top-0 left-0  w-[390px] h-[410px] rounded-xl saturate-150' alt='paper-plane-img' />
            <div className='absolute top-0 left-0  w-[390px] h-[410px] opacity-10 bg-gray-500 shadow-neumorphism-image rounded-xl'></div>
            <div className='absolute top-0 left-0  w-[390px] h-[410px]  shadow-neumorphism-image rounded-xl'></div>
        </motion.div>

    )
}

export default ContactImage