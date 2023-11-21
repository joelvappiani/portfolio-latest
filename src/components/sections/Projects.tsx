'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimate } from 'framer-motion'
import ProjectsCarousel from '../elements/projects/ProjectsCarousel'
import FilterMenu from '../elements/projects/FilterMenu'

const Projects = () => {
    const [filterValue, setFilterValue] = useState<string>('all')
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

    const handleFilter = (type: string): void => {
        setFilterValue(type)
    }
    //Filter the project array by type of project


    return (
        <motion.div
            ref={scope}
            id='Projects'
            initial={{ display: 'none' }}
            animate={{ display: 'flex' }}
            transition={{ delay: 2.2 }}
            className=' w-screen h-screen min-h-[1000px] font-poppins backdrop-grayscale pointer-events-none flex flex-col'
        >
            <h2

                className={`transition-opacity duration-300 top-10 text-orange font-bold flex justify-center md:justify-start text-3xl sm:text-6xl md:text-7xl lg:text-8xl uppercase drop-shadow-md w-full mt-24  md:pl-40`}
            >My Projects</h2>
            {/* <ProjectsScrollCarousel /> */}
            <div className='w-full flex justify-center'>

                <ProjectsCarousel filterValue={filterValue} />
            </div>
            <FilterMenu handleFilter={handleFilter} />

        </motion.div>
    )
}

export default Projects




