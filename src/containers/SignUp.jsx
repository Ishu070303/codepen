import React, { useState } from 'react';
import { Logo } from '../assets';

import { UserAuthInput } from '../components';
import { FaEnvelope } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';

const SignUp = () => {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <div className='w-full py-8'>
        <img 
        src={Logo}
        className='object-contain w-32 opacity-50 h-auto'
        alt='logo'
        />

        <div className='w-full flex flex-col items-center justify-center py-8'>
            <p className='py-12 text-2xl text-gray-400'>Join With Us! 🤩</p>

            <div 
            style={{ backgroundColor: "#1E1F26" }}
            className='px-8 w-full md:w-auto py-4 rounded-xl shadow-md flex flex-col items-center justify-center gap-8'>
                {/* email */}
                <UserAuthInput 
                label="Email" 
                placeHolder="Email Here" 
                isPass={false} 
                setStateFunction={setEmail} 
                Icon={FaEnvelope} 
                />

                {/* password */}
                <UserAuthInput 
                label="Password" 
                placeHolder="Password Here" 
                isPass={true}
                setStateFunction={setPassword} 
                Icon={MdPassword} 
                />

                {/* alert section */}

                {/* login button */}

                {/* or section */}

                {/* sign in with google */}

                {/* sign in with github */}
            </div>
        </div>
    </div>
  )
}

export default SignUp;