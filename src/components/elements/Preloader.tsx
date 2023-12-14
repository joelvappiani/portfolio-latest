'use client'
import React, { useEffect } from 'react'
import style from '@/styles/loader.module.css'
import { useAnimate } from 'framer-motion'
import Title from './banner/Title'

const Preloader = (): JSX.Element => {
    const [scope, animate] = useAnimate()
    useEffect(() => {
        preloaderAnimation()
    }, [])
    async function preloaderAnimation() {
        await animate(scope.current, { translateX: "100%" }, { delay: 2.2, duration: 0.8 })
        animate(scope.current, { display: "none" });
    }
    return (
        <div
            ref={scope}
            className='absolute top-0 z-50 w-screen h-screen bg-black flex justify-center items-center' >
            <div className='w-fit flex flex-col justify-center items-center'>

                <Title size='sm' delay={0} />
                <span className={style.loader} />
            </div>
        </div>
    )
}

export default Preloader