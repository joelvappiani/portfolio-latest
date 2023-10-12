'use client'
import React, { useEffect } from 'react'
import { useAnimate } from 'framer-motion'
import { TitleProps } from '@/types/Title'

const Title = ({ size, delay }: TitleProps) => {
    const [scope, animate] = useAnimate()
    useEffect(() => {
        letterAnimation()
    }, [])
    async function letterAnimation() {
        await animate(scope.current, { borderColor: 'rgb(147 51 234)' }, { duration: .3, delay })
        animate(scope.current, { width: 40 }, { duration: .5, delay: .2 });
    }
    if (size === 'sm') {
        return (
            <div className='w-[150px] flex justify-center'>
                <h1 className='flex justify-center items-center font-poppins font-[600] text-2xl'>
                    <div ref={scope} className=' w-5 h-[18px] border-white border-[4px] mx-[1px] rounded-r-[30px]' />JOVAP</h1>
            </div>
        )
    } else {
        return (
            <div>Big title</div>
        )
    }
}

export default Title