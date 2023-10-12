'use client'
import React, { useEffect } from 'react'
import { useAnimate, stagger } from 'framer-motion'
import { DrawerProps } from '@/types/Drawer'

const DrawerMenu = ({ isVisible, changeVisible }: DrawerProps) => {
    const items = ["Home", "About", "Projects", "Contact"]
    const [scope, animate] = useAnimate()
    useEffect(() => {
        isVisible ? openDrawerAnimation() : closeDrawerAnimation()

    }, [isVisible])
    console.log(isVisible)
    async function openDrawerAnimation() {

        animate(scope.current, { display: "flex" })
        await animate(scope.current, { opacity: 1 }, { ease: 'easeInOut', duration: .2 })
        await animate('ul', { width: '40%' }, { ease: "linear", duration: .3 })
        animate('li', { opacity: 1, x: -10 }, { duration: 0.1, delay: stagger(0.15) })
        // await animate(scope?.current, { borderRadius: 0 }, { ease: "linear" })
    }
    async function closeDrawerAnimation() {
        await animate('li', { opacity: 0, x: 10 }, { duration: 0.1, delay: stagger(0.15, { from: 'last' }) })
        await animate("ul", { width: 0 }, { ease: "linear", duration: .3 })
        await animate(scope.current, { opacity: 0 }, { ease: 'easeInOut', duration: .2 })
        animate(scope.current, { display: "none" })
    }

    return (
        <div
            ref={scope}
            onClick={() => changeVisible(false)}
            className='absolute top-0 left-0 bg-black bg-opacity-30 w-full h-full z-0'>

            <ul
                className={'absolute z-10 top-0 right-0 h-screen w-0 bg-black bg-opacity-70  gap-10 flex flex-col justify-start items-end pr-10 pt-32 '}>
                {items.map((item: string, i: number) => (
                    <li key={i} className="opacity-0 translate-x-[10px] text-white font-bold font-poppins">{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default DrawerMenu