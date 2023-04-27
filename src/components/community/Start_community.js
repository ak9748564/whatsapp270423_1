import { Community_icon_red, Manage_icon, Reach_icon, Organise_icon } from "../Svg";
import { Link } from "react-router-dom";

function Start_community(props){
    return(
        <div>
                <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                    <Link to="/" className="h-[54px] w-full flex items-center" >
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[19px] text-[#ffffffe6] font-medium">New Community</p>
                    </Link>
                </div>
                <div className="new_chats_scroll overflow-x-scroll h-[calc(100vh-108px)]">
                    <div className="flex justify-center pt-8">
                        {Community_icon_red}
                    </div>
                    <p className="text-center font-bold text-[20px] mt-7 text-[#3b4a54]">Start a Community</p>
                    <div className="flex justify-center">
                        <div className="w-[300px]">
                            <div className="flex items-center mt-6">
                                {Manage_icon}
                                <p className="text-[16px] leading-[16px] text-[#3b4a54]">Add and manage related groups from one place</p>
                            </div>
                            <div className="flex items-center mt-6">
                                {Reach_icon}
                                <p className="text-[16px] leading-[16px] text-[#3b4a54]">Reach upto 2000 members from announcements</p>
                            </div>
                            <div className="flex items-center mt-6">
                                {Organise_icon}
                                <p className="text-[16px] leading-[16px] text-[#3b4a54]">Organise your neighbourhood school, team and more</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center pt-[44px] pb-[40px]">
                        <div className="rounded-full bg-[#A52729] flex items-center justify-center h-[46px] w-[46px] cursor-pointer" onClick={props.startCommunityFalse}>
                            <svg viewBox="0 0 30 30" height="30" width="30" preserveAspectRatio="xMidYMid meet" class="cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30" >
                                <path fill="white" d="M15,7l-1.4,1.4l5.6,5.6H7v2h12.2l-5.6,5.6L15,23l8-8L15,7z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Start_community;