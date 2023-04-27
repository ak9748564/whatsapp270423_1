import dp from "./images/dp.jfif";
import lm from "./images/lm.jfif";
import car from "./images/car.jfif";
import a from "./images/a.svg";
import svg from "./images/svg.svg";
import { useEffect, useState, useReducer } from "react";
import people from "./images/people.svg";
import { Left_arrow_icon } from "../Svg";

function Add_community_groups(props){
    const [communityPhotoMenu, setCommunityPhotoMenu] = useState("");
    const [communityName, setCommunityName] = useState("");
    const [communityDescription, setCommunityDescription] = useState("");
    return(
        <div className="flex flex-col h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <div className="h-[54px] w-full flex items-center">
                    <div onClick={props.addCommunityGroupsFalse}>
                        <Left_arrow_icon/>
                    </div>
                    {/* <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                        <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                    </svg> */}
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Add groups (1/21)</p>
                </div>
            </div>
            <div className="new_chats_scroll grow shrink  overflow-y-scroll bg-[#f0f2f5]">

                <div>
                    <div className="flex items-stretch h-[72px] w-full bg-white hover:bg-[#F5F6F6] cursor-pointer hover:transition-all">
                        <div className="flex items-center justify-center h-[72px] w-[76px] shrink-0">
                            <div className="h-[48px] w-[48px] flex items-center justify-center bg-[#A52729] rounded-full">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="white">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.99 8C10.99 9.66 9.66 11 8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 10.99 6.34 10.99 8ZM18.99 8C18.99 9.66 17.66 11 16 11C14.34 11 13 9.66 13 8C13 6.34 14.34 5 16 5C17.66 5 18.99 6.34 18.99 8ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM15.03 13.05C15.38 13.02 15.71 13 16 13C18.33 13 23 14.17 23 16.5V18C23 18.55 22.55 19 22 19H16.82C16.93 18.69 17 18.35 17 18V16.5C17 15.03 16.21 13.92 15.07 13.09C15.067 13.087 15.0639 13.083 15.0606 13.0787C15.053 13.0688 15.0439 13.057 15.03 13.05Z" fill="white"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center text-[17px] text-[#111b21] border-b w-full">Create New Group</div>
                    </div>
                    <div className="flex items-stretch h-[72px] w-full bg-white hover:bg-[#F5F6F6] cursor-pointer hover:transition-all" onClick={props.addExistingCommunityGroupsTrue}>
                        <div className="flex items-center justify-center h-[72px] w-[76px] shrink-0">
                            <div className="h-[48px] w-[48px] flex items-center justify-center bg-[#A52729] rounded-full">
                                <svg viewBox="0 0 28 28" height="28" width="28" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 28 28">
                                    <path fill="white" d="M19.619,14.803h-4.816v4.816h-1.605v-4.816H8.381v-1.605h4.816V8.381h1.605v4.816h4.816 L19.619,14.803L19.619,14.803z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center text-[17px] text-[#111b21] border-b w-full">Add existing Group</div>
                    </div>
                </div>

                <div className="mt-4 bg-white">
                    <p className="text-[14px] text-[#a52729] leading-[17px] py-[14px] px-[30px]">GROUPS IN THIS COMMUNITY</p>
                    <div className="flex items-stretch h-[72px] w-full bg-white">
                        <div className="flex items-center justify-center h-[72px] w-[76px] shrink-0">
                            <div className="h-[48px] w-[48px] flex items-center justify-center bg-[#D9FDD3] rounded-full">
                                <svg viewBox="0 0 212 212" height="40" width="40" preserveAspectRatio="xMidYMid meet" class="jn5oezdz" fill="#008069">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M89.5827 83.703C89.5827 82.9635 89.9699 82.278 90.6032 81.8962L119.16 64.6781C122.059 62.8863 125.902 64.8549 125.902 68.1319V137.101C125.902 140.308 122.206 142.288 119.301 140.639L90.6507 124.368C89.9905 123.993 89.5827 123.293 89.5827 122.534V83.703ZM46 96.2616C46 88.6676 52.5042 82.5114 60.5276 82.5114H80.209C81.3743 82.5114 82.3189 83.4561 82.3189 84.6213V121.652C82.3189 122.817 81.3743 123.762 80.209 123.762H75.6957L82.4837 147.779C83.0001 149.606 81.9267 151.465 80.0861 151.931L72.2787 153.908C70.4381 154.374 68.5274 153.271 68.0111 151.443L60.2202 123.878C60.2089 123.838 60.1983 123.798 60.1886 123.758C52.3218 123.588 46 117.498 46 110.012V96.2616ZM161.187 71.6946C160.374 70.6624 158.814 70.5245 157.751 71.3468L154.102 74.1721C153.034 74.9983 152.876 76.4799 153.682 77.5251C159.328 84.8487 162.362 93.7105 162.303 102.817C162.244 111.919 159.096 120.741 153.361 127.996C152.536 129.039 152.66 130.516 153.704 131.345L157.352 134.241C158.396 135.07 159.964 134.936 160.799 133.901C167.981 125.002 171.926 114.114 171.999 102.874C172.072 91.624 168.263 80.6813 161.187 71.6946ZM145.914 81.0162C145.113 79.9754 143.55 79.8499 142.494 80.6798L138.867 83.5311C137.806 84.3649 137.664 85.8456 138.444 86.9079C141.82 91.5035 143.641 96.9856 143.626 102.62C143.612 108.251 141.767 113.72 138.373 118.298C137.582 119.364 137.702 120.84 138.746 121.669L142.394 124.564C143.438 125.393 145.009 125.261 145.823 124.211C150.664 117.973 153.303 110.423 153.323 102.642C153.342 94.8522 150.735 87.2808 145.914 81.0162Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center text-[17px] text-[#111b21] border-b w-full">
                            <div>
                                <p className="">ad</p>
                                <p className="text-[14px] leading-[20px] text-[#667781]">Announcement group</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full flex justify-center pt-[24px] pb-[40px]">
                    <div className="rounded-full bg-[#A52729] flex items-center justify-center h-[46px] w-[46px] cursor-pointer" onClick={props.communityCreationResult}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="white" d="M8,17.1l-5.2-5.2l-1.7,1.7l6.9,7L22.9,5.7L21.2,4L8,17.1z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Add_community_groups;