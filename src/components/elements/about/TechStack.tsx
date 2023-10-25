import React, { useEffect, useState } from 'react'
import { useAnimate, useInView, stagger } from 'framer-motion'
import { motion } from 'framer-motion'
import TechLogo from '../TechLogo'

const TechStack = () => {
    const [scope, animate] = useAnimate()
    const [logoHovered, setLogoHovered] = useState<string | undefined>(undefined)
    const isInView = useInView(scope)
    const logoListFrontend = [['html', "Web content structure language"], ['css', 'Styling language'], ['javascript', 'Web development programming language'], ['react', 'Frontend library'], ['redux', 'Global state management library'], ['nextjs', 'SSR Frontend frameword'], ['typescript', 'Strong typing javascript superset'], ['tailwind', 'Utility-first CSS Framework'], ['framer-motion', 'React animations library'], ['expo', 'Open source mobile development platform']]
    const logoListBackend = [['javascript', 'Web dev programming language'], ['nodejs', 'JS server-side runtime environment'], ['expressjs', 'Backend minimal node.js framework'], ['mongodb', 'NoSQL Database'], ['typescript', 'Strong typing javascript superset'], ['nestjs', 'Progressive Node.js framework for efficient server-side applications'], ['socket.io', 'JS real-time communication library'], ['passportjs', 'Authentication nodejs middleware'], ['jwt', 'Secure authentication & authorization'], ['docker', 'Container platform']]

    useEffect(() => {
        isInView && animateLogos()
    }, [isInView])


    async function animateLogos() {
        await animate('.tech-logo', { scale: [0, 0.2, 1], y: [0, -100, 0] }, { delay: stagger(.02), duration: .8 })
        // animate(".floating-text", { opacity: [0, 1, 0], x: [-80, 0, 80] }, { duration: 1, delay: stagger(.05), ease: 'linear' })
    }


    return (
        <div ref={scope} className='w-11/12 sm:w-1/2 lg:w-1/4'>


            <h2 className='pointer-events-none text-transparent bg-clip-text blur-sm bg-gradient-to-r from-orange to-transparent uppercase font-bold text-8xl'>Front</h2>

            <div className='relative -top-10 flex gap-4 flex-wrap justify-center'>
                {logoListFrontend.map((src: string[], i: number) => (
                    <motion.div
                        whileHover={{ scale: 2 }}
                        key={i} style={logoHovered === src[0] ? { zIndex: 50 } : { zIndex: 10 }} onMouseOver={() => setLogoHovered(src[0])}>
                        <TechLogo src={src} from='techstack' size={100} />
                    </motion.div>
                ))}
            </div>

            <h2 className='pointer-events-none text-transparent bg-clip-text blur-sm bg-gradient-to-r from-orange to-transparent uppercase font-bold text-8xl'>Back</h2>

            <div className='relative -top-10 flex gap-4 flex-wrap  justify-center'>
                {logoListBackend.map((src: string[], i: number) => (
                    <motion.div
                        whileHover={{ scale: 2 }}
                        key={i} style={logoHovered === src[0] ? { zIndex: 50 } : { zIndex: 10 }} onMouseOver={() => setLogoHovered(src[0])}>
                        <TechLogo src={src} from='techstack' size={100} />
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default TechStack