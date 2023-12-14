//Component not used


"use client"

import React, { useState, useCallback, MouseEvent } from 'react'

const TechLogo = (): JSX.Element => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    function throttle<T extends (...args: any[]) => any>(
        func: T,
        delay: number
    ): (...args: Parameters<T>) => void {
        let lastCall = 0;
        return (...args: Parameters<T>) => {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return func(...args);
        };
    }
    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            setHovered(true)
            const card = e.currentTarget;
            card.classList.add('active')
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 7;
            const rotateY = (centerX - x) / 7;
            setRotate({ x: rotateX, y: rotateY });
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setHovered(false)
        setRotate({ x: 0, y: 0 });
    };



    return (
        <div className='relative w-[21em] h-[30em]'>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    pointerEvents: 'none',
                    backgroundImage: "url(https://assets.codepen.io/13471/sparkles.gif),url(https://assets.codepen.io/13471/holo.png),linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%)",
                    backgroundSize: "160%",
                    backgroundPosition: `${(50 + (rotate.x - 50) / 1.5)}% ${(50 + (rotate.y - 50) / 1.5)}%`,
                    backgroundBlendMode: "overlay",
                    zIndex: 4,
                    filter: !hovered ? "brightness(O.5) contrast(1)" : "brightness(1) contrast(1)",
                    mixBlendMode: "color-dodge",
                    borderRadius: '5% / 3.5%',
                    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                    transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s"
                }} />
            <div
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    zIndex: 1,
                    borderRadius: "5% / 3.5%",
                    willChange: "transform, filter",
                    backgroundSize: "110%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50% 50%",
                    transformOrigin: "center",
                    width: "21em",
                    height: "30em",
                    backgroundImage: "url('https://assets.codepen.io/13471/charizard-gx.webp')",
                    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                    transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                    boxShadow: '-20px -20px 30px -25px var(--color1),20px 20px 30px -25px var(--color2),-7px -7px 10px -5px var(--color1),7px 7px 10px -5px var(--color2),0 0 13px 4px rgba(255, 255, 255, 0.3),0 55px 35px -20px rgba(0, 0, 0, 0.5)',

                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    pointerEvents: "none",
                    borderRadius: "5% / 3.5%",
                    backgroundSize: "300% 100%",
                    backgroundImage: "linear-gradient(115deg,transparent 0%,#fac 25%,transparent 47%,transparent 53%,#ddccaa 75%,transparent 100%)",
                    opacity: 1,
                    backgroundPosition: `${((120 - rotate.x) / 1.5)}% ${(50 + (rotate.y) / 1.5)}%`,
                    filter: "brightness(.5) contrast(1)",
                    zIndex: 2,
                    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                    transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                    backgroundRepeat: "no-repeat",
                    mixBlendMode: "color-dodge",
                }}
            />

        </div>
    )
}

export default TechLogo