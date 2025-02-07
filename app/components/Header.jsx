import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
    return (
        <div>
            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-semibold'>Hi! My Name is Benjamin <Image src={assets.hand_icon} alt='' className='w-6' /> </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-normal'>Software Engineer</h1>
            <p className='max-w-2xl mx-auto font-Outfit'>I am a Software Engineering student passionate about AI, Full-stack development, and Product Managment! I am currently in my second year at Western University in London, Ontario</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black flex itemse-center gap-2'>Contact me<Image src={assets.right_arrow_white} alt='' className='w-4' /> </a>
                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex itemse-center gap-2'>Resume<Image src={assets.download_icon} alt='' className='w-4' /> </a>
            </div>
        </div>
    )
}

export default Header