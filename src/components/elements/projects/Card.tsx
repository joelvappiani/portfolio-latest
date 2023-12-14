




import React, { useState, useEffect, JSX } from 'react'
import { motion, useAnimate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CardProps } from '@/types/Card';
import Image from 'next/image';
import VideoModal from './VideoModal';

const Card = ({ name, src, desc, type, platform, link }: CardProps): JSX.Element => {

    const [hovered, setHovered] = useState<boolean>(false)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)


    const [scope, animate] = useAnimate()

    const { ref, inView } = useInView({
        rootMargin: "50px",
        threshold: 1,
    });

    useEffect(() => {
        hovered ? animate(scope.current, { scale: 1.1 }) : animate(scope.current, { scale: 1 })
        console.log(inView)
    }, [inView, hovered])

    const toggleModal = (bool: boolean) => {
        setIsModalOpen(bool)
    }

    return (

        <motion.div

            transition={{ duration: .2 }}
            className="w-full flex justify-center pointer-events-auto mb-20">
            <div
                className=" flex flex-col items-start justify-end  w-3/4 sm:w-1/2 max-w-lg max-h-lg h-full"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div
                    ref={ref}
                    className=' overflow-hidden rounded-2xl cursor-pointer flex justify-center items-center w-full h-full'
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >


                    <Image ref={scope} src={src} width={2000} height={2000} alt='project image' onClick={() => toggleModal(true)} />
                    <svg

                        className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72">
                        <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
                        <path className="fill-indigo-500 drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
                    </svg>
                </div>
                <motion.div

                    animate={inView ? { opacity: 1, translateX: 0 } : { opacity: 0, translateX: -100 }}
                    transition={{ ease: 'linear', duration: .5 }}
                    className='bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-2xl p-4 flex flex-col -mt-6 sm:-mt-10 w-full'
                >
                    <div className='flex justify-between sm:mb-2 '>
                        <span className='text-white text-sm text-start w-full'>{name}</span>
                        <div className='flex justify-center gap-2'>
                            <div className='text-[7px] text-white outline outline-1 outline-white rounded-full  p-0 px-1  flex justify-center items-center'>{platform}</div>
                            <div className='text-[7px] text-gray-800 rounded-full  p-0 px-1 bg-white flex justify-center items-center'>{type}</div>
                        </div>
                    </div>
                    <span className='hidden sm:flex text-gray-400 text-xs'>{desc}</span>

                </motion.div>
            </div>
            <VideoModal isOpen={isModalOpen} toggleModal={toggleModal} src={link} />
        </motion.div >

    )
}

export default Card