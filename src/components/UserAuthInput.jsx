import React, { useState} from 'react';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';

const UserAuthInput = ({ 
    label, 
    placeHolder, 
    isPass, 
    setStateFunction, 
    Icon 
   }) => {
   
  const [ value, setValue ] = useState("");
  const [ showPass, setShowPass ] = useState(true);

  const handleTextChange = (e) => {
    setValue(e.target.value);
    setStateFunction(e.target.value);

    if(placeHolder === "Email"){
        
    }
  }

  return (
    <div className='flex flex-col items-start justify-start gap-1'>
        <label className='text-sm text-gray-300'>{ label }</label>
        <div className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 bg-gray-200`}>
            <Icon
            style={{ color: "#1E1F26" }}
            className='text-2xl'
            />
            <input 
            type={isPass && showPass ? "password" : "text"} 
            style={{ color: "#1E1F26" }} 
            placeholder={placeHolder} 
            className='flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-lg' 
            value={value}
            onChange={handleTextChange}
            />

           {isPass && (
             <motion.div 
             onClick={() => setShowPass(!showPass)} 
             whileTap={{ scale: 0.9 }} 
             className='cursor-pointer'>
                {showPass ? (
                   <FaEye 
                   style={{ color: "#1E1F26" }} 
                   className='text-2xl'/>
                ): (
                    <FaEyeSlash 
                    style={{ color: "#1E1F26" }} 
                    className='text-2xl'/>
                )}
             </motion.div>
           )}
        </div>
    </div>
  )
}

export default UserAuthInput;