import React, { useState, useRef } from 'react'
import { motion, useTransform, useScroll, useMotionValue } from 'framer-motion'

import Card from './Card';
import { CardProps } from '@/types/Card';
import { allProjects } from '@/app/allProjects';
import FilterMenu from './FilterMenu';

const ProjectsScrollCarousel = () => {

    const [filterValue, setFilterValue] = useState<string>('all')

    const targetRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const handleFilter = (type: string): void => {
        setFilterValue(type)
    }
    //Filter the project array by type of project
    const filterByType = (filterValue: string, listToFilter: CardProps[]): CardProps[] => {
        if (filterValue === 'all') return listToFilter
        return listToFilter.filter((card: CardProps) => card.type === filterValue)
    }


    return (
        <section ref={targetRef} className="relative h-[200vh]">

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-56 ml-[40vw]">
                    {filterByType(filterValue, allProjects).map((card: CardProps, i: number) => (
                        <Card key={i} {...card} />
                    ))}
                </motion.div>

                <FilterMenu handleFilter={handleFilter} />


            </div>
        </section>
    );
};


export default ProjectsScrollCarousel