import React from 'react';
import dp from './images/dp.jfif';
import { IoLockClosed, IoCall } from 'react-icons/io5';
import { BsThreeDots, BsFillMicFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';

export default function Audio_call() {
  return (
    <div className={"fixed w-screen min-h-screen flex items-center justify-center z-10 opacity-0 animate-opacity left-0"}>
        <div className="bg-black/70 backdrop-blur-xl w-[500px] rounded-md shadow-xl p-4 flex flex-col justify-between">
            <div className='flex justify-between items-start flex-wrap'>
                <div className='flex shrink-0'>
                    <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-cover mr-2 shrink-0' style={{backgroundImage: `url(${dp})`}}></div>
                    <div>
                        <div className='text-white flex items-center'>
                            <IoLockClosed className='text-white text-[12px] mr-1'/>
                            <p className='text-[12px]'>End-to-end encrypted</p>
                        </div>
                        <p className='text-white text-[18px]'>Arman Office</p>
                        <p className='text-white/50 text-[14px]'>Calling...</p>
                    </div>
                </div>
                <div className='flex items-center flex-wrap justify-end mt-2 w-full sm:w-[192px]'>
                    <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-[#5B5C5E] m-1 shrink-0'><FaVideo className="text-[#9A9B9D] text-[20px]"/></div>
                    <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-[#5B5C5E] m-1 shrink-0'><BsFillMicFill className='text-white text-[20px]'/></div>
                    <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-[#5B5C5E] m-1 cursor-pointer shrink-0'><BsThreeDots className='text-[24px] text-white'/></div>
                    <div className='flex items-center justify-center h-[40px] w-[40px] rounded-full bg-[#FF3B32] m-1 rotate-45 cursor-pointer shrink-0'><IoCall className='text-white text-[20px] rotate-90'/></div>
                </div>
            </div>
            <div className='border-dashed border-t-2 h-[1px] border-white/50 my-[30px]'></div>
        </div>
    </div>
  )
}