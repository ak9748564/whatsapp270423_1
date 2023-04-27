import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import dp from "./../images/dp.jfif";
import { Community_icon_new_chats, New_chats_icon, Status_icon, Menu_icon } from "../Svg";

export default function Header() {
    const [ menu, setMenu ] = useState(false);
    const [ logout, setLogout ] = useState("");
  return (
    <div>
        <div className="h-[60px] bg-[#1E2321] flex items-center justify-between px-4 border-b border-r border-[#8E9296]">
                    <Link to="/profile" className="rounded-full h-[40px] w-[40px] bg-cover bg-center cursor-pointer" style={{backgroundImage:`url(${dp})`}}></Link>
                    <div className="flex items-center">
                        <Link to="/community" className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#0F1110]" title="Communities">
                            {Community_icon_new_chats}
                        </Link>
                        <Link to="/status" className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="status">
                            {Status_icon}
                        </Link>
                        <Link to ="/new-chat" className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="New chat">
                            {New_chats_icon}
                        </Link>
                        <div className="relative">
                                <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="Menu" onClick={()=>setMenu(!menu)}>{Menu_icon}</div>
                                <div className={ menu ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-130px] w-[180px] h-[252px] animate-chats_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                                    <Link to="group">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">New group</p>
                                    </Link>
                                    <Link to="/community">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">New community</p>
                                    </Link>
                                    <Link to="/archived">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Archived</p>
                                    </Link>
                                    <Link to="/starred-messages">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Starred messages</p>
                                    </Link>
                                    <Link to="/select-chats">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select chats</p>
                                    </Link>
                                    <Link to="/settings">
                                        <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Settings</p>
                                    </Link>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer" onClick={()=>setLogout(true)}>Log out</p>
                                </div>
                        </div>
                    </div>
        </div>
        <div className={ logout ? "fixed top-0 w-screen min-h-screen flex items-center justify-center bg-white/90 z-10 animate-opacity" : "hidden"}>
                <div className={ logout === "" ? "hidden" : logout ? "bg-white p-6 rounded-md shadow-xl w-[480px] animate-scale_full" : "bg-white p-6 rounded-md shadow-xl w-[480px] animate-scale_zero" } >
                    <p className="text-[20px] leading-[25px] text-[#3b4a54]">Log out?</p>
                    <p className="text-[14px] leading-[20px] text-[#3b4a54] mt-4">Are you sure you want to logout?</p>
                    <div className="mt-10 flex w-full justify-end">
                        <button className="h-[36px] rounded-sm text-[#A52729] px-4 leading-[36px] border mr-2" onClick={()=>setLogout(false)}>CANCEL</button>
                        <button className="h-[36px] leading-[36px] bg-[#A52729] text-white px-4 font-medium rounded-sm">LOG OUT</button>
                    </div>
                </div>
        </div>
    </div>
  )
}
