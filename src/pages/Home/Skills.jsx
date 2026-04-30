'use client'
import ExpretnessCard from '@/components/ExpretnessCard'
import React, { useEffect, useState } from 'react'

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
                <h1 className='lg:text-6xl md:text-5xl text-3xl font-semibold'>My <span className='text-warning'>Soft</span> Expertness</h1>
                <p className='opacity-80 mt-4'>With a strong foundation in web development, I specialize in the MERN stack (MongoDB, Express.js, React.js, and Node.js)</p>
            </div>
            <div className='col-span-3  h-[330px] overflow-y-scroll grid md:grid-cols-4 gap-6 p-5 items-center grid-cols-3 ' >
                {
                    expertness.map((skill, index)=> <ExpretnessCard key={index} skill={skill}></ExpretnessCard> )
                }
            </div>
        </div>
    )
}
