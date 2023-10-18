import React, { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import Resume from './Resume';
import TechStack from '@/components/sections/TechStack';

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-51.5%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-[10vw] lg:gap-[10vw] ml-[3vw]">
                    <Resume />
                    <TechStack />
                </motion.div>
            </div>
        </section>
    );
};


export default HorizontalScrollCarousel