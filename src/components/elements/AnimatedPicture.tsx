import React from 'react'
import Tilt from 'react-parallax-tilt'

const AnimatedPicture = () => {
    return (
        <Tilt glareBorderRadius='20px' glareEnable glareColor='#fff' perspective={3000} scale={1.1} gyroscope={true} className='w-[130px] h-[230px] md:w-[230px] md:h-[330px] xl:w-[330px] xl:h-[430px]' style={{ transformStyle: 'preserve-3d' }} >
            <div className='bg-[url(/images/photo-jojo.jpg)] bg-cover bg-no-repeat w-[130px] h-[230px] md:w-[230px] md:h-[330px] xl:w-[330px] xl:h-[430px] rounded-[20px] ' style={{ transformStyle: 'preserve-3d' }}>
                <div className='inner-element h-full w-full flex justify-center items-between p-4 ' style={{ transform: 'translateZ(60px)' }} >
                    <h2 className='-ml-36 -mt-14 lg:mt-0 lg:-ml-52 text-lg md:text-2xl font-extralight  text-white drop-shadow-lg' >Freelance developer</h2>
                </div>
                <div className='inner-element h-full w-full flex justify-center items-between p-4 text-white' style={{ transform: 'translateZ(60px)' }} >
                    <h2 className='-mr-24  lg:-mr-44 mt-0 lg:-mt-20 text-lg md:text-2xl font-extralight text-white drop-shadow-lg h-10 '>Bootcamp Teacher</h2>
                </div>
            </div>


        </Tilt>
    )
}

export default AnimatedPicture