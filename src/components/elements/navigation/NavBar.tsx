"use client"
import React, { useState } from 'react'
import Title from '../Title'
import Hamburger from 'hamburger-react'
import DrawerMenu from './DrawerMenu'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const items = ["Home", "About", "Projects", "Contact"]

    function changeVisible(isDrawerClosed: boolean) {
        return setIsOpen(isDrawerClosed)
    }
    return (
        <nav className='flex justify-between items-center font-poppins font-bold text-xl mt-10 mx-10'>

            <Title size={'sm'} delay={2.5} />
            <ul className='hidden self-center md:flex md:gap-12 md:items-center'>
                {items.map((item: string, i: number) => (
                    <span key={i} className="text-white font-bold font-poppins">{item}</span>
                ))}
            </ul>
            <div className='absolute right-10 md:hidden z-20'>
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            </div>
            <DrawerMenu isVisible={isOpen} changeVisible={changeVisible} />
        </nav>
    )
}

export default NavBar