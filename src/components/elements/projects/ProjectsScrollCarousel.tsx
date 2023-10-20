import React, { useEffect, useRef } from 'react'
import { motion, useTransform, useScroll, useMotionValue } from 'framer-motion'

import Card from './Card';
import { TCard } from '@/types/Card';
import { allProjects } from '@/app/allProjects';

const ProjectsScrollCarousel = () => {


    const targetRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);


    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-56 ml-[40vw]">
                    {allProjects.map((card: TCard, i: number) => {
                        return (


                            <Card key={i} {...card} />

                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
};


export default ProjectsScrollCarousel