"use client"

import React, { useState, useEffect } from 'react'
import { motion, useAnimate, stagger } from 'framer-motion'
import Title from '../banner/Title'
import Hamburger from 'hamburger-react'
import DrawerMenu from './DrawerMenu'

const NavBar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [scope, animate] = useAnimate()
    const items = ["Home", "About", "Projects", "Contact"]
    useEffect(() => {
        animateNavItems()
    }, [])

    async function animateNavItems() {
        await new Promise(resolve => setTimeout(() => resolve('animate nav'), 3000))
        animate('li', { opacity: 1, x: -10 }, { delay: stagger(0.2) })
    }
    function changeVisible(isDrawerClosed: boolean) {
        return setIsOpen(isDrawerClosed)
    }
    function scrollIntoView(item: string) {

        let e = document.getElementById(item);
        !!e && e.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    }

    return (
        <nav className='fixed z-40 top-0 left-0 w-screen flex justify-between items-center font-poppins font-bold text-xl py-10 px-10 pointer-events-auto'>

            <Title size={'sm'} delay={2.4} />
            <ul ref={scope} className='hidden self-center md:flex md:gap-12 md:items-center'>
                {items.map((item: string, i: number) => (

                    <motion.li
                        whileHover={{ translateX: 15, listStyleType: 'disc', transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.9 }}
                        key={i}
                        className="text-orange font-bold font-poppins opacity-0 hover:cursor-pointer drop-shadow-md"
                        onClick={() => scrollIntoView(item)}
                    ><span className='text-white'>{item}</span></motion.li>

                ))}
            </ul>
            <div className='absolute right-10 z-20'>
                <div className=' md:hidden drop-shadow-md'>
                    <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
                </div>
            </div>
            <DrawerMenu isVisible={isOpen} changeVisible={changeVisible} />
        </nav>
    )
}

export default NavBar