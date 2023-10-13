'use client'
import React, { useEffect } from 'react'
import { motion, useAnimate, stagger } from 'framer-motion'
import { DrawerProps } from '@/types/Drawer'
import Link from 'next/link'

const DrawerMenu = ({ isVisible, changeVisible }: DrawerProps) => {
    const items = ["Home", "About", "Projects", "Contact"]
    const [scope, animate] = useAnimate()

    useEffect(() => {
        isVisible ? openDrawerAnimation() : closeDrawerAnimation()
    }, [isVisible])

    async function openDrawerAnimation() {
        animate(scope.current, { display: "flex" })
        await animate(scope.current, { opacity: 1 }, { ease: 'easeInOut', duration: .2 })
        await animate('ul', { width: 200 }, { ease: "linear", duration: .3 })
        animate('li', { opacity: 1, x: -10 }, { duration: 0.1, delay: stagger(0.15) })
    }

    async function closeDrawerAnimation() {
        await animate('li', { opacity: 0, x: 10 }, { duration: 0.1, delay: stagger(0.15, { from: 'last' }) })
        await animate("ul", { width: 0 }, { ease: "linear", duration: .3 })
        await animate(scope.current, { opacity: 0 }, { ease: 'easeInOut', duration: .2 })
        animate(scope.current, { display: "none" })
    }
    function scrollIntoView(item: string) {

        let e = document.getElementById(item);
        !!e && e.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
        changeVisible(false)
    }

    return (
        <nav
            ref={scope}
            onClick={() => changeVisible(false)}
            className='fixed top-0 left-0 bg-black bg-opacity-20 w-full h-full z-0'>
            <ul
                className={'absolute z-10 top-0 right-0 h-screen w-0 bg-black bg-opacity-50 backdrop-blur-md gap-10 flex flex-col justify-start items-end pr-10 pt-32 '}>
                {items.map((item: string, i: number) => (
                    <motion.li
                        whileHover={{ translateX: -10, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.9 }}
                        key={i}
                        className="opacity-0 translate-x-[10px] text-white font-bold font-poppins hover:cursor-pointer drop-shadow-md"
                        onClick={() => scrollIntoView(item)}>
                        {item}</motion.li>
                ))}
            </ul>
        </nav>
    )
}

export default DrawerMenu