'use client'
import React, { useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { BannerLogoProps } from '@/types/Logo'
const FloatingLogo = ({ src }: BannerLogoProps) => {

    const dimentions = { width: "1000px", height: "1000px" }
    const { width, height } = dimentions
    //const [position, setPosition] = useState({ x: 150, y: 150 })
    const x = useMotionValue(500)
    const y = useMotionValue(500)

    const springConfig = { damping: 8, stiffness: 50, mass: 20, };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // const springConfig = { damping: 6, stiffness: 100, mass: 1.4 }
    // const xSpring = useSpring(x, springConfig);
    // const ySpring = useSpring(y, springConfig);
    useEffect(() => {
        let interval = setInterval(() => {
            x.set(Math.random() * 400)
            y.set(Math.random() * 400)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (

        <motion.div
            style={{
                position: "absolute",
                translateX: xSpring,
                translateY: ySpring,
                top: '25vh',
                left: '25vw',
                pointerEvents: 'none',
            }}

        >
            <Image src={`/images/icons/icon-3d-${src}.png`} width={100} height={50} className="w-6 sm:w-8" alt='floating tech logo' />
        </motion.div>
    )
}

export default FloatingLogo