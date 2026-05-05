'use client'
import Image from 'next/image'
import React from 'react'
import PortfolioImage from '../../../public/WhatsApp_Image_2025-06-29_at_00.45.34_b5bd039c-removebg-preview.png'
import social1 from '../../../public/linkedin.png'
import social2 from '../../../public/facebook.png'
import social3 from '../../../public/github.png'
import Link from 'next/link'
import { ReactTyped } from 'react-typed'
import { motion } from "motion/react"
import HeroShape from '../../../public/hero-shape-5.png'

export default function Hero() {

    return (
        <div className='grid lg:grid-cols-5 grid-cols-1 items-center  lg:gap-10 py-20  bg-linear-20 from-black/80 to-gray-800 lg:px-24 mx-auto px-4 lg:h-[calc(100vh-15vh)] '>
            <div className='col-span-3 '>

                <motion.h2
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    className='lg:text-3xl text-xl font-semibold my-3'>Hey, I am Siyam</motion.h2>
                <motion.div initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.25,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}>
                    <ReactTyped
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0.25, 0.8, 0.25, 1],
                        }}
                        className='lg:text-6xl md:text-5xl text-3xl font-semibold '
                        backSpeed={90}
                        loop={true}
                        onBegin={function noRefCheck() { }}
                        onComplete={function noRefCheck() { }}
                        onDestroy={function noRefCheck() { }}
                        onLastStringBackspaced={function noRefCheck() { }}
                        onReset={function noRefCheck() { }}
                        onStart={function noRefCheck() { }}
                        onStop={function noRefCheck() { }}
                        onStringTyped={function noRefCheck() { }}
                        onTypingPaused={function noRefCheck() { }}
                        onTypingResumed={function noRefCheck() { }}
                        strings={[
                            `<span class='text-warning'>MERN</span> Stack Developer`,
                            `<span class='text-warning'>Full</span> Stack Developer`,
                            `<span class='text-warning'>Front</span> End Developer`,
                            `<span class='text-warning'>Back</span> End Developer`,
                        ]}
                        typeSpeed={90}
                        typedRef={function noRefCheck() { }}
                    />

                </motion.div>
                <motion.p
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    className='opacity-60 mt-4 md:w-3/4 lg:w-full '>Currently, I am working with Tailwind CSS, JavaScript, React, and other
                    modern web technologies to build dynamic and responsive web applications.</motion.p>
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.35,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    className='my-6 flex items-center gap-5'>
                    <Link href={'https://www.linkedin.com/in/md-siyam-d942404'} target="_blank" rel="noopener noreferrer"><Image className='lg:h-12 h-9 lg:w-12 w-9 cursor-pointer' src={social1} alt='linkedin' /></Link>
                    <Link href={'https://github.com/Md-Siyam94/'} target="_blank" rel="noopener noreferrer"><Image className='lg:h-16 lg:w-16 h-12 w-12 cursor-pointer' src={social3} alt='github' /></Link>
                    <Link href={'https://www.facebook.com/profile.php?id=100049223240013'} target="_blank" rel="noopener noreferrer"><Image className='lg:h-12 h-9 lg:w-12 w-9 cursor-pointer' src={social2} alt='facebook' /></Link>
                </motion.div>
            </div>
            <div className='col-span-2 relative grid lg:justify-end justify-center mt-7 lg:mt-0'>
                <motion.div
                className='hidden lg:block'
                    animate={{ y: ["-50px", "50px"] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                >
                    <Image className='absolute -ml-12 h-24 w-24' src={HeroShape} alt='shape' />
                </motion.div>
                <Image className='lg:h-72 lg:w-72 h-52 w-52 lg:ml-20  pb-5  object-cover bg-[radial-gradient(circle,rgba(192,38,211,0.8)_0%,rgba(192,38,211,0)_70%)] ' src={PortfolioImage} alt='Portfolio image' />
            </div>
        </div>
    )
}
