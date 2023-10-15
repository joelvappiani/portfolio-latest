'use client'
import React from 'react'
import TechLogo from './TechLogo'
const BackendSection = () => {
    const logoList = ['javascript', 'nodejs', 'expressjs', 'mongodb', 'typescript', 'nestjs', 'socket.io', 'passportjs', 'jwt', 'github', 'docker']
    return (
        <div className='w-2/3 h-1/3 lg:w-1/3 lg:h-2/3 rounded-lg shadow-neumorphism-inner bg-neumorphism-white flex flex-col items-center p-6 '>
            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-pink to-purple uppercase font-extralight text-xl mb-6'>Backend</h2>
            <div className='flex flex-wrap justify-around gap-6'>
                {logoList.map((src: string, i: number) => (
                    <TechLogo src={src} />
                ))}
            </div>
        </div>
    )
}

export default BackendSection