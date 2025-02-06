import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const navbar = () => {
    return (
        <div>
            <nav>
                <a href="">
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' />
                </a>

                <ul>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>

                <div>
                    <a href="#contact">Contact <Image src={assets.arrow_icon} className='w-3' /></a>
                </div>
            </nav>
        </div>
    )
}

export default navbar