import React, { useState } from 'react';
import { HiChevronDoubleLeft } from 'react-icons/hi2';

const Home = () => {
  
  const [ isSideMenu, setIsSideMenu ]  = useState(false);

  return (
    <>
    <div 
    className={`w-2 
    ${
      isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"
    } 
    min-h-screen max-h-screen relative bg-black`}
    >
      {/* anchor */}
      <div className='w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg
      absolute -right-6 flex items-center justify-center cursor-pointer'>
        <HiChevronDoubleLeft className='text-white text-xl' />
      </div>
      {/* logo */}

      {/* start coding */}

      {/* home nav */}
    </div>
    <div></div>
    </>
  )
}

export default Home;