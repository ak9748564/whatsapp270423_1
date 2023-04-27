import React from 'react';
import { Introducing_communities_icon } from '../Svg';
import { Link } from 'react-router-dom';

export default function Introducing_communities(props) {
  return (
    <div className="flex flex-col h-screen">
        <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
            <Link to="/" className="h-[54px] w-full flex items-center">
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                    <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                </svg>
                <p className="text-[19px] text-[#ffffffe6] font-medium">Communities</p>
            </Link>
        </div>
        <div>
            <div className='flex items-end justify-center h-[161px]'>
                {Introducing_communities_icon}
            </div>
            <p className='text-[24px] leading-[36px] text-[#111b21] font-bold text-center mt-5'>Introducing communities</p>
            <p className='text-[14px] leading-[21px] text-[#8696a0] text-center px-8 mt-3'>Easily organise your related groups and send announcements. Now, your communities, like neighbourhoods or schools, can have their own space.</p>
            <div className='flex justify-center w-full mt-8'>
                <button className='bg-[#A52729] text-white px-4 py-2 rounded-sm' onClick={""}>START A COMMUNITY</button>
            </div>
        </div>
    </div>
  )
}
