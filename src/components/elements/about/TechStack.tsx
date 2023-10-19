import React, { useEffect, useState } from 'react'
import { useAnimate, useInView, stagger } from 'framer-motion'
import TechLogo from './TechLogo'

const TechStack = () => {
    const [scope, animate] = useAnimate()
    const [logoHovered, setLogoHovered] = useState<string | undefined>(undefined)
    const isInView = useInView(scope)
    const logoListFrontend = [['html', "Structure web content language"], ['css', 'Styling language'], ['javascript', 'Web dev programming language'], ['react', 'Frontend library'], ['redux', 'Global state management library'], ['nextjs', 'SSR Frontend frameword'], ['typescript', 'Strong typing javascript superset'], ['tailwind', 'Utility-first CSS Framework'], ['framer-motion', 'CSS Animations library'], ['expo', 'Open source mobile development platform']]
    const logoListBackend = [['javascript', 'Web dev programming language'], ['nodejs', 'JS server-side runtime environment'], ['expressjs', 'Backend minimal nodejs framework'], ['mongodb', 'NoSQL Database'], ['typescript', 'Strong typing javascript superset'], ['nestjs', 'Progressive Node.js framework for efficient server-side applications'], ['socket.io', 'JS library to enable'], ['passportjs', 'Authentication nodejs middleware'], ['jwt', 'Secure authentication & authorization'], ['docker', 'Container platform']]

    useEffect(() => {
        isInView && animateLogos()
    }, [isInView])


    async function animateLogos() {
        await animate('.tech-logo', { scale: [0, 0.2, 1], y: [0, -100, 0], rotate: [0, -360, 0] }, { delay: stagger(.02), duration: .8 })
        animate(".floating-text", { opacity: [0, 1, 0], x: [-80, 0, 80] }, { duration: 1, delay: stagger(.05), ease: 'linear' })
    }


    return (
        <div className=' w-[130vw] md:w-[80vw]  h-[90vh] text-black rounded-lg bg-neumorphism-white shadow-neumorphism-image'>


            <h2 className='text-gray-300 font-thin text-3xl sm:text-4xl  md:mb-6  uppercase drop-shadow-md mt-10 w-full text-center'>My Stack</h2>

            <div ref={scope} className='relative -top-6 md:top-10 w-full h-[90%] flex justify-stretch items-around flex-col md:justify-around md:items-center '>

                <h2 className='pointer-events-none relative w-full top-4 md:top-10 left-5 md:left-20 text-transparent bg-clip-text opacity-10 bg-gradient-to-r from-purple to-transparent uppercase font-bold text-[90px] md:text-[170px] p-2 md:my-4'>Frontend</h2>
                <div className='relative flex flex-col  items-start px-20 md:px-24 -top-20 mb-12 md:mb-0'>
                    <div className='flex flex-wrap justify-center items-center gap-6 xl:gap-8'>
                        {logoListFrontend.map((src: string[], i: number) => (
                            <div style={logoHovered === src[0] ? { zIndex: 50 } : { zIndex: 10 }} onMouseOver={() => setLogoHovered(src[0])}>
                                <TechLogo src={src} />
                            </div>
                        ))}
                    </div>
                </div>
                <h2 className='pointer-events-none relative w-full -top-40 md:-top-36 left-5 md:left-20 text-transparent bg-clip-text opacity-10 bg-gradient-to-r from-purple to-transparent uppercase font-bold text-[90px] md:text-[170px] p-2 my-4'>Backtend</h2>
                <div className='relative flex flex-col  items-start px-20 md:px-24 -top-[17rem]'>
                    <div className=' flex flex-wrap justify-center items-center gap-6 xl:gap-8'>
                        {logoListBackend.map((src: string[], i: number) => (
                            <div style={logoHovered === src[0] ? { zIndex: 50 } : { zIndex: 10 }} onMouseOver={() => setLogoHovered(src[0])}>
                                <TechLogo src={src} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TechStack