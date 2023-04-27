import React, { useContext } from 'react';
import { Context } from '../../context/Context';


export default function Search_messages_component() {
    const {searchMessages, changeSearchMessages} = useContext(Context);
  return (
    <div>
        <div className="">
                <div className="h-[60px] bg-[#1E2321] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#ffffffe6" enable-background="new 0 0 24 24" onClick={()=>changeSearchMessages("")}>
                        <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                    </svg>
                    <p className="text-white/90 text-[16px]">Search Messages</p>
                </div>
                <div className="h-[50px] flex items-center px-[10px] grow-0 shrink-0 border-b border-[#E9EDEF]">
                    <div className="flex items-center bg-[#F0F2F5] rounded-lg w-full h-[35px] px-4">
                        <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                            <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                        </svg>
                        <div className="w-full">
                            <input type="text" className="bg-[#F0F2F5] outline-none placeholder:text-[#3b4a54] text-[13px] px-7 w-full" placeholder="Search..."/>
                        </div>
                    </div>
                </div>
                <div className="px-[50px] py-[90px]">
                    <p className="text-[#8698a0] text-[14px] leading-[20px] text-center">Search messages with yourself.</p>
                </div>
            </div>
    </div>
  )
}
