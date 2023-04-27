import React from 'react';
import dp from "./../images/dp.jfif";
import { FaVideo } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Context } from '../../context/Context';
import { useContext } from 'react';
import { contactIconDefault } from '../Contacts_collection';

export default function Header_self(props) {
    const [ menu, setMenu ] = React.useState(false);
    const {chatProfile, changeIsProfileOpen, changeSearchMessages, changeAudioCall, changeVideoCall, changeChatProfile} = useContext(Context);
  return (
    <div>
        <div className="h-[60px] bg-[#1E2321] flex items-center justify-between px-4 shadow-sm grow-0 shrink-0">
        <div className="flex items-center grow shrink" onClick={()=>changeIsProfileOpen(true)}>
            { chatProfile.dp ? (<div className="rounded-full h-[40px] w-[40px] bg-cover bg-center mr-4 cursor-pointer" style={{ backgroundImage:`url(${chatProfile.dp})` }} title="Profile Details"></div>) : (<div className='h-[40px] w-[40px] rounded-full mr-4'>{contactIconDefault}</div>) }
            <div className="h-[40px] flex flex-col cursor-pointer">
                <p className="text-[16px] leading-[21px] text-white/90">{chatProfile.name}</p>
                <p className="text-[13px] leading-[19px] text-white/70">{chatProfile.is_online ? (<p>Online</p>) : (<p>last seen today at {chatProfile.last_seen}</p>) }</p>
            </div>
        </div>
        <div className="flex items-center">
            <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Audio call" onClick={()=>changeAudioCall(true)}>
                <MdCall className="text-[#ffffffe6] text-[20px]"/>
            </div>
            <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Video call" onClick={()=>changeVideoCall(true)}>
                <FaVideo className="text-[#ffffffe6] text-[20px]"/>
            </div>
            <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" onClick={()=>changeSearchMessages(true)} title="Search...">
                <svg viewBox="0 0 24 24" height="24" width="24" class="fill-[#ffffffe6]">
                    <path fill="#ffffffe6" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                </svg>
            </div>
            <div className="relative">
                <div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full hover:bg-[#0F1110]" title="Menu" onClick={()=>setMenu(!menu)}>
                      <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#ffffffe6]" >
                        <path fill="fffffffe6" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                      </svg>
                    </div>
                </div>
                <div className={ menu ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-200px] w-[230px] h-[252px] animate-chat_single_menu_self overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>changeIsProfileOpen(true)}>Contact info</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>changeChatProfile("")}>Close chat</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Disappearing messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Clear messages</p>
                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Delete chat</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
