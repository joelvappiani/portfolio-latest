'use client'
import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfigBig = { damping: 7, stiffness: 200, mass: 1, };
    const cursorXSpringBig = useSpring(cursorX, springConfigBig);
    const cursorYSpringBig = useSpring(cursorY, springConfigBig);

    const springConfigSmall = { damping: 6, stiffness: 200, mass: 0.8 }
    const cursorXSpringSmall = useSpring(cursorX, springConfigSmall);
    const cursorYSpringSmall = useSpring(cursorY, springConfigSmall);
    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        };
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <div className='z-40'>

            <motion.div

                style={{
                    position: "fixed",
                    translateX: cursorXSpringBig,
                    translateY: cursorYSpringBig,
                    left: 0,
                    top: 0,
                    height: "40px",
                    width: "40px",
                    borderRadius: '20px',
                    pointerEvents: 'none',
                    mixBlendMode: 'hard-light',
                    backgroundColor: 'white',
                    opacity: 0.4
                }}
            />
            <motion.div
                style={{
                    position: "fixed",
                    translateX: cursorXSpringSmall,
                    translateY: cursorYSpringSmall,
                    left: 0,
                    top: 0,
                    height: "12px",
                    width: "12px",
                    margin: "14px",
                    borderRadius: '20px',
                    pointerEvents: 'none',
                    backgroundColor: 'rgb(251 146 60)'
                }}
            />
        </div>
    )
}

export default CustomCursor