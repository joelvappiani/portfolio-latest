import React from 'react'
import Card from './Card';
import { CardProps } from '@/types/Card';
import { allProjects } from '@/app/allProjects';

import Carousel from 'nuka-carousel'

type CarouselProps = {
    filterValue: string;
}
const ProjectsScrollCarousel = ({ filterValue }: CarouselProps) => {

    const filterByType = (filterValue: string, listToFilter: CardProps[]): CardProps[] => {
        if (filterValue === 'all') return listToFilter
        return listToFilter.filter((card: CardProps) => card.type === filterValue)
    }
    return (

        <div className='absolute top-0 w-11/12 h-screen min-h-[1000px] flex flex-col justify-center'>

            <Carousel
                autoplay
                dragging
                swiping
                defaultControlsConfig={{
                    nextButtonText: '>',
                    nextButtonStyle: {
                        borderRadius: '50%',
                        height: 30,
                        width: 30,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(31 41 55)'
                    },
                    prevButtonText: '<',
                    prevButtonStyle: {
                        borderRadius: '50%',
                        height: 30,
                        width: 30,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(31 41 55)'
                    },
                    pagingDotsStyle: {
                        fill: 'white',
                        marginLeft: 5,
                        marginRight: 5,
                        paddingTop: 50,
                        paddingBottom: 30
                    }

                }}
                className='mt-20'
                wrapAround
                pauseOnHover


            >

                {filterByType(filterValue, allProjects).map((card: CardProps, i: number) => (
                    <Card key={i} {...card} />
                ))}
            </Carousel>

        </div>

    );
};


export default ProjectsScrollCarousel