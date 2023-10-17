"use client"
import React, { useEffect, useState, useRef } from 'react'
import style from '../../styles/card.module.css'


const TechLogo = () => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [dimentions, setDimentions] = useState({ width: 0, height: 0 })
    const [cursorX, setCursorX] = useState(0)
    const [cursorY, setCursorY] = useState(0)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log(hovered)

        ref.current && setDimentions({ width: ref.current?.clientWidth, height: ref.current?.clientHeight })
        const moveCursor = (e: any) => {
            if (hovered) {
                setCursorX(e.clientX)
                setCursorY(e.clientY)
            }
        };
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [hovered])

    function handleMouseLeave() {

        setCursorX(0)
        setCursorY(0)
    }


    const positionX = Math.abs(Math.floor(100 / dimentions.width * Number(cursorX)) - 100);
    const positionY = Math.abs(Math.floor(100 / dimentions.height * Number(cursorY)) - 100);
    console.log(positionX, positionY)
    //math for gradient
    const pa = (50 - positionX) + (50 - positionY);
    const lp = (50 + (positionX - 50) / 1.5);
    const tp = (50 + (positionY - 50) / 1.5);
    const pxSpark = (50 + (positionX - 50) / 7);
    const pySpark = (50 + (positionY - 50) / 7);
    const pOpacity = 20 + (Math.abs(pa) * 1.5);
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5);

    return (
        <div className='relative w-[21em] h-[30em]'>
            <div className={`card-after ${hovered && "active"} absolute top-0 left-0 bottom-0 right-0 pointer-events-none`} style={{ backgroundPosition: `${pxSpark}% ${pySpark}%`, opacity: `${pOpacity / 100}`, transform: `rotateX(${ty}deg) rotateY(${tx}deg)` }} />
            <div
                ref={ref}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => handleMouseLeave()}
                className={`card ${hovered ? "active" : ''} ${style.card} absolute top-0 left-0 right-0 bottom-0 w-[21em] h-[30em]`}
                style={{ backgroundImage: `url('https://assets.codepen.io/13471/charizard-gx.webp')`, transform: `rotateX(${ty}deg) rotateY(${tx}deg)` }}
            />
            <div className={`card-before ${hovered ? "active" : "opacity-0"} absolute top-0 left-0 right-0 bottom-0 pointer-events-none w-[21em] h-[30em]`} style={{ backgroundPosition: `${lp}% ${tp}%`, transform: `rotateX(${ty}deg) rotateY(${tx}deg)` }} />

        </div>
    )
}

export default TechLogo