import React, { useState } from 'react';
import { HiOutlineXMark } from "react-icons/hi2";

const CompleteProjectModal = () => {
    
  return <div className='fixed flex w-full h-screen top-[-100%] left-0 bg-black/60 z-10'>
        <div className='mx-auto mt-[20%] bg-[#fff] h-[14.375rem] w-[35.875rem] rounded-[1rem] relative p-4'>
            <div className='absolute right-[5%] top-5'>
                <HiOutlineXMark className='cursor-pointer' size={18}/>
            </div>
            <h1 className='text-[#000] text-center text-[1.5rem] font-semibold leading-[2.5rem] font-Worksans'>Profile completion</h1>
            <p className='py-4 text-[.875rem] font-light tracking-wide leading-[1.5625rem] text-center font-Worksans'>Finish setting up your profile information<br></br> and begin your journey</p>

            <div className='flex flex-row items-center w-full px-8 gap-x-6'>
                <button className='w-[14.9375rem] py-[1rem] px-[3rem] rounded-[.5rem] bg-[#2E577D] text-[#fff] tracking-wide'>Go to settings</button>
                <button className='w-[14.9375rem] py-[1rem] px-[3rem] rounded-[.5rem] border border-[#2E577D] text-[#2E577D] tracking-wide '>Not now</button>
            </div>
        </div>
    </div>;
};

export default CompleteProjectModal;
