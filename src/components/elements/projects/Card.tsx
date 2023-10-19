import React, { useRef, useState, useEffect, UIEvent } from 'react'
import { useWindowSize } from 'usehooks-ts';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { CardProps } from '@/types/Card';

const Card = ({ }: CardProps) => {
    const { width } = useWindowSize()
    const windowCenterX = width / 2
    const cardRef = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(cardRef)
    const [distanceFromCenter, setDistanceFromCenter] = useState<number>(300)
    useEffect(() => {
        //get the position of the center of the div marked by the ref and set the distance from center of page to a state
        function moveCursor() {
            if (cardRef.current) {
                const card: DOMRect = cardRef?.current.getBoundingClientRect()
                const cardCenterX = card.left + (card.width / 2)
                const positiveDistance = cardCenterX - windowCenterX >= 0 ? cardCenterX - windowCenterX : windowCenterX - cardCenterX
                setDistanceFromCenter(positiveDistance)
            }
        }
        window.addEventListener('scroll', moveCursor)
        return () => {
            window.removeEventListener('scroll', moveCursor)
        }
    }, [isInView])

    return (
        <motion.div
            ref={cardRef}
            animate={distanceFromCenter < 200 ? { scale: 2 } : { scale: 0.5 }}
            transition={{ duration: .3 }}
            className='w-[20em] h-[20em]  rounded-lg flex justify-center items-center '>
            <div className='text-black text-3xl bg-white opacity-50 backdrop-blur-sm h-full w-full rounded-2xl'></div>
        </motion.div>
    )
}

export default Card