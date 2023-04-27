import React from "react";
import { Link } from "react-router-dom";
import dp from "../images/dp.jfif";
import { Edit_icon, Emoji_icon, Emoji_icon_grey, Tick_icon } from "../Svg";

function Profile_component(props){
    const [nameEdit, setNameEdit] = React.useState(true);
    const [aboutEdit, setAboutEdit] = React.useState(true);
    return(
        <div className="flex flex-col h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <Link to="/" className="h-[54px] w-full flex items-center">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={props.addCommunityGroupsFalse}>
                        <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z">
                        </path>
                    </svg>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Profile</p>
                </Link>
            </div>
            <div className="profile_scroll grow shrink  overflow-y-scroll bg-[#f0f2f5] h-[calc(100vh-108px)]">
                <div className="h-[200px] my-[28px] w-full">
                    <div className="w-[200px] h-[200px] rounded-full bg-cover m-auto" style={{backgroundImage:`url(${dp})`}}>
                        <div className="hover:opacity-1 h-[200px] w-[200px] bg-black/70 rounded-full"></div>
                    </div>
                </div>
                <div className="bg-white px-[30px] py-[14px]">
                    <p className="text-[14px] text-[#a52729] font-medium">Your name</p>
                    <div className="h-[36px] flex items-center border-b-2 border-[#a52729]">
                        <input type="text" className=" h-[32px] w-full outline-none"/>
                        {
                            nameEdit ? (<div className="cursor-pointer" onClick={()=>setNameEdit(false)}>{Edit_icon}</div>) : (<div className="flex items-center">
                                        <div className="text-[#d1d7d8] text-[14px] mx-1">15</div>
                                        <div className="mx-1">{Emoji_icon_grey}</div>
                                        <div className="" onClick={()=>setNameEdit(true)}>{Tick_icon}</div>
                                    </div>)
                        }
                    </div>
                </div>
                <div className="mt-4 px-[30px] text-[#8696a0] text-[14px] leading-[20px]">This is not your username or pin. This will be visible to your Whatsapp contacts.</div>
                <div className="bg-white px-[30px] py-[14px] mt-6">
                    <p className="text-[14px] text-[#a52729] font-medium">About</p>
                    <div className="h-[36px] flex items-center border-b-2 border-[#a52729]">
                        <input type="text" className=" h-[32px] w-full outline-none"/>
                        {
                            aboutEdit ? (<div className="cursor-pointer" onClick={()=>setAboutEdit(false)}>{Edit_icon}</div>) : (<div className="flex items-center">
                                        <div className="text-[#d1d7d8] text-[14px] mx-1">15</div>
                                        <div className="mx-1">{Emoji_icon_grey}</div>
                                        <div className="" onClick={()=>setAboutEdit(true)}>{Tick_icon}</div>
                                    </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile_component;