import React from 'react';
import { useState } from 'react';
import Settings from "./Settings";
import { Link } from 'react-router-dom';
import Settings_notifications_component from './Settings_notifications_component';
import dp from "./../images/dp.jfif";
import animated_doodle from "./../images/animated-doodle.png";

export default function Settings_help_component(props) {
  return (
    <div>
        <div className= "animate-new_chats_show fixed w-[400px] bg-[#EFF1F4] z-10">
        <div className="settings h-screen max-h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <div className="h-[54px] w-full flex items-center">
                    <Link to="/settings">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>   
                    </Link>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Help</p>
                </div>
            </div>
            <div className='bg-[#F0F2F5]'>
            <div class="flex justify-center">
                <div className='rounded-full h-[258px] w-[258px] overflow-hidden mt-[32px] mb-[28px]'>
                    <div className='h-[258px] w-[4128px]'>
                        <img src={animated_doodle} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
