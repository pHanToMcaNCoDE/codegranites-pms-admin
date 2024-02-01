import Image from 'next/image';
import React from 'react';
import img from '../../../../public/dboard/Frame 1000008423.svg'
import { IoAddOutline } from 'react-icons/io5';
import { Briefcase, DocumentFilter } from 'iconsax-react';

const Left = () => {
  return <div className='w-full lg:w-[55%]'>
        
        <div className='flex flex-row justify-between items-center w-full border lg:border-b border-[#E1E1E1] p-3'>
            <div className='gap-x-2 flex flex-row justify-between items-center'>
                <Briefcase size={22}/>
                <p className='font-Worksans font-light text-[1.125rem] leading-[2.25rem] text-center tracking-wide'>Available Project</p>
            </div>
            <div className='gap-x-2 flex flex-row justify-between items-center'>
                <DocumentFilter size={22}/>
                <p className='font-Worksans font-light text-[1.125rem] leading-[2.25rem] text-center tracking-wide'>Filter</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center py-[6em]'>
                <Image src={img} alt='Image' width={450} height={450}></Image>
            <div className='w-full flex flex-col justify-center items-center'>
                <p className='py-4 font-Worksans font-light text-[1.125rem] leading-[2.25rem]'>You have to projects yet!</p>
                <button className='flex flex-row justify-between items-center gap-x-3 py-[1rem] px-[3rem] rounded-[.5rem] bg-[#2E577D] text-[#fff] font-light text-[.875rem] leading-[1.5625rem]'>
                    <IoAddOutline size={22} />
                    <p>New Idea</p>
                </button>
            </div>
        </div>
    </div>;
};

export default Left;
