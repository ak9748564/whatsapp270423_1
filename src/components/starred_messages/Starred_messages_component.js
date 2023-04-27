import { Link } from "react-router-dom";
import { Select_Chats_Menu_icon } from "../Svg";
import { useState } from "react";

function Starred_messages_component(props){
    const [menu, setMenu] = useState(false);
    return(
        <div>
                <div className="h-[60px] bg-[#f0f2f5] pl-[25px] pr-[20px] flex items-center justify-between">
                    <Link to="/" className="h-[54px] w-full flex items-center cursor-pointer">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#54656f" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[16px] text-[#111b21] pl-7">Starred messages</p>
                    </Link>
                    <div className="relative">
                        <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full active:bg-[#0F1110]" title="Menu" onClick={()=>setMenu(!menu)}>{Select_Chats_Menu_icon}</div>
                            <div className={ menu ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-130px] w-[180px] h-[252px] animate-starred_messages_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                                <div>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Unstar all</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="starred_messages overflow-y-scroll bg-[#f0f2f5] flex flex-col">
                    <div className="grow shrink flex items-center justify-center">
                        <p className="text-[14px] text-[#8696a0]">No starred messages</p>
                    </div>
                    <div className="grow-0 shrink-0 pt-[22px] pb-[12px] px-[16px] text-[#8696a0] text-[14px]">Use Whatsapp on your phone to see older chats and messages.</div>
                </div>
        </div>
    )
}
export default Starred_messages_component;