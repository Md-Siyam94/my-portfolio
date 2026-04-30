'use client'
import React from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination,  FreeMode } from 'swiper/modules';

export default function About() {
  return (
    <div className='max-w-7xl mx-auto px-4 lg:pt-10 pb-24'>
         <Swiper
        slidesPerView={2}
         centeredSlides={true}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0:{
            centeredSlides: false,
            slidesPerView: 1,
            
          },
          767:{
            centeredSlides: false,
            slidesPerView: 1,
          },
          768: {
            centeredSlides: true,
            slidesPerView: 2,
          }
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper h-96  p-4"
      >
        <SwiperSlide className='shadow-2xl overflow-y-scroll lg:overflow-hidden border-2 border-fuchsia-600 shadow-fuchsia-700 p-5'>
            <h1 className='text-xl font-semibold mb-4'>Myself</h1>
            <p className=' opacity-70'>Hi,I am Md Siyam from Bangladesh, a passionate Junior MERN Stack Developer. I specialize in building dynamic and user-friendly web applications using modern technologies like MongoDB, Express.js, React.js, and Node.js. Currently, I am honing my skills in Tailwind CSS, JavaScript, and other front-end and back-end frameworks to deliver high-quality digital solutions.</p>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl overflow-y-scroll lg:overflow-hidden border-2 border-fuchsia-600 shadow-fuchsia-700 p-5'>
            <h1 className='text-xl font-semibold mb-4'> Programming Journy</h1>
            <p className=' opacity-70'>My journey as a programmer has been one of passion, curiosity, and relentless learning. From the moment I wrote my first line of code, I knew I was stepping into a world filled with endless possibilities. I started with small projects, experimenting with different technologies and gradually building my skills. <br /> As I delved deeper into web development, I found my place in the MERN stack, which has become my go-to for creating dynamic and responsive applications. Mastering React.js on the frontend, Express.js for seamless backend operations, and MongoDB for efficient data management has been both challenging and rewarding.</p>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl overflow-y-scroll lg:overflow-hidden border-2 border-fuchsia-600 shadow-fuchsia-700 p-5'>
            <h1 className='text-xl font-semibold mb-4'> My Enjoyable Work</h1>
            <p className=' opacity-70'>I thrive on crafting elegant and efficient web applications using React.js and Tailwind CSS. Building user-friendly, dynamic interfaces and solving complex challenges in the MERN stack is where I find my creative energy. I enjoy turning ideas into visually stunning and functional digital experiences, always learning and improving along the way.</p>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl overflow-y-scroll lg:overflow-hidden border-2 border-fuchsia-600 shadow-fuchsia-700 p-5'>
            <h1 className='text-xl font-semibold mb-4'>Hobbies</h1>
            <p className=' opacity-70'>Outside of programming, I find peace and joy in gardening. There is something incredibly fulfilling about nurturing plants and watching them grow. Whether it is tending to vibrant flowers or cultivating fresh vegetables, gardening provides a refreshing balance to my tech-driven life.</p>
        </SwiperSlide>    
      </Swiper>
    
    </div>
  )
}
