import React, { useEffect, useRef } from 'react'
import { motion, useTransform, useScroll, useMotionValue } from 'framer-motion'

import Card from './Card';

const ProjectsScrollCarousel = () => {


    const targetRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const cards = ['procap.com', 'ncicoiffure.com', "example", "example"]
    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-56 ml-[40vw]">
                    {cards.map((card: string, i: number) => {
                        return (


                            <Card key={i} name={card} />

                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
};


export default ProjectsScrollCarousel