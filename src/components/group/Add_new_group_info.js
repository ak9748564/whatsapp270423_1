import dp from "./images/dp.jfif";
import lm from "./images/lm.jfif";
import car from "./images/car.jfif";
import a from "./images/a.svg";
import svg from "./images/svg.svg";
import { useEffect, useState, useReducer } from "react";
import people from "./images/people.svg";

function Add_new_group_info(props){
    const [groupPhotoMenu, setGroupPhotoMenu] = useState("");
    const [groupName, setGroupName] = useState("");
    const [disappearingMessages, setDisappearingMessages] = useState("");
    return(
        <div className="flex flex-col h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <div className="h-[54px] w-full flex items-center">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={props.addNewGroupInfoFalse}>
                        <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                    </svg>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">New group</p>
                </div>
            </div>
            <div className="new_chats_scroll grow shrink  overflow-y-scroll bg-[#F0F2F5]">
                <div className="px-[32px] py-[28px] w-full bg-white shadow-md">
                    <div className="w-[200px] h-[200px] rounded-full m-auto bg-[#6F7E86] bg-center bg-no-repeat flex items-center justify-center cursor-pointer" style={{backgroundImage: `url(${people})`}} onClick={()=>setGroupPhotoMenu(!groupPhotoMenu)}>
                        <div>
                            <div className="relative w-[24px] h-[24px] m-auto">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="white" d="M21.317,4.381H10.971L9.078,2.45C8.832,2.199,8.342,1.993,7.989,1.993H4.905 c-0.352,0-0.837,0.211-1.078,0.468L1.201,5.272C0.96,5.529,0.763,6.028,0.763,6.38v1.878c0,0.003-0.002,0.007-0.002,0.01v11.189 c0,1.061,0.86,1.921,1.921,1.921h18.634c1.061,0,1.921-0.86,1.921-1.921V6.302C23.238,5.241,22.378,4.381,21.317,4.381z  M12.076,18.51c-3.08,0-5.577-2.497-5.577-5.577s2.497-5.577,5.577-5.577s5.577,2.497,5.577,5.577 C17.654,16.013,15.157,18.51,12.076,18.51z M12.076,9.004c-2.17,0-3.929,1.759-3.929,3.929s1.759,3.929,3.929,3.929 s3.929-1.759,3.929-3.929C16.004,10.763,14.245,9.004,12.076,9.004z"></path></svg>
                                <div className={ groupPhotoMenu ? "absolute bg-white rounded-md shadow-md left-[24px] py-[6px] w-[200px]" : "hidden" }>
                                <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Take Photo</p>
                                <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Upload Photo</p>
                                <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Emoji & sticker</p>
                                </div>
                            </div>
                            <div className="text-white/80 text-[13px] pt-2 m-auto w-[100px] text-center">ADD GROUP ICON</div>
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <div className="flex items-center justify-between w-full border-b-2 border-[#667781]">
                            <div className="w-full relative">
                                <label htmlFor="" className="hidden">Group Subject</label>
                                <input type="text" className="w-full h-[20px] my-2 outline-none" placeholder="Group Subject" onInput={(event)=>setGroupName(event.target.value)} onChange={(event)=>setGroupName(event.target.value)}/>
                            </div>
                            <div className="cursor-pointer">
                                <svg viewBox="0 0 20 20" height="20" width="20" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 20 20"><path fill="#8696a0" d="M9.5,1.7C4.8,1.7,1,5.5,1,10.2s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S14.2,1.7,9.5,1.7z  M9.5,17.6c-4.1,0-7.4-3.3-7.4-7.4s3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4S13.6,17.6,9.5,17.6z"></path><path fill="#8696a0" d="M6.8,9.8C7.5,9.7,8,9.1,7.9,8.4C7.8,7.8,7.4,7.3,6.8,7.3C6.1,7.3,5.6,8,5.7,8.7 C5.7,9.3,6.2,9.7,6.8,9.8z"></path><path fill="#8696a0" d="M13.9,11.6c-1.4,0.2-2.9,0.3-4.4,0.4c-1.5,0-2.9-0.1-4.4-0.4c-0.2,0-0.4,0.1-0.4,0.3 c0,0.1,0,0.2,0,0.2c0.9,1.8,2.7,2.9,4.7,3c2-0.1,3.8-1.2,4.8-3c0.1-0.2,0-0.4-0.1-0.5C14.1,11.6,14,11.6,13.9,11.6z M9.8,13.6 c-2.3,0-3.5-0.8-3.7-1.4c2.3,0.4,4.6,0.4,6.9,0C13,12.3,12.6,13.6,9.8,13.6L9.8,13.6z"></path><path fill="#8696a0" d="M12.2,9.8c0.7-0.1,1.2-0.7,1.1-1.4c-0.1-0.6-0.5-1.1-1.1-1.1c-0.7,0-1.2,0.7-1.1,1.4 C11.2,9.3,11.6,9.7,12.2,9.8z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 bg-white shadow-md">
                    <div className="flex h-[78px] px-[32px] cursor-pointer items-center">
                        <div className="flex justify-between w-full">
                            <div className="" onClick={()=>setDisappearingMessages(true)}>
                                <p className="text-[17px] leading-[22px] text-[#111b21]">Disappearing messages</p>
                                <p className="text-[14px] text-[#8696a0]">Off</p>
                            </div>
                            <div className="flex items-center">
                                <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                    <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ groupName === "" ? "hidden" : "w-full flex justify-center pt-[24px] pb-[40px]" }>
                    <div className="rounded-full bg-[#A52729] flex items-center justify-center h-[46px] w-[46px] cursor-pointer" onClick={props.groupCreationResult}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="white" d="M8,17.1l-5.2-5.2l-1.7,1.7l6.9,7L22.9,5.7L21.2,4L8,17.1z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={ disappearingMessages === "" ? "hidden" : disappearingMessages ? "absolute w-screen h-screen overflow-scroll flex items-center justify-center bg-white/90 z-10 opacity-0 animate-opacity" : "hidden"}>
                <div className="min-h-screen mt-[200px]">
                <div className={ disappearingMessages === "" ? "hidden" : disappearingMessages ?  "bg-white p-6 rounded-md shadow-xl w-[480px] animate-disappearing_messages_true" : "animate-disappearing_messages_false"} >
                    <p className="text-[20px] leading-[25px] text-[#3b4a54]">Disappearing messages</p>
                    <p className="text-[14px] leading-[20px] text-[#3b4a54] mt-4">All new messages in this chat will disappear after the selected duration</p>
                    <div>
                        <div className="flex items-center mt-4 mb-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">1 hour</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">3 hour</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">6 hour</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">12 hour</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">24 hour</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">2 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">3 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">4 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">5 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">6 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">7 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">14 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">21 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">30 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">60 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">90 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">180 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">365 days</p>
                        </div>
                        <div className="flex items-center my-3">
                            <input type="radio" name="duration" id="" />
                            <p className="text-[14px] leading-[18px] text-[#3b4a54] ml-2">Off</p>
                        </div>
                    </div>
                    <div className="mt-10 flex w-full justify-end">
                        <button className="h-[36px] rounded-sm text-[#A52729] px-4 leading-[36px] border mr-2" onClick={()=>setDisappearingMessages(false)}>CANCEL</button>
                        <button className="h-[36px] leading-[36px] bg-[#A52729] text-white px-4 font-medium rounded-sm" onClick={()=>setDisappearingMessages(false)}>OK</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Add_new_group_info;