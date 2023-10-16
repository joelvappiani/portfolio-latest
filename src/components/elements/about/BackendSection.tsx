'use client'
import React from 'react'
import TechLogo from './TechLogo'
const BackendSection = () => {
    const logoList = ['javascript', 'nodejs', 'expressjs', 'mongodb', 'typescript', 'nestjs', 'socket.io', 'passportjs', 'jwt', 'github', 'docker']
    return (
        <div className='w-[40%]  h-[80%] rounded-lg shadow-neumorphism-inner bg-neumorphism-white flex flex-col items-center p-6'>
            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-pink to-purple uppercase font-extralight text-xl mb-6'>Backend</h2>
            <div className='w-full h-full flex flex-wrap justify-center items-center gap-6 xl:gap-8'>
                {logoList.map((src: string, i: number) => (
                    <TechLogo src={src} />
                ))}
            </div>
        </div>
    )
}

export default BackendSection