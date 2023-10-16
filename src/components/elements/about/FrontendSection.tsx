'use client'
import React from 'react'
import TechLogo from './TechLogo'

const FrontendSection = () => {
    const logoList = ['html', 'css', 'javascript', 'react', 'redux', 'nextjs', 'typescript', 'tailwind', 'expo', 'framer-motion']
    return (
        <div className='w-[40%]  h-[80%] rounded-lg shadow-neumorphism-inner bg-neumorphism-white flex flex-col items-center p-6'>
            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-orange to-pink uppercase font-extralight text-xl mb-6'>Frontend</h2>
            <div className='w-full h-full flex flex-wrap justify-around items-center gap-6 xl:gap-8 2xl:gap-12'>
                {logoList.map((src: string, i: number) => (
                    <TechLogo src={src} />
                ))}
            </div>
        </div>
    )
}

export default FrontendSection