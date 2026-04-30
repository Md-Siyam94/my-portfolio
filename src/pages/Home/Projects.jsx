'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import TwineWere from '../../../public/twinewere.png'
import Shikhoo from '../../../public/shikhoo.png'
import ArtifactsTracker from '../../../public/artifactstracker.png'
import Github from '../../../public/github.png'
import { Tooltip as ReactTooltip } from "react-tooltip";
import AOS from 'aos'
import "aos/dist/aos.css";

export default function Projects() {
    useEffect(()=>{
        AOS.init({
            duration:700,
            delay:10,
        })
    },[])
    return (
        <div className='lg:flex gap-6 max-w-7xl mx-auto px-8 py-24  '>
            {/* project-1 */}
            <div data-aos="zoom-in-up" className="card mb-10 lg:mb-0 lg:w-96 shadow-sm">
                <figure>
                    <Image

                        className='lg:h-48 w-full'
                        src={TwineWere}
                        alt="Twine were" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Twine Were</h2>
                    <p className='opacity-70'>Twine is a modern e-commerce backend built with Node.js, Express.js, and MongoDB (Mongoose). It provides a clean API structure for product management, user authentication, cart handling, and wishlist functionality.</p>
                    <div className="card-actions justify-between items-center mt-5">
                        <div className='flex gap-3 items-center  object-cover'>
                           <Link href={'https://github.com/Md-Siyam94/Twine-client'} target='_blank'> <Image   data-tooltip-id="twine-client" src={Github} className='cursor-pointer h-10 w-10' alt='github logo' /></Link>
                            <ReactTooltip
                                id="twine-client"
                                place="top"
                                content="Twine client"
                            />
                           <Link href={'https://github.com/Md-Siyam94/Twine-server'} target='_blank'> <Image  data-tooltip-id="twine-server" src={Github} className='cursor-pointer h-10 w-10' alt='github logo' /></Link>
                            <ReactTooltip
                                id="twine-server"
                                place="top"
                                content="Twine server"
                            />
                        </div>
                        <Link href={'https://twinewere.netlify.app/'} target='_blank' className='py-3 px-6 bg-success rounded-full hover:bg-emerald-500'>See Project</Link>
                    </div>
                </div>
            </div>
            {/* project-2 */}
            <div data-aos="zoom-in-up" className="card mb-10 lg:w-96 shadow-sm">
                <figure>
                    <Image

                        className='lg:h-48 w-full'
                        src={Shikhoo}
                        alt="Shikhoo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shikhoo</h2>
                    <p className='opacity-70'>Shikhoo is a full-featured online learning platform designed to make digital education simple, accessible, and user-friendly. It allows instructors to create courses with structured modules, and students can explore, enroll, and learn seamlessly through an intuitive interface.</p>
                    <div className="card-actions justify-between items-center mt-5">
                        <div className='flex gap-3 items-center  object-cover'>
                           <Link href={'https://github.com/Md-Siyam94/course-master-client'} target='_blank'> <Image  data-tooltip-id="shikhoo-client" src={Github} className='cursor-pointer h-10 w-10' alt='github logo' /></Link>
                            <ReactTooltip
                                id="shikhoo-client"
                                place="top"
                                content="Shikhoo client"
                            />
                           <Link href={'https://github.com/Md-Siyam94/shikhoo-server'} target='_blank'> <Image  data-tooltip-id="shikhoo-server" src={Github} className='cursor-pointer h-10 w-10' alt='github logo' /></Link>
                            <ReactTooltip
                                id="shikhoo-server"
                                place="top"
                                content="Shikhoo server"
                            />
                        </div>
                        <Link href={'https://twinewere.netlify.app/'} target='_blank' className='py-3 px-6 bg-success rounded-full hover:bg-emerald-500'>See Project</Link>
                    </div>
                </div>
            </div>
            {/* project-3 */}
            <div data-aos="zoom-in-up" className="card lg:w-96 shadow-sm">
                <figure>
                    <Image

                        className='lg:h-48 w-full '
                        src={ArtifactsTracker}
                        alt="Artifacts Tracker" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Artifacts Tracker</h2>
                    <p className='opacity-70'>The Historical Artifacts Tracker is a web-based application designed to help museums, historians, and researchers track, manage, and catalog historical artifacts. This platform ensures that valuable historical information is preserved and easily accessible.</p>
                    <div className="card-actions justify-between items-center mt-5">
                        <div className='flex gap-3 items-center  object-cover'>
                             <Link href={'https://github.com/Md-Siyam94/Artifacts-Tracker'} target='_blank'> <Image  data-tooltip-id="artifacts-client" src={Github} className='cursor-pointer h-10 w-10' alt='github logo' /></Link>
                            <ReactTooltip
                                id="artifacts-client"
                                place="top"
                                content="Artifacts client"
                            />
                            <Link href={'https://github.com/Md-Siyam94/Artifacts-Tracker-server'} target='_blank'> <Image  data-tooltip-id="artifacts-server" src={Github} className='cursor-pointer h-10 w-10' alt='github logo' /></Link>
                            <ReactTooltip
                                id="artifacts-server"
                                place="top"
                                content="Artifacts server"
                            />
                        </div>
                        <Link href={'https://twinewere.netlify.app/'} target='_blank' className='py-3 px-6 bg-success rounded-full hover:bg-emerald-500'>See Project</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
