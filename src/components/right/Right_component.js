import React, { useContext, useEffect } from 'react';
import Chat_section from '../chat_section/Chat_section';
import Profile_details from '../profile_details/Profile_details';
import Search_messages_component from '../search_messages/Search_messages_component';
import { useState } from 'react';
import {Context} from '../../context/Context';
import { Lock_icon, Whatsapp_icon } from '../Svg';
import { useSelector } from 'react-redux';
import dp from './../images/dp.jfif';
import { IoLockClosed, IoCall } from 'react-icons/io5';
import { BsThreeDots, BsFillMicFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';

export default function Right_component(props) {
    const {recieverId} = useSelector((state) => state.chat)
    const {profileType, isProfileOpen, searchMessages, chatProfile, videoCall, audioCall, changeAudioCall, changeVideoCall} = useContext(Context);
  return (
    
    <div className=''>

        <div>
            {
                recieverId != null && recieverId !== "" && recieverId !== undefined ? 
                (
        <div className='flex'>
        <div className='grow'>
            <Chat_section pType={"normal"} />
        </div>

        <div className={profileType === "" ? "" : isProfileOpen === "" ? "hidden w-0 overflow-hidden" : isProfileOpen === "" ?  "animate-search_messages_full overflow-hidden w-full h-screen" : ""}>
            <Profile_details profileType={profileType}  />
        </div>
        
        <div className={ searchMessages === "" ? "w-0 overflow-hidden" : searchMessages ? "animate-search_messages_full overflow-hidden w-full h-screen" : "animate-search_messages_zero overflow-hidden w-0 h-screen" }>
            <Search_messages_component/>
        </div>

        <div className={ videoCall ? "fixed w-screen min-h-screen flex items-center justify-center bg-black/80 z-10 opacity-0 animate-opacity left-0" : "hidden"}>
            <div className="bg-white h-[300px] w-[600px] rounded-md shadow-xl p-3">
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#000" enableBackground="new 0 0 24 24" onClick={()=>changeVideoCall(false)}>
                    <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                </svg>
            </div>
        </div>

        <div className={ audioCall ? "fixed w-screen min-h-screen flex items-center justify-center bg-black/80 z-10 opacity-0 animate-opacity left-0" : "hidden"}>
        <div className="bg-black/70 backdrop-blur-xl w-[500px] rounded-md shadow-xl p-4 flex flex-col justify-between">
            <div className='flex justify-between items-start flex-wrap'>
                <div className='flex shrink-0'>
                    <div className='flex items-center justify-center w-[50px] h-[50px] rounded-full bg-cover mr-2 shrink-0' style={{backgroundImage:`url(${dp})`}}></div>
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
        </div>) : 
        (<div className='w-full flex flex-col h-screen '>
            <div className='flex items-center justify-center grow'>
                <div>
                    {Whatsapp_icon}
                    <div className='mt-8 text-center text-[#41525d] text-[32px] font-extralight'>PinUp Web</div>
                </div>
            </div>
            <div className='flex items-center justify-center border-b-[6px] border-[#25D366]'>
                <div className='mb-6 flex items-center'>
                    {Lock_icon}
                    <div className='text-[#8696a0] text-[14px]'>
                        end-to-end encrypted
                    </div>
                </div>
            </div>
        </div>)
            }
        </div>
    </div>
  )
}
