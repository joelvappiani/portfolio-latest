import React, { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import Card from './Card';

const ProjectsScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const cards = [1, 2, 3, 4, 5, 6]
    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-32 ml-[50vw]">
                    {cards.map((card) => {
                        return <Card key={card} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};


export default ProjectsScrollCarousel