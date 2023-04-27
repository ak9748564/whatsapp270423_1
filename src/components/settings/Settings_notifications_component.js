import React from 'react';
import { useState } from 'react';
import Settings from "./Settings";
import { Link } from 'react-router-dom';
import Settings_notifications_component from './Settings_notifications_component';
import dp from "./../images/dp.jfif";

export default function Settings_component(props) {
    const [ settingsNotifications, setSettingsNotifications ] = useState(true);
    const [ notifications, setNotifications ] = useState(false);
  return (
    <div>
        <div className={ settingsNotifications === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-[#EFF1F4]" : settingsNotifications ? "animate-new_chats_show fixed w-[400px] bg-[#EFF1F4] z-10" : "animate-new_chats_hide fixed w-[400px] bg-[#EFF1F4] z-10" }>
        <div className="settings h-screen max-h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <div className="h-[54px] w-full flex items-center">
                    <Link to="/settings">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>   
                    </Link>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Notifications</p>
                </div>
            </div>
                
            <div className='px-[30px] bg-white'>
                <p className='py-[19px] text-[14px] leading-[17px] text-[#A52729]'>MESSAGES</p>
                <div className='py-[19px] flex items-center justify-between border-b'>
                    <div>
                        <p className='text-[16px] leading-[20px] text-[#3b4a54]'>Message notifications</p>
                        <p className='text-[14px] leading-[20px] text-[#8696a0]'>Show notifications for new messages</p>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='w-[18px] h-[18px] rounded-sm outline-none border-2-[#3b4a54]' onClick={()=>setNotifications(!notifications)}/>
                    </div>
                </div>
                <div className='py-[19px] flex items-center justify-between opacity-80'>
                    <div>
                        <p className={ notifications === "" ? 'text-[16px] leading-[20px] text-[#3b4a54]' : 'text-[16px] leading-[20px] text-[#8696a0]' }>Show previews</p>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='w-[18px] h-[18px] rounded-sm outline-none border-2-[#3b4a54] bg-[#EBEFF1]'/>
                    </div>
                </div>
                <div className='py-[19px] flex items-center justify-between'>
                    <div>
                        <p className={ notifications === "" ? 'text-[16px] leading-[20px] text-[#3b4a54]' : 'text-[16px] leading-[20px] text-[#8696a0]' }>Show reaction notifications</p>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='w-[18px] h-[18px] rounded-sm outline-none border-2-[#3b4a54]'/>
                    </div>
                </div>
            </div>
            <div className='mt-4 px-[30px] pt-[14px] pb-[10px] bg-white'>
                <div className='py-[19px] flex items-center justify-between'>
                    <div>
                        <p className='text-[16px] leading-[20px] text-[#3b4a54]'>Message notifications</p>
                        <p className='text-[14px] leading-[20px] text-[#8696a0]'>Show notifications for new messages</p>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='w-[18px] h-[18px] rounded-sm outline-none border-2-[#3b4a54]'/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
