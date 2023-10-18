'use client'
import React from 'react'
import { motion } from 'framer-motion'
import TechLogo from './TechLogo'
const BackendSection = () => {
    const logoList = ['javascript', 'nodejs', 'expressjs', 'mongodb', 'typescript', 'nestjs', 'socket.io', 'passportjs', 'jwt', 'docker']
    return (
        <div className='flex flex-col  items-start px-20 md:px-24'>
            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-pink to-purple uppercase font-extralight text-xl p-2 my-4'>Backend</h2>
            <div className=' flex flex-wrap justify-center items-center gap-6 xl:gap-8'>
                {logoList.map((src: string, i: number) => (
                    <TechLogo src={src} />
                ))}
            </div>
        </div>
    )
}

export default BackendSection