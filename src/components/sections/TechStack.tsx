import React from 'react'
import FrontendSection from '../elements/about/FrontendSection'
import BackendSection from '../elements/about/BackendSection'

const TechStack = () => {
    return (
        <div className=' w-[170vw] sm:w-[110vw] md:w-[100vw] lg:w-[95vw] xl:w-[80vw] h-[90vh] text-black rounded-lg bg-neumorphism-white shadow-neumorphism-image'>


            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange font-thin text-3xl sm:text-4xl md:text-6xl md:mb-6  uppercase drop-shadow-md mt-10 mb-2 w-full text-center'>My Tech Stack</h2>

            <div className='w-full h-full flex justify-center items-start gap-4 md:gap-8'>

                <FrontendSection />
                <BackendSection />
            </div>
        </div>
    )
}

export default TechStack