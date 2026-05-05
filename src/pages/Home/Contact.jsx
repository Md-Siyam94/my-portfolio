"use client"
import Image from 'next/image'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import ContactMe from '../../../public/contact.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "motion/react"

export default function Contact() {
    return (
        <div className='max-w-7xl mx-auto px-4 pt-16 pb-24 gap-5   grid lg:grid-cols-2 grid-cols-1 items-center'>
            <div className='col-span-1 text-center lg:text-start'>
                <motion.h2 
                 initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.15,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    viewport={{once: true}}
                className='text-warning font-semibold'>How can I help you?</motion.h2>
                <motion.h1 
                  initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    viewport={{once: true}}
                className='lg:text-6xl md:text-4xl text-3xl font-semibold mb-4 mt-2'>Get In <span className='text-warning'>Touch</span></motion.h1>
                <motion.p   initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.25,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    viewport={{once: true}} className='opacity-80 md:w-2/3 lg:w-full mx-auto '>I have here to help and answer any question you might have. I look forward to hearing from you!</motion.p>
                <motion.div
                 initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    viewport={{once: true}}>
                    <div className='flex gap-4 justify-center lg:justify-start mt-4   mb-2 items-center'>
                    <IoLocationOutline />
                    <p className='opacity-80'>Jhalokathi, Barishal, Bangladesh</p>
                </div>
                <div className='flex gap-4 justify-center lg:justify-start items-center mb-3'>
                    <MdOutlineEmail className='text-lg'/>
                    <p className='opacity-80'>siyam942404@gmail.com</p>
                </div>
                <div className='flex gap-4 justify-center lg:justify-start items-center'>
                    <FaWhatsapp />
                    <p className='opacity-80'>+880 1789478967</p>
                </div>
                </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }} // small + invisible
        whileInView={{ scale: 1, opacity: 1 }}   // normal size
        transition={{ duration: 0.7,delay: 0.15, ease: "easeOut" }}
        viewport={{once: true}}
            className='col-span-1  '>
                <Image className=' w-full relative object-cover' src={ContactMe} alt='contact' />

            </motion.div>
        </div>
    )
}
