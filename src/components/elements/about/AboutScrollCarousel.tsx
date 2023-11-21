import React, { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import PhotoSection from './PhotoSection';
import TechStack from './TechStack';


const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75.5%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-[5vw]  ml-[3vw]">
                    <PhotoSection />
                    <TechStack />

                </motion.div>
            </div>
        </section>
    );
};


export default HorizontalScrollCarousel