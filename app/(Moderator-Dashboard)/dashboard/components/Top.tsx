import { SearchNormal } from 'iconsax-react'
import React from 'react'
import { IoAddOutline } from 'react-icons/io5'

const Top = () => {
  return (
    <div>
        {/* Filter and Add Guest Button */}
        <div className='w-full px-[2em] lg:px-[3em] flex flex-row justify-between lg:justify-start items-center gap-x-8'>
            {/* Search Bar */}
            <div className='w-[62%] lg:w-[40%] flex flex-row items-center border border-[#E1E1E1] py-[0.96875rem] px-[0.625rem] gap-x-1 rounded-[.5rem]'>
                <SearchNormal/>
                <input className='w-[50%] outline-none font-Worksans px-2 py-0' placeholder='Search for guests'></input>
            </div>
            {/* Button */}
            <div className=''>
                <button className='bg-[#2E577D] text-[#fff] py-[1rem] px-[1.5rem] lg:px-[3rem] rounded-[.5rem] text-[1rem] font-medium leading-[1.4rem] flex items-center gap-x-2'> <IoAddOutline size={22} /> New Idea</button>
            </div>
        </div>
    </div>
  )
}

export default Top
