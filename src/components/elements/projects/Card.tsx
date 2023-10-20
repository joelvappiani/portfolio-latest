import React, { useRef, useState, useEffect, UIEvent } from 'react'
import { useWindowSize } from 'usehooks-ts';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { CardProps } from '@/types/Card';
import Tilt from 'react-parallax-tilt'

const Card = ({ name }: CardProps) => {

    const { width } = useWindowSize()
    const windowCenterX = width / 2
    const cardRef = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(cardRef)
    const scale = useMotionValue(1)
    // const [distanceFromCenter, setDistanceFromCenter] = useState<number>(300)

    useEffect(() => {
        //get the position of the center of the div marked by the ref and set the distance from center of page to a state
        function moveCursor() {
            if (cardRef.current) {
                const card: DOMRect = cardRef?.current.getBoundingClientRect()
                const cardCenterX = card.left + (card.width / 2)
                const positiveDistance = cardCenterX - windowCenterX >= 0 ? cardCenterX - windowCenterX : windowCenterX - cardCenterX
                // console.log((positiveDistance / width))
                // setDistanceFromCenter(positiveDistance)
                scale.set((1 - positiveDistance / width) * 1.8)
            }
        }
        window.addEventListener('scroll', moveCursor)
        return () => {
            window.removeEventListener('scroll', moveCursor)
        }
    }, [isInView])

    return (
        <Tilt perspective={3000} gyroscope={true} style={{ transformStyle: 'preserve-3d', pointerEvents: 'auto' }}>
            <motion.div
                ref={cardRef}
                style={{ scale, transformStyle: 'preserve-3d', }}
                // animate={distanceFromCenter < 100 ? { scale: 1.7 }}
                transition={{ duration: .2 }}
                className='w-[20em] h-[20em]  rounded-lg flex justify-center items-center bg-white'>
                <div style={{ transform: "translateZ(50px)" }} className='text-black text-3xl  backdrop-blur-sm h-full w-full rounded-2xl flex justify-center items-center ' >
                    <span>{name}</span>
                </div>
            </motion.div>
        </Tilt>
    )
}

export default Card