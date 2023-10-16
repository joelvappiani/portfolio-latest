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
    const pa = (100 - positionX) + (100 - positionY);
    const lp = (100 + (positionX - 100) / 1.5);
    const tp = (100 + (positionY - 100) / 1.5);
    const pxSpark = (100 + (positionX - 100) / 7);
    const pySpark = (100 + (positionY - 100) / 7);
    const pOpacity = 20 + (Math.abs(pa) * 1.5);
    const ty = ((tp - 100) / 2) * -1;
    const tx = ((lp - 100) / 1.5) * .5;

    return (
        <div className='relative top-20 left-96 w-[21em] h-[30em]'>
            <div className={`card-after ${hovered && "active"} absolute top-0 left-0 righ-0 bottom-0 h-full w-full pointer-events-none`} style={{ backgroundPosition: `${pxSpark}% ${pySpark}%`, opacity: `${pOpacity / 100}`, transform: `rotateX(${ty}deg) rotateY(${tx}deg)` }} />
            <div
                ref={ref}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => handleMouseLeave()}
                className={`card ${hovered && "active"} ${style.card} absolute top-0 left-0 righ-0 bottom-0  h-full w-full`}
                style={{ backgroundImage: `url('https://assets.codepen.io/13471/charizard-gx.webp')`, transform: `rotateX(${ty}deg) rotateY(${tx}deg)` }}
            />
            <div className={`card-before ${hovered ? "active" : "opacity-0"} absolute top-0 left-0 righ-0 bottom-0 pointer-events-none  h-full w-full`} style={{ backgroundPosition: `${lp}% ${tp}%`, transform: `rotateX(${ty}deg) rotateY(${tx}deg)` }} />

        </div>
    )
}

export default TechLogo