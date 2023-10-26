'use client'
import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimate } from 'framer-motion'
import ProjectsScrollCarousel from '../elements/projects/ProjectsScrollCarousel'


const Projects = () => {
    const [scope, animate] = useAnimate()
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(scope)
    const isEnd = useInView(ref)


    useEffect(() => {
        isInView
            ? animate("h2", { opacity: [0, 1], x: [-80, 0] }, { duration: .6, delay: .1 })
            : animate("h2", { opacity: [1, 0], x: [0, -80] }, { duration: .6, delay: .1 })
        isEnd
            ? animate("h2", { opacity: [1, 0], x: [0, -80] }, { duration: .6, delay: .1 })
            : animate("h2", { opacity: [0, 1], x: [-80, 0] }, { duration: .6, delay: .1 })
    }, [isInView, isEnd])



    return (
        <motion.div
            ref={scope}
            id='Projects'
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className=' w-screen font-poppins backdrop-grayscale pointer-events-none flex flex-col'
        >
            <h2

                className={`transition-opacity duration-300 sticky top-20 text-orange font-bold flex justify-center md:justify-start text-3xl sm:text-6xl md:text-7xl lg:text-8xl uppercase drop-shadow-md w-full mt-28 md:mt-40 md:pl-40`}
            >My Projects</h2>
            <ProjectsScrollCarousel />
            <div ref={ref} className='text-transparent'>end</div>
        </motion.div>
    )
}

export default Projects




