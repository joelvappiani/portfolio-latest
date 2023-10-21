import { FilterProps } from '@/types/Card'
import React, { useState, useEffect } from 'react'
import { useAnimate } from 'framer-motion'

const FilterMenu = ({ handleFilter }: FilterProps) => {
    const [scope, animate] = useAnimate()


    useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000))
            getAndSetWidthAndPosition('all')
        })()
    }, [])

    //gets the width and leftOffset of the button passed in argument 
    const getAndSetWidthAndPosition = (button: string): void => {
        handleFilter(button)
        const buttonDOMInfos = document.querySelector(`#${button}`)?.getBoundingClientRect()
        buttonDOMInfos && animate(scope.current, { width: buttonDOMInfos.width + 10, left: buttonDOMInfos.left - 5 })
    }


    return (
        <div className='pointer-events-auto'>

            <div
                ref={scope}
                className='absolute bg-gradient-to-br from-purple to-blue-600 bottom-[4.4rem] h-[28px] -z-10 rounded-full'
            />
            <div className='absolute bottom-16 left-24 flex gap-4 outline outline-1 px-4 py-2 rounded-full'>
                <button id='all' onClick={(e) => getAndSetWidthAndPosition((e.target as HTMLButtonElement).id)}>All</button>
                <button id='pro' onClick={(e) => getAndSetWidthAndPosition((e.target as HTMLButtonElement).id)}>Pro Projects</button>
                <button id='side' onClick={(e) => getAndSetWidthAndPosition((e.target as HTMLButtonElement).id)}>Side Projects</button>
            </div>
        </div>
    )
}

export default FilterMenu