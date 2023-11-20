'use client'
import React, { useEffect, useCallback, useState } from 'react'
import { useAnimate, stagger } from 'framer-motion'
import { loadFull } from 'tsparticles';
import { Engine, IOptions, RecursivePartial, tsParticles, Container } from 'tsparticles-engine';
import Particles from 'react-tsparticles'
import NavBar from '../elements/navigation/NavBar';
import Avatar from '../elements/banner/Avatar';
import Introducing from '../elements/banner/Introducing';
import CustomCursor from '../elements/CustomCursor'
import FloatingLogo from '../elements/banner/FloatingLogo';


const Home = () => {
    const [scope, animate] = useAnimate()
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [isLow, setIsLow] = useState<boolean>(false)
    useEffect(() => {
        console.log(isMobile)
        window.innerWidth <= 900 && setIsMobile(true)
        window.innerHeight <= 900 && setIsLow(true)
        animateFloatingLogos()

    }, [isMobile])

    async function animateFloatingLogos() {
        await new Promise(resolve => setTimeout(() => resolve('start floating logos animation'), 4000))
        animate('li', { opacity: 1 }, { delay: stagger(0.7) })
    }

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);


    const particlesConfig: RecursivePartial<IOptions> = {
        fullScreen: {
            enable: true,
            zIndex: 0
        },
        particles: {
            number: {
                value: 100,
                limit: 200,
                density: {
                    enable: true,
                    value_area: 100
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
                    nb_sides: 3
                },
                image: {
                    src: "images/github.svg",
                    width: 30,
                    height: 30
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
                value: 15,
                random: true,
                anim: {
                    enable: true,
                    speed: 5,
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
                    distance: 150,
                    size: 150,
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

    const smallParticlesConfig: RecursivePartial<IOptions> = {
        fullScreen: {
            enable: true,
            zIndex: 0
        },
        particles: {
            number: {
                value: 50,
                limit: 100,
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

    const logoList = ['javascript', 'mongodb', 'expressjs', 'tailwind', 'react', "nestjs", 'nextjs', 'typescript']
    return (
        <div id='Home' className=' w-screen h-screen pointer-events-none opacity-1 flex overflow-hidden'>
            {isMobile ? <Particles options={smallParticlesConfig} init={particlesInit} loaded={particlesLoaded} />
                : <Particles options={particlesConfig} init={particlesInit} loaded={particlesLoaded} />}
            <NavBar />
            <Avatar isLow={isLow} />
            <Introducing isLow={isLow} />
            <CustomCursor />
            <ul
                ref={scope}
                className='absolute top-0 left-0 w-screen h-screen overflow-hidden'>

                {logoList.map((src: string, i: number) => (
                    <li key={i} className='opacity-0'><FloatingLogo src={src} /></li>
                ))}
            </ul>
        </div>

    )
}

export default Home