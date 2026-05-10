'use client'

import { Link as ScrollLink } from "react-scroll";
import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    const links = <>
        <li><ScrollLink to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer">Home</ScrollLink></li>
        <li><ScrollLink to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer">About</ScrollLink></li>
        <li><ScrollLink to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer" >Skills</ScrollLink></li>
        <li><ScrollLink to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer">Projects</ScrollLink></li>
        <li><ScrollLink to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer">Contact</ScrollLink></li>
    </>
    return (
        <div className="max-w-screen-2xl mx-auto navbar fixed top-0 z-50 py-4 lg:px-20 text-lg font-semibold  shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Md Siyam</a>
            </div>

            <div className="navbar-end gap-6">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <Link href="https://drive.google.com/file/d/1bFEbNRpUWzYM9Wg0d_oSQIXsENQsdMlu/view?usp=sharing"
                    download="Resume.pdf" className="py-3 px-5 rounded-full bg-success hover:bg-emerald-500 text-sm">Resume</Link>
            </div>
        </div>
    )
}
