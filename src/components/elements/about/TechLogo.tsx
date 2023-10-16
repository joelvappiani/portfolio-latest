"use client"
import React, { MouseEvent, useEffect, useState } from 'react'
import style from '../../../styles/card.module.css'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { LogoProps } from '@/types/Logo'

const TechLogo = ({ src }: LogoProps) => {

    // const [scope, animate] = useAnimate()
    const [hovered, setHovered] = useState<boolean>(false)
    const [cursorX, setCursorX] = useState(0)
    const [cursorY, setCursorY] = useState(0)
    console.log(cursorX, cursorY)
    useEffect(() => {

        const moveCursor = (e: any) => {
            setCursorX(e.clientX)
            setCursorY(e.clientY)
        };
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])
    // useEffect(() => {

    //     const moveCursor = (e: MouseEvent) => {
    //         cursorX.set(e.clientX - 16)
    //         cursorY.set(e.clientY - 16)
    //     };
    //     window.addEventListener('mousemove', moveCursor)

    //     return
    //     if (hovered) {
    //         animateIcon()



    //     } else {
    //         stopAnimateIcon()
    //         window.removeEventListener('mousemove', moveCursor)

    //     }
    //     //     $card.removeClass("animated");
    //     //     $card.attr("style", tf);
    //     //     $style.html(style);
    //     // hovered ? animateIcon() : stopAnimateIcon()
    // }, [hovered])

    // async function animateIcon() {
    //     await animate(scope.current, { scale: 2 }, { ease: "easeInOut", duration: .2 })
    //     document.querySelectorAll('.card').forEach((card: Element) => {


    //     })
    // }
    // async function stopAnimateIcon() {
    //     await animate(scope.current, { scale: 1 }, { ease: "easeInOut", duration: .2 })

    // }
    const width = 50
    const height = 50

    const positionX = Math.abs(Math.floor(100 / width * Number(cursorX)) - 100);
    const positionY = Math.abs(Math.floor(100 / height * Number(cursorY)) - 100);

    //math for gradient
    const pa = (50 - positionX) + (50 - positionY);
    const lp = (50 + (positionX - 50) / 1.5);
    const tp = (50 + (positionY - 50) / 1.5);
    const pxSpark = (50 + (positionX - 50) / 7);
    const pySpark = (50 + (positionY - 50) / 7);
    const pOpacity = 20 + (Math.abs(pa) * 1.5);
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * .5;

    return (
        <div className='flex flex-col items-center'>
            <div className='card-before animated' style={{ backgroundPosition: `${lp}% ${tp}%` }}></div>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`card animated ${style.card} w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] xl:w-[100px] xl:h-[100px]`}
                style={{ backgroundImage: `url('/images/icons/icon-3d-${src}.png')`, transform: `rotateX(${ty}deg) rotateY(${tx}deg)` }}
            />
            <div className='card-after animated' style={{ backgroundPosition: `${pxSpark}% ${pySpark}%`, opacity: `${pOpacity / 100}` }}></div>
            <span className='font-thin text-xs text-gray-800'>{src.slice(0, 1).toUpperCase() + src.slice(1).toLowerCase()}</span>
        </div>
    )
}

export default TechLogo