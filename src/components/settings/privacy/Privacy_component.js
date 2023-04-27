import { Link } from "react-router-dom";
import dp from "./../../images/dp.jfif";
import "./../Settings.css";

function Privacy(props){
    return (
        <div className="settings h-screen max-h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <div className="h-[54px] w-full flex items-center">
                    <Link to="/settings">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>   
                    </Link>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Privacy</p>
                </div>
            </div>
                
            <div className="settings overflow-y-scroll h-[calc(100vh-108px)] bg-[#E9EBEE]">
                <div className="px-[30px] bg-white shadow-sm">
                    <p className="text-[#a52729] text-[14px] leading-[17px] py-[19px]">Who can see my personal info</p>
                    <div>
                        <Link to="/settings/privacy/last-seen-and-online" className="flex items-center justify-between py-[14px] border-b cursor-pointer">
                            <div>
                                <p className="text-[#3b4a54] text-[15px] leading-[20px]">Last seen and online</p>
                                <p className="text-[#667781] text-[14px] leading-[18px]">Everyone</p>
                            </div>
                            <div className="">
                                <svg viewBox="0 0 30 30" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="g4ti3y4y qgpfrw6h" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30">
                                    <path fill="#667781" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path>
                                </svg>
                            </div>
                        </Link>
                        <Link to="/settings/privacy/profile-photo" className="flex items-center justify-between py-[14px] border-b cursor-pointer">
                            <div>
                                <p className="text-[#3b4a54] text-[15px] leading-[20px]">Profile Photo</p>
                                <p className="text-[#667781] text-[14px] leading-[18px]">Everyone</p>
                            </div>
                            <div className="">
                                <svg viewBox="0 0 30 30" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="g4ti3y4y qgpfrw6h" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30">
                                    <path fill="#667781" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path>
                                </svg>
                            </div>
                        </Link>
                        <Link to="/settings/privacy/about" className="flex items-center justify-between py-[14px] border-b cursor-pointer">
                            <div>
                                <p className="text-[#3b4a54] text-[15px] leading-[20px]">About</p>
                                <p className="text-[#667781] text-[14px] leading-[18px]">Everyone</p>
                            </div>
                            <div className="">
                                <svg viewBox="0 0 30 30" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="g4ti3y4y qgpfrw6h" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30">
                                    <path fill="#667781" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path>
                                </svg>
                            </div>
                        </Link>
                        <div className="flex items-center justify-between py-[14px] border-b cursor-pointer">
                            <div>
                                <p className="text-[#3b4a54] text-[15px] leading-[20px]">Read Receipts</p>
                                <p className="text-[#667781] text-[14px] leading-[18px]">If turned off, you won't send or receive Read receipts. Read receipts are always sent for group chats.</p>
                            </div>
                            <div className="">
                                <input type="checkbox" className="w-[18px] h-[18px] rounded-sm border-2 border-black" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white mt-3 shadow-sm px-[30px]">
                    <p className="text-[#a52729] text-[14px] leading-[17px] py-[19px]">Disappearing messages</p>
                    <Link to="/settings/privacy/default-message-timer" className="flex items-center justify-between py-[14px] border-b cursor-pointer">
                            <div>
                                <p className="text-[#3b4a54] text-[15px] leading-[20px]">Default message timer</p>
                                <p className="text-[#667781] text-[14px] leading-[18px]">Off</p>
                            </div>
                            <div className="">
                                <svg viewBox="0 0 30 30" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="g4ti3y4y qgpfrw6h" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30">
                                    <path fill="#667781" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path>
                                </svg>
                            </div>
                        </Link>
                </div>

                <div className="bg-white my-3 shadow-sm px-[30px]">
                    <Link to="/settings/privacy/groups" className="flex items-center justify-between py-[14px] border-b cursor-pointer">
                            <div>
                                <p className="text-[#3b4a54] text-[15px] leading-[20px]">Groups</p>
                                <p className="text-[#667781] text-[14px] leading-[18px]">Everyone</p>
                            </div>
                            <div className="">
                                <svg viewBox="0 0 30 30" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="g4ti3y4y qgpfrw6h" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30">
                                    <path fill="#667781" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path>
                                </svg>
                            </div>
                    </Link>
                    <Link to="/settings/privacy/blocked-contacts" className="flex items-center justify-between py-[14px] border-b cursor-pointer">
                            <div>
                                <p className="text-[#3b4a54] text-[15px] leading-[20px]">Blocked contacts</p>
                                <p className="text-[#667781] text-[14px] leading-[18px]">None</p>
                            </div>
                            <div className="">
                                <svg viewBox="0 0 30 30" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="g4ti3y4y qgpfrw6h" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30">
                                    <path fill="#667781" d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"></path>
                                </svg>
                            </div>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
export default Privacy;