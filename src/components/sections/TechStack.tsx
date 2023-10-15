import React from 'react'
import FrontendSection from '../elements/about/FrontendSection'
import BackendSection from '../elements/about/BackendSection'

const TechStack = () => {
    return (
        <div className='xl:w-[60vw] lg:w-[80vw] w-[90vw] h-[80vh] text-black rounded-lg bg-neumorphism-white shadow-neumorphism-image flex flex-col justify-around items-center'>


            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange font-thin text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-fit uppercase drop-shadow-md mt-24'>My Tech Stack</h2>

            <div className='w-full h-5/6 flex flex-col lg:flex-row justify-center items-center gap-8'>

                <FrontendSection />
                <BackendSection />
            </div>
        </div>
    )
}

export default TechStack