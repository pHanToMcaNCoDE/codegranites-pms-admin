import ThemeButtons from '@/components/ThemeButtons'
import Button from '@/components/ui/Button'
import { SearchNormal } from 'iconsax-react'
import React from 'react'

const FilterDropdown = () => {
  return (
    <div className='absolute mt-2 flex flex-col items-start w-full bg-[#fff] z-20 rounded-[0.5rem] border border-[#E1E1E1] self-stretch outline-0'>
        <div className='duration-300 px-[1rem] py-[.5rem] w-full hover:bg-[#BECBD7] rounded-t-[0.5rem] rounded-b-none cursor-pointer'>
            <p className='text-[1rem] text-[#282828] leading-[1.875rem] font-light'>All Guests</p>
        </div>
        {/* <hr className='border border-[#E1E1E1] px-1 w-full h-[1px]'></hr> */}
        <div className='duration-300 px-[1rem] py-[.5rem] w-full hover:bg-[#BECBD7] hover:border-t-none rounded-b-[0.5rem]  rounded-t-none cursor-pointer'>
            <p className='text-[1rem] text-[#282828] leading-[1.875rem] font-light'>Recently Added</p>
        </div>
    </div>
  )
}

export default FilterDropdown
