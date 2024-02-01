import ThemeButtons from '@/components/ThemeButtons'
import Button from '@/components/ui/Button'
import { SearchNormal } from 'iconsax-react'
import React from 'react'

const Filter = () => {
  return (
    <div className='flex lg:hidden'>
        <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center'>

            {/* Filter and Add Guest Button */}
            <div className='rounded-[0.5rem] border border-[#E1E1E1] px-[1.5rem] py-[.8rem] self-stretch outline-0 flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                    <path d="M7.5 12H11.5V10H7.5V12ZM0.5 0V2H18.5V0H0.5ZM3.5 7H15.5V5H3.5V7Z" fill="#282828"/>
                </svg>

                <select className='self-stretch outline-0'>
                    <option>All Guests</option>
                    <option>Recently Added</option>
                </select>
            </div>

        </div>
    </div>
  )
}

export default Filter
