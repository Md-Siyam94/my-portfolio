import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import social1 from '../../../public/linkedin.png'
import social2 from '../../../public/facebook.png'

export default function Footer() {
    return (
        <div><footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <aside>
                <h1 className='text-2xl font-semibold'>Md Siyam</h1>
                <p>
                    siyam942404@gmail.com
                    <br />
                  +880 1789478967
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <Link href={'https://www.linkedin.com/in/md-siyam-d942404'} target="_blank" rel="noopener noreferrer"><Image className='h-10 w-10 cursor-pointer' src={social1} alt='linkedin' /></Link>
                    <Link href={'https://www.facebook.com/profile.php?id=100049223240013'} target="_blank" rel="noopener noreferrer"><Image className='h-10 w-10 cursor-pointer' src={social2} alt='facebook' /></Link>
                </div>
            </nav>
        </footer></div>
    )
}
