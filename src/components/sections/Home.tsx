'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { loadFull } from 'tsparticles';
import { IOptions, RecursivePartial, tsParticles } from 'tsparticles-engine';
import Particles from 'react-tsparticles'
import NavBar from '../elements/navigation/NavBar';
import Avatar from '../elements/banner/Avatar';
import Introducing from '../elements/banner/Introducing';
import CustomCursor from '../elements/CustomCursor'

const Home = () => {
    loadFull(tsParticles)
    const particlesConfig: RecursivePartial<IOptions> = {
        fullScreen: {
            enable: true,
            zIndex: 0
        },
        particles: {
            number: {
                value: 200,
                limit: 300,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#000000"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ffffff"
                },
                polygon: {
                    nb_sides: 2
                },
                image: {
                    src: "images/github.svg",
                    width: 50,
                    height: 50
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.5,
                    sync: false
                }
            },
            size: {
                value: 20,
                random: true,
                anim: {
                    enable: true,
                    speed: 10,
                    size_min: 10,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 100,
                color: "#ffffff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 50,
                        smooth: 10
                    }
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 500,
                    lineLinked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 100,
                    size: 100,
                    duration: 2,
                    opacity: 1,
                    speed: 2
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        backgroundMask: {
            enable: true,
            cover: {
                value: {
                    r: 0,
                    g: 0,
                    b: 0
                }
            }
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
            image: "linear-gradient(126deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
        }
    }
    return (
        <div id='Home' className=' w-screen h-screen pointer-events-none opacity-1 flex'>
            <Particles options={particlesConfig} />
            <NavBar />
            <div className='z-10 mt-20 w-screen h-screen flex flex-col md:flex-row-reverse justify-around items-center pointer-events-none' >
                <div className='h-full flex justify-center items-center '>

                    <Avatar />
                </div>
                <Introducing />
            </div>
            <CustomCursor />
        </div>

    )
}

export default Home