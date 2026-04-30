import Image from 'next/image'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import ContactMe from '../../../public/contact.jpg'
import { IoLocationOutline } from "react-icons/io5";


export default function Contact() {
    return (
        <div className='max-w-7xl mx-auto px-4 pt-16 pb-24 gap-5   grid lg:grid-cols-2 grid-cols-1 items-center'>
            <div className='col-span-1 text-center lg:text-start'>
                <h2 className='text-warning font-semibold'>How can I help you?</h2>
                <h1 className='lg:text-6xl md:text-4xl text-3xl font-semibold mb-4 mt-2'>Get In <span className='text-warning'>Touch</span></h1>
                <p className='opacity-80'>I have here to help and answer any question you might have. I look forward to hearing from you!</p>
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
            </div>
            <div className='col-span-1 '>
                <Image className=' w-full relative object-cover' src={ContactMe} alt='contact' />

            </div>
        </div>
    )
}
