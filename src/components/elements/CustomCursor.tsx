'use client'
import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // const springConfigBig = { damping: 7, stiffness: 200, mass: 1, };
    // const cursorXSpringBig = useSpring(cursorX, springConfigBig);
    // const cursorYSpringBig = useSpring(cursorY, springConfigBig);

    const springConfigSmall = { damping: 6, stiffness: 200, mass: 0.8 }
    const cursorXSpringSmall = useSpring(cursorX, springConfigSmall);
    const cursorYSpringSmall = useSpring(cursorY, springConfigSmall);
    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        };

        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <div className='z-40'>

            {/* <motion.div

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
            /> */}
            <motion.div
                //     border-radius: 50%;
                //     background-color: #fff;
                //     box-shadow:
                //       0 0 60px 30px #fff,  /* inner white */
                //       0 0 100px 60px #f0f, /* middle magenta */
                //       0 0 140px 90px #0ff; /* outer cyan */
                //   }
                style={{

                    position: "fixed",
                    translateX: cursorXSpringSmall,
                    translateY: cursorYSpringSmall,
                    left: 0,
                    top: 0,
                    height: "1px",
                    width: "1px",
                    margin: "",
                    // borderRadius: '20px',
                    pointerEvents: 'none',
                    backgroundColor: "#fff",
                    boxShadow: "0 0 2px 2px #fff, 0 0 15px 9px #f0f,0 0 18px 13px #0ff"
                }}
            />
        </div>
    )
}

export default CustomCursor