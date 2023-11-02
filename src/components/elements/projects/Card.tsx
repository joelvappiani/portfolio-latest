import React, { useRef, useState, useEffect, JSX } from 'react'
import { useWindowSize } from 'usehooks-ts';
import { motion, useMotionValue, useAnimate, useInView } from 'framer-motion';
import { CardProps } from '@/types/Card';
import Tilt from 'react-parallax-tilt'
import Image from 'next/image';
import Link from 'next/link';
import VideoModal from './VideoModal';

const Card = ({ name, src, desc, type, platform, link }: CardProps): JSX.Element => {
    const [isCloseToCenter, setIsCloseToCenter] = useState<boolean>(false)
    const [hovered, setHovered] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { width } = useWindowSize()
    const windowCenterX = width / 2
    const cardRef = useRef<HTMLDivElement | null>(null)
    const [scope, animate] = useAnimate()
    const isInView = useInView(cardRef)
    const scale = useMotionValue(1)

    useEffect(() => {

        hovered ? animate(scope.current, { scale: 1.00 }) : animate(scope.current, { scale: 1.2 })

        //get the position of the center of the div marked by the ref and set the distance from center of page to a state
        function moveCursor() {
            if (cardRef.current) {
                const card: DOMRect = cardRef?.current.getBoundingClientRect()
                const cardCenterX = card.left + (card.width / 2)
                const positiveDistance = cardCenterX - windowCenterX >= 0 ? cardCenterX - windowCenterX : windowCenterX - cardCenterX
                positiveDistance < width / 5 ? setIsCloseToCenter(true) : setIsCloseToCenter(false)
                scale.set((1 - positiveDistance / width) * 1.8)
            }
        }
        window.addEventListener('scroll', moveCursor)
        return () => {
            window.removeEventListener('scroll', moveCursor)
        }
    }, [isInView, hovered])


    function handleOpenCloseModal() {
        setIsOpen(!isOpen)
    }
    // if (platform === 'mobile') {
    //     return (
    //         <div style={{ transformStyle: 'preserve-3d', pointerEvents: 'auto' }}>
    //             <motion.div
    //                 ref={cardRef}
    //                 style={{ scale, transformStyle: 'preserve-3d', }}
    //                 transition={{ duration: .2 }}
    //                 onMouseEnter={() => setHovered(true)}
    //                 onMouseLeave={() => setHovered(false)}
    //                 onClick={() => handleOpenCloseModal()}
    //                 className='w-[10em] h-[10em] md:w-[20em] md:h-[20em]  rounded-2xl '>
    //                 <div
    //                     className="rounded-2xl flex flex-col items-start justify-end  w-full h-full"
    //                     style={{ transformStyle: 'preserve-3d' }}
    //                 >
    //                     <div
    //                         className='w-[10em] h-[8em] md:w-[20em] md:h-[16em] absolute bottom-10 overflow-hidden'

    //                     >

    //                         <Image ref={scope} src={src} width={3000} height={3000} style={{ position: 'relative', top: 0 }} alt='project image' />

    //                     </div>
    //                     <motion.div
    //                         initial={{ opacity: 0, width: 0, height: 0 }}
    //                         animate={isCloseToCenter ? { opacity: 1, width: "100%", height: "30%" } : {}}
    //                         transition={{ ease: 'linear', duration: .2, bounce: 'none' }}
    //                         className='bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-2xl p-2 flex flex-col'
    //                         style={{ transformStyle: 'preserve-3d', transform: "translateZ(70px)" }}
    //                     >
    //                         <div className='flex justify-between  mb-2'>

    //                             <span className='text-white text-xs sm:text-sm text-center sm:text-start w-full' style={{ transform: "translateZ(150px)" }}>{name}</span>
    //                             <div className='hidden sm:flex justify-center gap-2'>
    //                                 <div className='text-[7px] text-white outline outline-1 outline-white rounded-full  p-0 px-1  flex justify-center items-center'><span>{platform}</span></div>
    //                                 <div className='text-[7px] text-gray-800 rounded-full  p-0 px-1 bg-white flex justify-center items-center'><span>{type}</span></div>
    //                             </div>
    //                         </div>
    //                         <span className='hidden sm:flex text-gray-400 text-xs'>{desc}</span>
    //                     </motion.div>
    //                 </div>
    //             </motion.div >
    //             <VideoModal isOpen={isOpen} src={link} handleOpenCloseModal={handleOpenCloseModal} />
    //         </div >
    //     )
    // }
    return (
        <div style={{ transformStyle: 'preserve-3d', pointerEvents: 'auto' }}>
            <motion.div
                ref={cardRef}
                style={{ scale, transformStyle: 'preserve-3d', }}
                transition={{ duration: .2 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}

                className='w-[10em] h-[10em] md:w-[20em] md:h-[20em]  rounded-2xl '>
                <Link
                    rel="noopener noreferrer"
                    target='_blank'
                    href={link}
                    className="rounded-2xl flex flex-col items-start justify-end  w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div
                        className='w-[10em] h-[8em] md:w-[20em] md:h-[16em] absolute bottom-10 overflow-hidden'

                    >

                        <Image ref={scope} src={src} width={3000} height={3000} style={{ position: 'relative', top: 0 }} alt='project image' />

                    </div>
                    <motion.div
                        initial={{ opacity: 0, width: 0, height: 0 }}
                        animate={isCloseToCenter ? { opacity: 1, width: "100%", height: "30%" } : {}}
                        transition={{ ease: 'linear', duration: .2, bounce: 'none' }}
                        className='bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-2xl p-4 flex flex-col'
                        style={{ transformStyle: 'preserve-3d', transform: "translateZ(70px)" }}
                    >
                        <div className='flex justify-between mb-2'>

                            <span className='text-white text-xs sm:text-sm text-center sm:text-start w-full' style={{ transform: "translateZ(150px)" }}>{name}</span>
                            <div className='hidden sm:flex justify-center gap-2'>

                                <div className='text-[7px] text-white outline outline-1 outline-white rounded-full  p-0 px-1  flex justify-center items-center'><span>{platform}</span></div>
                                <div className='text-[7px] text-gray-800 rounded-full  p-0 px-1 bg-white flex justify-center items-center'><span>{type}</span></div>
                            </div>
                        </div>
                        <span className='hidden sm:flex text-gray-400 text-xs'>{desc}</span>

                    </motion.div>
                </Link>
            </motion.div >
        </div >
    )
}

export default Card