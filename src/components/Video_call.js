import React from 'react';
import dp from './images/dp.jfif';
import { IoLockClosed, IoCall } from 'react-icons/io5';
import { BsThreeDots, BsFillMicFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';

export default function Video_call() {
  return (
    <div className={"fixed w-screen min-h-screen flex items-center justify-center z-10 opacity-0 animate-opacity left-0"}>
        <div className='sm:h-[400px] h-screen w-screen sm:w-[600px] bg-silver relative border rounded-md shadow-lg'>
            <div className="bg-black/70 backdrop-blur-xl sm:w-[400px] rounded-md shadow-xl p-4 flex    flex-col justify-between absolute bottom-[20px] sm:left-[calc((100%-400px)/2)] left-0 w-full">
                <div className='flex justify-between items-start'>
                    <div className='flex'>
                        <div>
                            <p className='text-white text-[18px]'>Arman Office</p>
                            <p className='text-white/50 text-[14px]'>Calling...</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-[#5B5C5E] mr-1'><FaVideo className="text-[#9A9B9D] text-[20px]"/></div>
                        <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-[#5B5C5E] mx-1'><BsFillMicFill className='text-white text-[20px]'/></div>
                        <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-[#5B5C5E] mx-1 cursor-pointer'><BsThreeDots className='text-[24px] text-white'/></div>
                        <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-[#FF3B32] ml-1 rotate-45 cursor-pointer'><IoCall className='text-white text-[20px] rotate-90'/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
