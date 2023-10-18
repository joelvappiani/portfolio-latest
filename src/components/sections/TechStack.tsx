import React, { useEffect } from 'react'
import { useAnimate, useInView, stagger } from 'framer-motion'
import TechLogo from '../elements/about/TechLogo'

const TechStack = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
    const logoListBackend = ['javascript', 'nodejs', 'expressjs', 'mongodb', 'typescript', 'nestjs', 'socket.io', 'passportjs', 'jwt', 'docker']
    const logoListFrontend = ['html', 'css', 'javascript', 'react', 'redux', 'nextjs', 'typescript', 'tailwind', 'expo', 'framer-motion']

    useEffect(() => {
        isInView && animateLogos()
    }, [isInView])
    async function animateLogos() {
        await animate('.tech-logo', { scale: [0, 0.2, 1], y: [0, -100, 0], rotate: [0, -360, 0] }, { delay: stagger(.02), duration: .8 })
        animate(".floating-text", { opacity: [0, 1, 0], x: [-80, 0, 80] }, { duration: 1, delay: stagger(.05), ease: 'linear' })
    }
    return (
        <div className=' w-[200vw] md:w-[95vw] xl:w-[80vw] h-[90vh] text-black rounded-lg bg-neumorphism-white shadow-neumorphism-image'>


            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-pink to-orange font-thin text-3xl sm:text-4xl  md:mb-6  uppercase drop-shadow-md mt-10 w-full text-center'>My Stack</h2>

            <div ref={scope} className='relative top-10 w-full h-[90%] flex justify-stretch items-around md:flex-col md:justify-around md:items-center '>

                <h2 className='pointer-events-none relative w-full top-10 left-20 text-transparent bg-clip-text opacity-10 bg-gradient-to-r from-purple to-transparent uppercase font-bold text-[170px] p-2 my-4'>Frontend</h2>
                <div className='relative flex flex-col  items-start px-20 md:px-24 -top-20'>
                    <div className='flex flex-wrap justify-center items-center gap-6 xl:gap-8'>
                        {logoListFrontend.map((src: string, i: number) => (
                            <TechLogo src={src} />
                        ))}
                    </div>
                </div>
                <h2 className='pointer-events-none relative w-full -top-36 left-20  text-transparent bg-clip-text opacity-10 bg-gradient-to-r from-purple to-transparent uppercase font-bold text-[170px] p-2 my-4'>Backtend</h2>
                <div className='relative flex flex-col  items-start px-20 md:px-24 -top-[17rem]'>
                    <div className=' flex flex-wrap justify-center items-center gap-6 xl:gap-8'>
                        {logoListBackend.map((src: string, i: number) => (
                            <TechLogo src={src} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TechStack