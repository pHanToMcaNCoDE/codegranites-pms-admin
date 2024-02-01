

import ThemeButtons from '@/components/ThemeButtons'
import Button from '@/components/ui/Button'
import { Facebook, Global, Instagram, SearchNormal } from 'iconsax-react'
import Image from 'next/image'
import { BsPinterest } from 'react-icons/bs'
import { Linkedin } from 'lucide-react'
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'
import {Guest} from '../components/data'
import img from '../../../../public/Frame 1000008507.svg'
import Link from 'next/link'

const GuestCard: React.FC<{ guest: Guest }> = ({ guest }) => {


  return (
    <div className='font-Worksans'>

            {/* Guest Card */}
        <div key={guest.id} className='border border-[#E1E1E1] rounded-[.75rem] p-[1.5rem] gap-[1rem] flex w-[32rem]'>
            {/* Left */}
            <div className='flex flex-col items-center gap-[1rem]'>
                <Image className='object-cover' src={img} alt='Image Of Guest' width={170} height={170}></Image>
                
                <Link href='guests/guest-details' className='text-center w-[10.3125rem] border border-[#052C42] py-[.5rem] px-[1rem] rounded-[.5rem] text-[.875rem] text-[#052C42] leading-[1.5625rem] font-normal'>View Profile</Link>
            </div>
            {/* Right */}
            <div className='flex flex-col items-center gap-1'>
                {/* Details */}
                <div className='h-[80%] flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-[#282828] text-[1rem] font-medium leading-[1.4rem]'>{guest.name}</h1>
                    <h2 className='text-[#282828] text-[.875rem] font-normal leading-[1.5625rem]'>{guest.position}</h2>
                    <p className='text-[.75rem] font-normal leading-[1rem] tracking-[.003rem]'>Email: {guest.email}</p>
                    <p className='text-[.75rem] font-normal leading-[1rem] tracking-[.003rem]'>{guest.phone}</p>
                    <p className='text-[.75rem] font-normal leading-[1rem] tracking-[.003rem]'>No of Projects: {guest.nop}</p>
                </div>
                
                {/* Socials */}
                <ul className='h-[20%] flex flex-row justify-between items-center'>
                    <li className='pl-6'>
                        <FaFacebookF className='cursor-pointer' size={21} />
                    </li>
                    <li className='pl-6'>
                        <FaInstagram className='cursor-pointer' size={21} />
                    </li>
                    <li className='pl-6'>
                        <FaPinterestP className='cursor-pointer' size={21} />
                    </li>
                    <li className='pl-6'>
                        <FaLinkedinIn className='cursor-pointer' size={21} />
                    </li>
                    <li className='pl-6'>
                        <AiOutlineGlobal className='cursor-pointer' size={21} />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GuestCard
