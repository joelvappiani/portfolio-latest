'use client'
import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfigBig = { damping: 8, stiffness: 100, mass: 0.5, };
    const cursorXSpringBig = useSpring(cursorX, springConfigBig);
    const cursorYSpringBig = useSpring(cursorY, springConfigBig);


    const springConfigSmall = { damping: 5, stiffness: 100, mass: 0.2 }
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
        <div className='z-50'>

            <motion.div

                style={{
                    position: "fixed",
                    translateX: cursorXSpringBig,
                    translateY: cursorYSpringBig,
                    left: 0,
                    top: 0,
                    height: "32px",
                    width: "32px",
                    borderRadius: '16px',
                    pointerEvents: 'none',
                    backdropFilter: 'blur(100px)',
                    backgroundColor: 'white',
                    opacity: 0.5
                }}
            />
            <motion.div
                style={{
                    position: "fixed",
                    translateX: cursorXSpringSmall,
                    translateY: cursorYSpringSmall,
                    left: 0,
                    top: 0,
                    height: "14px",
                    width: "14px",
                    margin: "9px",
                    borderRadius: '16px',
                    pointerEvents: 'none',
                    backgroundColor: 'orange'
                }}
            />
        </div>
    )
}

export default CustomCursor