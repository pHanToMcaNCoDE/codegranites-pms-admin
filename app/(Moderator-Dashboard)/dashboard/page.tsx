// 'use client';

import React, { useState } from 'react';
import Top from './components/Top';
import Left from './components/Left';
import Right from './components/Right';
import CompleteProjectModal from './components/CompleteProjectModal';

const Dashboard = () => {

  // const [show, setShow] = useState(false)

  // const handleClick = () => {
  //   setShow(!show)
  // }

  return <div className='my-6 relative'>

    {/* Modal */}
        {/* <CompleteProjectModal/> */}

        <Top />
        <hr className='w-full h-[1px] mt-6 bg-[#E1E1E1] rounded-[.5rem'></hr>
        
        <div className='h-[90vh]'>
          <div className='flex flex-col lg:flex-row items-start'>
            <Left/>
            <Right/>
          </div>
        </div>
    </div>;
};

export default Dashboard;
