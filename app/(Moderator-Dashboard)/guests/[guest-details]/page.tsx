

import { ArrowLeft2, Edit2 } from "iconsax-react"
import img from '../../../../public/Frame 1000008507.svg'
import Image from "next/image"
import Link from "next/link"

const GuestDetails = () => {

  return (
    <div className=''>

        {/* Header */}
        <div className='flex flex-row justify-between items-center w-full px-[2em] my-[2em]'>
            <Link href='/guests' className="flex items-center gap-x-2 cursor-pointer">
                <ArrowLeft2/>
                <p className="font-Worksans text-[1.125rem] font-medium leading-[2.25rem]">Back</p>
            </Link>
            
            <button className="flex gap-x-2 items-center border border-[#E1E1E1] p-[.375rem] rounded-[.5rem]">
                <p className="font-Worksans text-[1.125rem] font-medium leading-[2.25rem] text-[#282828]">Edit</p>
                <Edit2 className="text-[#282828]"/>
            </button>
        </div>

        {/* Body */}
        <div className="max-w-[68.3125rem;] mx-auto p-10 border border-[#E1E1E1] rounded-[.5rem]">
            <div className="flex flex-col items-start md:flex-row gap-[3em] lg:flex-row w-full pb-[2.3em] border-b border-[#E1E1E1]">
                
                <Image src={img} alt='Image Of Guest' width={320} height={320}></Image>

                <div className="">

                    <h1 className="pb-1 text-[1.125rem] text-[#282828] leading-[2.25rem] font-medium font-Worksans">Name: <span className="text-[#535353] text-[1rem] leading-[1.875rem] font-medium">Chow Lee</span></h1>

                    <h1 className="pb-1 font-Worksans text-[1.125rem] text-[#282828] leading-[2.25rem] font-normal">Title: <span className="text-[#535353] text-[1rem] leading-[1.875rem] font-medium">CEO Voltz</span></h1>

                    <h1 className="pb-1 font-Worksans text-[1.125rem] text-[#282828] leading-[2.25rem] font-normal">Guest ID: <span className="text-[#535353] text-[1rem] leading-[1.875rem] font-medium">Ad4-0102</span></h1>

                    <h1 className="pb-1 text-[1.125rem] text-[#282828] leading-[2.25rem] font-normal font-Worksans">Email: wlaterkenny@gmail.com</h1>

                    <h1 className="pb-1 text-[1.125rem] text-[#282828] leading-[2.25rem] font-normal font-Worksans">Phone: 000000000000000</h1>

                    <h1 className="pb-1 text-[1.125rem] text-[#282828] leading-[2.25rem] font-normal font-Worksans">Gender: <span className="text-[#535353] text-[1rem] leading-[1.875rem] font-medium">Male</span></h1>

                    <h1 className="pb-1 text-[1.125rem] text-[#282828] leading-[2.25rem] font-normal font-Worksans">Nationality: <span className="text-[#535353] text-[1rem] leading-[1.875rem] font-medium">American</span></h1>

                    <h1 className="pb-1 text-[1.125rem] text-[#282828] leading-[2.25rem] font-normal font-Worksans">City: <span className="text-[#535353] text-[1rem] leading-[1.875rem] font-medium">Texas</span></h1>

                    <h1 className="pb-1 text-[1.125rem] text-[#282828] leading-[2.25rem] font-normal font-Worksans">Address: <span className="text-[#535353] text-[1rem] leading-[1.875rem] font-medium">101 Main Street, Apartment 123, Austin, TX 78731</span></h1>
                    
                </div>
            </div>

            {/* Bio */}
            <div className="w-full pt-10">
                <h1 className="pt-3 text-[1.125rem] text-[#282828] font-medium leading-[2.25rem] font-Worksans">Bio:</h1>
                <div className="text-[1rem] text-[#282828] leading-[1.875rem] font-light pb-4 w-[90%] md:text-justify lg:text-justify">
                    I'm Karl, the CEO of Quest, where we breathe life into ideas and drive the future of technology. Exciting times lie ahead as we embark on a transformative journey with CodeGranites, using their cutting-edge project management web app to steer our latest venture
                </div>
                <div className="text-[1rem] text-[#282828] leading-[1.875rem] font-light pb-4 w-[90%] md:text-justify lg:text-justify">
                    At the helm of Quest, I've set sail on a mission to redefine industry standards. Our collaboration with CodeGranites is a testament to our commitment to excellence. The vision is simple yet profound – to harness technology for unparalleled innovation
                </div>
            </div>
        </div>
    </div>
  )
}

export default GuestDetails
