'use client'
import ExpretnessCard from '@/components/ExpretnessCard'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
export default function Skills() {
    const [expertness, setExpertness] = useState([])
    useEffect(() => {
        fetch('expertness.json')
            .then(res => res.json())
            .then(data => {
                setExpertness(data)
            })
    }, [])
    return (
        <div className='max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-5 grid-cols-1 items-center '>
            <div className='col-span-2 text-center lg:text-start'>
                <motion.h1 
                initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.15,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    viewport={{once: true}}
                className='lg:text-6xl md:text-5xl text-3xl font-semibold'>My <span className='text-warning'>Soft</span> Expertness</motion.h1>
                <motion.p
                initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    viewport={{once: true}}
                className='opacity-80 mt-4'>With a strong foundation in web development, I specialize in the MERN stack (MongoDB, Express.js, React.js, and Node.js)</motion.p>
            </div>
            <div className='col-span-3  h-[330px] overflow-y-scroll grid md:grid-cols-4 gap-6 p-5 items-center grid-cols-3 ' >
                {
                    expertness.map((skill, index)=> <ExpretnessCard key={index} skill={skill}></ExpretnessCard> )
                }
            </div>
        </div>
    )
}
