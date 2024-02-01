'use client';

import ThemeButtons from '@/components/ThemeButtons'
import Button from '@/components/ui/Button'
import { ArrowDown2, Facebook, Global, Instagram, SearchNormal } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import UsersIcon from './components/UsersIcon'
import { guests } from './components/data'
import GuestCard from './components/GuestCard'
import { IoAddOutline } from "react-icons/io5";
import FilterDropdown from './components/FilterDropdown'

const page = () => {

    const [clicked, setClicked] = useState(false)

  return (
    <div className='font-Worksans'>

        {/* Body */}
        <div className='my-6 max-w-[1120px] mx-auto p-2'>
            <div className='flex flex-col md:flex-col lg:flex-row justify-between items-center'>

                {/* Search Bar */}
                <div className='lg:w-[45%] md:w-full w-full flex flex-row items-center border border-[#E1E1E1] py-[0.96875rem] px-[0.625rem] gap-x-1 rounded-[.5rem]'>
                    <SearchNormal/>
                    <input className='w-[50%] outline-none px-2 py-0' placeholder='Search for guests'></input>
                </div>

                {/* Filter and Add Guest Button */}
                <div className='lg:w-[55%] w-full md:w-full py-4 lg:py-0 flex flex-row justify-between lg:justify-end items-center gap-x-14'>

                    <Filter/>
                    <div className='hidden lg:flex flex-row justify-between items-center gap-x-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                            <path d="M7.5 12H11.5V10H7.5V12ZM0.5 0V2H18.5V0H0.5ZM3.5 7H15.5V5H3.5V7Z" fill="#282828"/>
                        </svg>
                        <p className='text-[.875rem] font-normal text-[#282828] leading-[1.5625rem]'>Filter by</p>
                        <div className='relative'>
                            <div onClick={() => setClicked(!clicked)} className='hidden lg:flex lg:justify-between gap-x-6 lg:items-center rounded-[0.5rem] border border-[#E1E1E1] px-[1.5rem] py-[.8rem] self-stretch outline-0 cursor-pointer'>
                                <p className='text-[1rem] font-light text-[#282828] leading-[1.875rem]'>All Guests</p>
                                <ArrowDown2/>
                            </div>
                            {
                                clicked ? <FilterDropdown/> : ''
                            }

                        </div>
                        {/* <FilterDropdown clicked={clicked} /> */}
                    </div>
                    <div>
                        <button className='bg-[#2E577D] text-[#fff] py-[1rem] px-[3rem] rounded-[.5rem] text-[1rem] font-medium leading-[1.4rem] flex items-center gap-x-2'> <IoAddOutline size={22} /> Add Guest</button>
                    </div>
                </div>
            </div>
        </div>

        {/* All Guests */}
        <div className='max-w-[1100px] mx-auto p-2 lg:mt-[2.5em]'>
            <div className='flex flex-row items-center gap-x-3 w-full p-[1rem] border-b border-[#E1E1E1]'>
                <UsersIcon/>
                <h2 className='text-[1rem] text-[#282828] leading-[1.875rem] font-medium'>All Guests</h2>
            </div>
            
            {/* Guest Cards */}
            <div className='my-[2.69rem] grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center'>

                {/* Guest Card */}
                {
                    guests.map((guest) => (
                        <GuestCard guest={guest} />
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default page
