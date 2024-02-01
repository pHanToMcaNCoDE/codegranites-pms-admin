import Image from 'next/image';
import React from 'react';
import img from '../../../../public/dboard/Frame 1000008423 (1).svg'
import imgTwo from '../../../../public/dboard/Frame 1000008423 (2).svg'
import { ArchiveBook, ArrowRight2 } from 'iconsax-react';

const Right = () => {
  return <div className='w-full lg:w-[45%] flex flex-col items-start border border-t-0 border-[#E1E1E1]'>

        {/* Top */}
        <div className='flex flex-row justify-between items-center w-full border border-[#E1E1E1] p-3'>
            <div className='gap-x-2 flex flex-row justify-between items-center'>
                <ArchiveBook size={22}/>
                <p className='font-Worksans font-light text-[1.125rem] leading-[2.25rem] text-center tracking-wide'>History</p>
            </div>
            <div className='gap-x-2 flex flex-row justify-between items-center'>
                <p className='font-Worksans font-light text-[1.125rem] leading-[2.25rem] text-center tracking-wide'>View all</p>
                <ArrowRight2 size={22}/>
            </div>
        </div>
        <div className='my-[2em] mx-auto py-6'>
            <Image src={img} alt='Oops' width={300} height={300}></Image>
            <p className='py-4 font-Worksans font-light text-[1.125rem] leading-[2.25rem] text-center tracking-wide'>Oops! There are no completed<br className='hidden lg:flex'></br> projects yet</p>
        </div>


        {/* Bottom */}

        <div className='flex flex-row justify-between items-center w-full border border-[#E1E1E1] p-3'>
            <div className='gap-x-2 flex flex-row justify-between items-center'>
                <ArchiveBook size={22}/>
                <p className='font-Worksans font-light text-[1.125rem] leading-[2.25rem] text-center tracking-wide'>History</p>
            </div>
            <div className='gap-x-2 flex flex-row justify-between items-center'>
                <p className='font-Worksans font-light text-[1.125rem] leading-[2.25rem] text-center tracking-wide'>View all</p>
                <ArrowRight2 size={22}/>
            </div>
        </div>
        <div className='my-[2em] mx-auto py-6'>
            <Image src={imgTwo} alt='Oops' width={300} height={300}></Image>
            <p className='py-4 font-Worksans font-light text-[1.125rem] leading-[2.25rem] text-center tracking-wide'>No transactions have<br className='hidden lg:flex'></br> been made yet!</p>
        </div>
    </div>;
};

export default Right;
