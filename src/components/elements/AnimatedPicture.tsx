import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
const AnimatedPicture = () => {
    return (
        <Tilt glareBorderRadius='20px' glareEnable glareColor='#fff' perspective={1000} scale={1.2} className='z-0' gyroscope={true} style={{ transformStyle: 'preserve-3d' }}>



            <div className='bg-[url(/images/photo-jojo.jpg)] bg-cover bg-no-repeat w-[260px] h-[400px] md:w-[300px] md:h-[450px] lg:w-[400px] lg:h-[550px] rounded-[20px] ' style={{ transformStyle: 'preserve-3d' }}>
                <div className='inner-element h-full w-full flex justify-center items-between p-4 ' style={{ transform: 'translateZ(60px)' }} >
                    <h2 className='-ml-44 text-4xl font-thin drop-shadow-xl text-white' >Freelance developer</h2>
                </div>
                <div className='inner-element h-full w-full flex justify-center items-between p-4 text-white' style={{ transform: 'translateZ(60px)' }} >
                    <h2 className='-mr-44 -mt-20 text-4xl font-thin text-black drop-shadow-xl '>Bootcamp Teacher</h2>
                </div>
            </div>


        </Tilt>
    )
}

export default AnimatedPicture