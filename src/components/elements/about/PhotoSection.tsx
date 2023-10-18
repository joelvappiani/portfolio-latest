import React from 'react'
import PokemonCard from '../PokemonCard'
import AnimatedPicture from '../AnimatedPicture'

const PhotoSection = () => {
    return (
        <div className='w-[90vw] h-[90vh] xl:w-[40vw] text-black rounded-lg bg-neumorphism-white shadow-neumorphism-image'>
            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange font-thin text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-fit uppercase drop-shadow-md mt-10 md:mt-20 pl-20'>Who am I ?</h2>
            <div className='w-full h-full flex justify-center items-start pt-24 '>

                <AnimatedPicture />

            </div>
        </div>
    )
}

export default PhotoSection