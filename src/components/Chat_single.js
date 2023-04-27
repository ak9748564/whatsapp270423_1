import dp from "./images/dp.jfif";
import dp_normal from "./images/dp_profile_normal.jfif";
import { useEffect, useState } from "react";
import harsh_sir_dp from "./images/harsh_sir_dp.jfif";
import neeraj_dp from "./images/neeraj_dp.jpeg";
import rishabh_dp from "./images/rishabh_dp.jfif";
import rishi_mam_dp from "./images/rishi_mam_dp.jfif";

import Chat_section from "./chat_section/Chat_section";
import './Chats_details';

function Chat_single(props){
    const [ searchMessages, setSearchMessages ] = useState("");
    const [ profileDetails, setProfileDetails ] = useState("");

    const [ audioCall, setAudioCall ] = useState(false);
    const [ videoCall, setVideoCall ] = useState(false);

    var chat = [
        {
          "name": "John Doe",
          "message": "Hello, Rishu how are you?",
          "time": "15:30",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": false,
        },
        {
          "name": "John Doe",
          "message": "Hi, I am fine. What about you? How is your family?",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": true,
        },
        {
          "name": "John Doe",
          "message": "Are you working right now?",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": false,
        },
        {
          "name": "John Doe",
          "message": "??",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": false,
        },
        {
          "name": "John Doe",
          "message": "Yes I am working. I am working on a new project.",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": true,
        },
        {
          "name": "John Doe",
          "message": "Please don't disturb me right now.",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": true,
        },
        {
          "name": "John Doe",
          "message": "OKay, I will call you later.",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": false,
        },
        {
          "name": "John Doe",
          "message": "Bye",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": false,
        },
        {
          "name": "John Doe",
          "message": "👋",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": false,
        },
        {
          "name": "John Doe",
          "message": "👋",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": true,
          "isSentByMe": true,
        },
        {
          "name": "John Doe",
          "message":
              "Hi, are you there? I am waiting for your reply. Please reply me. it's urgent. you have to reply me.",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": false,
          "isSentByMe": false,
        },
        {
          "name": "John Doe",
          "message":
              "Okay I am replying you. I am sorry for the late reply. I was busy in my work.",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": false,
          "isSentByMe": true,
        },
        {
          "name": "John Doe",
          "message": "😀",
          "time": "15:31",
          "avatar_url":
              "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
          "isMessageRead": false,
          "isSentByMe": true,
        },
      ];
   
    return(
        <div className="chat_single flex w-full">

            <div className="grow shrink">
                <Chat_section profileDetails={()=>setProfileDetails(true)} searchMessages={()=>setSearchMessages(true)} videoCall={()=>setVideoCall(true)} audioCall={()=>setAudioCall(true)}/>
            </div>
            
            <div className={ searchMessages === "" ? "h-0 w-[0px] overflow-hidden" : searchMessages ? "animate-search_messages_full overflow-hidden w-full h-screen grow-0 shrink-0" : "animate-search_messages_zero overflow-hidden w-full h-screen"  }>
                <div className="h-[60px] bg-[#1E2321] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#ffffffe6" enable-background="new 0 0 24 24" onClick={()=>setSearchMessages(false)}>
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

            <div className={ profileDetails === "" ? "h-0 w-[0px] overflow-hidden" : profileDetails ? "animate-search_messages_full overflow-hidden w-full h-screen" : "animate-search_messages_zero overflow-hidden w-full h-screen"  }>
                <div className="profile_self hidden min-w-[400px]">
                    <div className="h-[60px] bg-[#1E2321] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#ffffffe6" enable-background="new 0 0 24 24" onClick={()=>setProfileDetails(false)}>
                            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                        </svg>
                        <p className="text-white/90 text-[16px]">Contact info</p>
                    </div>
                    <div className="overflow-y-scroll bg-[#EFF1F4] y_scroll">
                        <div className="p-6 bg-white shadow-sm">
                            <div className="h-[200px] w-[200px] rounded-full bg-cover bg-center m-auto" style={{backgroundImage:`url(${dp})`}}></div>
                            <p className="text-center pt-5 text-[24px] text-[#3b4a54]">Arman (You)</p>
                            <p className="text-center text-[16px] text-[#667781]">+91 99539 52112</p>
                        </div>
                        <div className="mt-3 bg-white px-[30px] pt-[19px] pb-[17px]">
                            <p className="text-[15px] text-[#667781] leading-[23px]">About</p>
                            <p className="text-[17px] text-[#111b21] leading-[23px]">Waiting for u..... My Life.</p>
                        </div>
                        <div className="mt-3 bg-white">
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 15">
                                        <path fill="#667781" d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Starred messages</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 36 36" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" fill="#667781">
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18 31.5C18.0909 31.5 18.1817 31.4991 18.2722 31.4973C19.1005 31.4809 19.7586 30.7961 19.7422 29.9679C19.7258 29.1396 19.041 28.4815 18.2128 28.4979C18.142 28.4993 18.0711 28.5 18 28.5V31.5ZM18 7.5C18.0711 7.5 18.142 7.5007 18.2128 7.50211C19.041 7.51853 19.7258 6.86039 19.7422 6.03213C19.7586 5.20387 19.1005 4.51912 18.2722 4.5027C18.1817 4.5009 18.0909 4.5 18 4.5V7.5ZM24.5153 6.17374C23.7901 5.77341 22.8776 6.03683 22.4772 6.76211C22.0769 7.48739 22.3403 8.39988 23.0656 8.8002C23.1891 8.86838 23.3111 8.93898 23.4316 9.01195C24.1401 9.44118 25.0625 9.21475 25.4917 8.5062C25.921 7.79765 25.6945 6.87529 24.986 6.44605C24.8311 6.35223 24.6742 6.26144 24.5153 6.17374ZM29.554 11.014C29.1247 10.3055 28.2024 10.079 27.4938 10.5083C26.7852 10.9375 26.5588 11.8599 26.9881 12.5684C27.061 12.6889 27.1316 12.8109 27.1998 12.9344C27.6001 13.6597 28.5126 13.9231 29.2379 13.5228C29.9632 13.1224 30.2266 12.2099 29.8263 11.4847C29.7386 11.3258 29.6478 11.1689 29.554 11.014ZM31.4973 17.7278C31.4809 16.8995 30.7961 16.2414 29.9679 16.2578C29.1396 16.2742 28.4815 16.959 28.4979 17.7872C28.4993 17.858 28.5 17.9289 28.5 18C28.5 18.0711 28.4993 18.142 28.4979 18.2128C28.4815 19.041 29.1396 19.7258 29.9679 19.7422C30.7961 19.7586 31.4809 19.1005 31.4973 18.2722C31.4991 18.1817 31.5 18.0909 31.5 18C31.5 17.9091 31.4991 17.8183 31.4973 17.7278ZM29.8263 24.5153C30.2266 23.7901 29.9632 22.8776 29.2379 22.4772C28.5126 22.0769 27.6001 22.3403 27.1998 23.0656C27.1316 23.1891 27.061 23.3111 26.9881 23.4316C26.5588 24.1401 26.7852 25.0625 27.4938 25.4917C28.2024 25.921 29.1247 25.6945 29.554 24.986C29.6478 24.8311 29.7386 24.6742 29.8263 24.5153ZM24.986 29.554C25.6945 29.1247 25.921 28.2024 25.4917 27.4938C25.0625 26.7852 24.1401 26.5588 23.4316 26.9881C23.3111 27.061 23.1891 27.1316 23.0656 27.1998C22.3403 27.6001 22.0769 28.5126 22.4772 29.2379C22.8776 29.9632 23.7901 30.2266 24.5153 29.8263C24.6742 29.7386 24.8311 29.6478 24.986 29.554Z"></path>
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 4.5C18 4.5 17.9999 4.5 17.9998 4.5C10.5439 4.5 4.49976 10.5442 4.49976 18C4.49976 25.4558 10.5439 31.5 17.9998 31.5C17.9999 31.5 18 31.5 18.0001 31.5V28.5C18 28.5 17.9999 28.5 17.9998 28.5C12.2008 28.5 7.49976 23.799 7.49976 18C7.49976 12.201 12.2008 7.5 17.9998 7.5C17.9999 7.5 18 7.5 18.0001 7.5V4.5Z"></path>
                                        <path fill="#667781" d="M23.3247 12.0107C23.669 11.7525 24.1507 11.7867 24.455 12.091V12.091C24.7593 12.3953 24.7935 12.877 24.5353 13.2213L19.9714 19.3066C19.2589 20.2566 17.8701 20.3553 17.0304 19.5156V19.5156C16.1907 18.6759 16.2894 17.2871 17.2394 16.5746L23.3247 12.0107Z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Disappearing messages</p>
                                        <p className="text-[14px] text-[#8696a0]">Off</p>
                                    </div>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex min-h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M17.3,7.6h-0.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6,3.3,7.6,5.8v1.8H6.7c-1,0-1.8,0.8-1.8,1.8v8.9 c0,1,0.8,1.8,1.8,1.8h10.6c1,0,1.8-0.8,1.8-1.8V9.4C19.1,8.4,18.3,7.6,17.3,7.6z M12,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,15.8,12,15.8z M14.7,7.6H9.2V5.8c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v1.8C14.6,7.6,14.7,7.6,14.7,7.6z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Encryption</p>
                                        <p className="text-[14px] text-[#8696a0]">Messages are end to end encrypted. Click to verify</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#EA0038" d="M6,18c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H6V18z M19,3h-3.5l-1-1h-5l-1,1H5v2h14V3z"></path>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Delete Chat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_normal hidden w-[400px]">
                    <div className="h-[60px] bg-[#1E2321] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#ffffffe6" enable-background="new 0 0 24 24" onClick={()=>setProfileDetails(false)}>
                            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                        </svg>
                        <p className="text-white/90 text-[16px]">Contact info</p>
                    </div>
                    <div className="overflow-y-scroll bg-[#EFF1F4] y_scroll">
                        <div className="p-6 bg-white shadow-sm">
                            <div className="h-[200px] w-[200px] rounded-full bg-cover bg-center m-auto" style={{backgroundImage:`url(${dp_normal})`}}></div>
                            <p className="text-center pt-5 text-[24px] text-[#3b4a54]">Hasmuddin Bhaiya</p>
                            <p className="text-center text-[16px] text-[#667781]">+91 93553178821</p>
                        </div>
                        <div className="mt-3 bg-white px-[30px] pt-[19px] pb-[17px]">
                            <p className="text-[15px] text-[#667781] leading-[23px]">About</p>
                            <p className="text-[17px] text-[#111b21] leading-[23px]">Hey there! I am using Whatsapp.</p>
                        </div>
                        <div className="mt-3 bg-white">
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 15">
                                        <path fill="#667781" d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Starred messages</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M12,21.7c0.9,0,1.7-0.8,1.7-1.7h-3.4C10.3,20.9,11.1,21.7,12,21.7z M17.6,16.5v-4.7 c0-2.7-1.8-4.8-4.3-5.4V5.8c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v0.6C8.2,7,6.4,9.1,6.4,11.8v4.7l-1.7,1.7v0.9h14.6v-0.9 L17.6,16.5z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Mute Notifications</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 36 36" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" fill="#667781">
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18 31.5C18.0909 31.5 18.1817 31.4991 18.2722 31.4973C19.1005 31.4809 19.7586 30.7961 19.7422 29.9679C19.7258 29.1396 19.041 28.4815 18.2128 28.4979C18.142 28.4993 18.0711 28.5 18 28.5V31.5ZM18 7.5C18.0711 7.5 18.142 7.5007 18.2128 7.50211C19.041 7.51853 19.7258 6.86039 19.7422 6.03213C19.7586 5.20387 19.1005 4.51912 18.2722 4.5027C18.1817 4.5009 18.0909 4.5 18 4.5V7.5ZM24.5153 6.17374C23.7901 5.77341 22.8776 6.03683 22.4772 6.76211C22.0769 7.48739 22.3403 8.39988 23.0656 8.8002C23.1891 8.86838 23.3111 8.93898 23.4316 9.01195C24.1401 9.44118 25.0625 9.21475 25.4917 8.5062C25.921 7.79765 25.6945 6.87529 24.986 6.44605C24.8311 6.35223 24.6742 6.26144 24.5153 6.17374ZM29.554 11.014C29.1247 10.3055 28.2024 10.079 27.4938 10.5083C26.7852 10.9375 26.5588 11.8599 26.9881 12.5684C27.061 12.6889 27.1316 12.8109 27.1998 12.9344C27.6001 13.6597 28.5126 13.9231 29.2379 13.5228C29.9632 13.1224 30.2266 12.2099 29.8263 11.4847C29.7386 11.3258 29.6478 11.1689 29.554 11.014ZM31.4973 17.7278C31.4809 16.8995 30.7961 16.2414 29.9679 16.2578C29.1396 16.2742 28.4815 16.959 28.4979 17.7872C28.4993 17.858 28.5 17.9289 28.5 18C28.5 18.0711 28.4993 18.142 28.4979 18.2128C28.4815 19.041 29.1396 19.7258 29.9679 19.7422C30.7961 19.7586 31.4809 19.1005 31.4973 18.2722C31.4991 18.1817 31.5 18.0909 31.5 18C31.5 17.9091 31.4991 17.8183 31.4973 17.7278ZM29.8263 24.5153C30.2266 23.7901 29.9632 22.8776 29.2379 22.4772C28.5126 22.0769 27.6001 22.3403 27.1998 23.0656C27.1316 23.1891 27.061 23.3111 26.9881 23.4316C26.5588 24.1401 26.7852 25.0625 27.4938 25.4917C28.2024 25.921 29.1247 25.6945 29.554 24.986C29.6478 24.8311 29.7386 24.6742 29.8263 24.5153ZM24.986 29.554C25.6945 29.1247 25.921 28.2024 25.4917 27.4938C25.0625 26.7852 24.1401 26.5588 23.4316 26.9881C23.3111 27.061 23.1891 27.1316 23.0656 27.1998C22.3403 27.6001 22.0769 28.5126 22.4772 29.2379C22.8776 29.9632 23.7901 30.2266 24.5153 29.8263C24.6742 29.7386 24.8311 29.6478 24.986 29.554Z"></path>
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 4.5C18 4.5 17.9999 4.5 17.9998 4.5C10.5439 4.5 4.49976 10.5442 4.49976 18C4.49976 25.4558 10.5439 31.5 17.9998 31.5C17.9999 31.5 18 31.5 18.0001 31.5V28.5C18 28.5 17.9999 28.5 17.9998 28.5C12.2008 28.5 7.49976 23.799 7.49976 18C7.49976 12.201 12.2008 7.5 17.9998 7.5C17.9999 7.5 18 7.5 18.0001 7.5V4.5Z"></path>
                                        <path fill="#667781" d="M23.3247 12.0107C23.669 11.7525 24.1507 11.7867 24.455 12.091V12.091C24.7593 12.3953 24.7935 12.877 24.5353 13.2213L19.9714 19.3066C19.2589 20.2566 17.8701 20.3553 17.0304 19.5156V19.5156C16.1907 18.6759 16.2894 17.2871 17.2394 16.5746L23.3247 12.0107Z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Disappearing messages</p>
                                        <p className="text-[14px] text-[#8696a0]">Off</p>
                                    </div>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex min-h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M17.3,7.6h-0.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6,3.3,7.6,5.8v1.8H6.7c-1,0-1.8,0.8-1.8,1.8v8.9 c0,1,0.8,1.8,1.8,1.8h10.6c1,0,1.8-0.8,1.8-1.8V9.4C19.1,8.4,18.3,7.6,17.3,7.6z M12,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,15.8,12,15.8z M14.7,7.6H9.2V5.8c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v1.8C14.6,7.6,14.7,7.6,14.7,7.6z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Encryption</p>
                                        <p className="text-[14px] text-[#8696a0]">Messages are end to end encrypted. Click to verify</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Block">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#EA0038" d="M12,2.8c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.8,12,2.8z  M4.7,12.5c0-4,3.3-7.3,7.3-7.3c1.6,0,3.1,0.5,4.3,1.4L6.1,16.8C5.2,15.6,4.7,14.1,4.7,12.5z M12,19.8c-1.6,0-3-0.5-4.2-1.4 L17.9,8.3c0.9,1.2,1.4,2.6,1.4,4.2C19.3,16.5,16,19.8,12,19.8z"></path>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Block Hasmuddin Bhaiya</p>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Report">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <g>
                                            <g id="thumb-down">
                                                <path fill="#ea0038" d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Report Hasmuddin Bhaiya</p>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Delete Chat">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#EA0038" d="M6,18c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H6V18z M19,3h-3.5l-1-1h-5l-1,1H5v2h14V3z"></path>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Delete Chat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_business min-w-[400px]">
                    <div className="h-[60px] bg-[#1E2321] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#ffffffe6" enable-background="new 0 0 24 24" onClick={()=>setProfileDetails(false)}>
                            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                        </svg>
                        <p className="text-white/90 text-[16px]">Contact info</p>
                    </div>
                    <div className="overflow-y-scroll bg-[#EFF1F4] y_scroll">
                        <div className="px-6 pt-6 bg-white shadow-sm">
                            <div className="h-[200px] w-[200px] rounded-full bg-cover bg-center m-auto" style={{backgroundImage:`url(${rishi_mam_dp})`}}></div>
                            <p className="text-center pt-5 text-[24px] text-[#3b4a54]">Rishu Singh</p>
                            <p className="text-center text-[16px] text-[#667781] flex items-center justify-center">Rishi_mam</p>
                            <p className="text-[14px] text-[#667781] leading-[20px] text-center mt-1">Education</p>
                            <div className="flex justify-center mt-4">
                                <div>
                                    <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                                        <svg viewBox="0 0 21 16" height="16" width="21" preserveAspectRatio="xMidYMid meet" class="" fill="none">
                                            <path d="M12.778 1.31318C12.778 0.590175 13.651 0.228175 14.161 0.739175L20.206 6.79017C20.2813 6.8654 20.341 6.95472 20.3817 7.05304C20.4225 7.15136 20.4435 7.25675 20.4435 7.36317C20.4435 7.4696 20.4225 7.57499 20.3817 7.67331C20.341 7.77163 20.2813 7.86095 20.206 7.93617L14.161 13.9872C14.0476 14.1006 13.9032 14.1779 13.7459 14.2091C13.5886 14.2404 13.4256 14.2243 13.2775 14.1628C13.1294 14.1013 13.0028 13.9973 12.9139 13.8638C12.825 13.7304 12.7777 13.5735 12.778 13.4132V10.6812C7.68197 10.6812 3.94897 12.1362 1.17397 15.2922C0.927967 15.5712 0.471967 15.3342 0.571967 14.9762C2.00197 9.80317 5.49697 4.97218 12.778 3.93118V1.31318Z" fill="#008869"></path>
                                        </svg>
                                    </div>
                                    <p className="text-[#008069] text-[13px] text-center cursor-pointer">Share</p>
                                </div>
                            </div>
                            <div className="border-t flex items-center justify-between h-[60px]">
                                <p className="text-[14px] text-[#3b4a54]">This is a business account</p>
                                <svg viewBox="0 0 24 24" height="16" width="16" preserveAspectRatio="xMidYMid meet" class="jq3rn4u7 dh5rsm73 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                    <path fill="#008069" d="M12,1.5C6.204,1.5,1.5,6.204,1.5,12S6.204,22.5,12,22.5 S22.5,17.796,22.5,12S17.796,1.5,12,1.5 M12,20.4c-4.63,0-8.4-3.769-8.4-8.4S7.37,3.6,12,3.6c4.629,0,8.4,3.77,8.4,8.4 S16.629,20.4,12,20.4z M12,17.25c0.58,0,1.05-0.47,1.05-1.05v-5.25c0-0.58-0.47-1.05-1.05-1.05c-0.58,0-1.05,0.47-1.05,1.05v5.25 C10.95,16.78,11.42,17.25,12,17.25z M12,8.85c0.58,0,1.05-0.47,1.05-1.05S12.58,6.75,12,6.75c-0.58,0-1.05,0.47-1.05,1.05 S11.42,8.85,12,8.85z"></path>
                                </svg>
                            </div>
                        </div>
                        
                        <div className="mt-3 bg-white">
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 15">
                                        <path fill="#667781" d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Starred messages</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M12,21.7c0.9,0,1.7-0.8,1.7-1.7h-3.4C10.3,20.9,11.1,21.7,12,21.7z M17.6,16.5v-4.7 c0-2.7-1.8-4.8-4.3-5.4V5.8c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v0.6C8.2,7,6.4,9.1,6.4,11.8v4.7l-1.7,1.7v0.9h14.6v-0.9 L17.6,16.5z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Mute Notifications</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 36 36" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" fill="#667781">
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18 31.5C18.0909 31.5 18.1817 31.4991 18.2722 31.4973C19.1005 31.4809 19.7586 30.7961 19.7422 29.9679C19.7258 29.1396 19.041 28.4815 18.2128 28.4979C18.142 28.4993 18.0711 28.5 18 28.5V31.5ZM18 7.5C18.0711 7.5 18.142 7.5007 18.2128 7.50211C19.041 7.51853 19.7258 6.86039 19.7422 6.03213C19.7586 5.20387 19.1005 4.51912 18.2722 4.5027C18.1817 4.5009 18.0909 4.5 18 4.5V7.5ZM24.5153 6.17374C23.7901 5.77341 22.8776 6.03683 22.4772 6.76211C22.0769 7.48739 22.3403 8.39988 23.0656 8.8002C23.1891 8.86838 23.3111 8.93898 23.4316 9.01195C24.1401 9.44118 25.0625 9.21475 25.4917 8.5062C25.921 7.79765 25.6945 6.87529 24.986 6.44605C24.8311 6.35223 24.6742 6.26144 24.5153 6.17374ZM29.554 11.014C29.1247 10.3055 28.2024 10.079 27.4938 10.5083C26.7852 10.9375 26.5588 11.8599 26.9881 12.5684C27.061 12.6889 27.1316 12.8109 27.1998 12.9344C27.6001 13.6597 28.5126 13.9231 29.2379 13.5228C29.9632 13.1224 30.2266 12.2099 29.8263 11.4847C29.7386 11.3258 29.6478 11.1689 29.554 11.014ZM31.4973 17.7278C31.4809 16.8995 30.7961 16.2414 29.9679 16.2578C29.1396 16.2742 28.4815 16.959 28.4979 17.7872C28.4993 17.858 28.5 17.9289 28.5 18C28.5 18.0711 28.4993 18.142 28.4979 18.2128C28.4815 19.041 29.1396 19.7258 29.9679 19.7422C30.7961 19.7586 31.4809 19.1005 31.4973 18.2722C31.4991 18.1817 31.5 18.0909 31.5 18C31.5 17.9091 31.4991 17.8183 31.4973 17.7278ZM29.8263 24.5153C30.2266 23.7901 29.9632 22.8776 29.2379 22.4772C28.5126 22.0769 27.6001 22.3403 27.1998 23.0656C27.1316 23.1891 27.061 23.3111 26.9881 23.4316C26.5588 24.1401 26.7852 25.0625 27.4938 25.4917C28.2024 25.921 29.1247 25.6945 29.554 24.986C29.6478 24.8311 29.7386 24.6742 29.8263 24.5153ZM24.986 29.554C25.6945 29.1247 25.921 28.2024 25.4917 27.4938C25.0625 26.7852 24.1401 26.5588 23.4316 26.9881C23.3111 27.061 23.1891 27.1316 23.0656 27.1998C22.3403 27.6001 22.0769 28.5126 22.4772 29.2379C22.8776 29.9632 23.7901 30.2266 24.5153 29.8263C24.6742 29.7386 24.8311 29.6478 24.986 29.554Z"></path>
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 4.5C18 4.5 17.9999 4.5 17.9998 4.5C10.5439 4.5 4.49976 10.5442 4.49976 18C4.49976 25.4558 10.5439 31.5 17.9998 31.5C17.9999 31.5 18 31.5 18.0001 31.5V28.5C18 28.5 17.9999 28.5 17.9998 28.5C12.2008 28.5 7.49976 23.799 7.49976 18C7.49976 12.201 12.2008 7.5 17.9998 7.5C17.9999 7.5 18 7.5 18.0001 7.5V4.5Z"></path>
                                        <path fill="#667781" d="M23.3247 12.0107C23.669 11.7525 24.1507 11.7867 24.455 12.091V12.091C24.7593 12.3953 24.7935 12.877 24.5353 13.2213L19.9714 19.3066C19.2589 20.2566 17.8701 20.3553 17.0304 19.5156V19.5156C16.1907 18.6759 16.2894 17.2871 17.2394 16.5746L23.3247 12.0107Z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Disappearing messages</p>
                                        <p className="text-[14px] text-[#8696a0]">Off</p>
                                    </div>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex min-h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M17.3,7.6h-0.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6,3.3,7.6,5.8v1.8H6.7c-1,0-1.8,0.8-1.8,1.8v8.9 c0,1,0.8,1.8,1.8,1.8h10.6c1,0,1.8-0.8,1.8-1.8V9.4C19.1,8.4,18.3,7.6,17.3,7.6z M12,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,15.8,12,15.8z M14.7,7.6H9.2V5.8c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v1.8C14.6,7.6,14.7,7.6,14.7,7.6z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Encryption</p>
                                        <p className="text-[14px] text-[#8696a0]">Messages are end to end encrypted. Click to verify</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-[15px] text-[#667781] px-7">About and phone number</p>
                                <p className="text-[17px] text-[#111b21] px-7 py-3">OM NAMAH SHIVAAY</p>
                                <p className="text-[17px] text-[#111b21] px-7 pb-4">+91 96250 88638</p>
                            </div>
                        </div> 
                        <div className="mt-3 bg-white px-[30px] pt-[17px]">
                            <p className="text-[15px] text-[#667781]">1 group in common</p>
                            <div className="h-[68px] cursor-pointer w-full flex items-center">
                                <div className="w-[40px] h-[40px] mr-[15px] grow-0 shrink-0">
                                    <img src={rishi_mam_dp} alt="" className="h-[40px] w-[40px] rounded-full"/>
                                    <svg viewBox="0 0 212 212" height="40" width="40" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                        <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                        <g>
                                            <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                            <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="grow h-[68px] flex items-center">
                                    <div className="h-[42px] w-full pr-[10px]">
                                        <div className="h-[22px] flex items-center justify-between">
                                            <div className="text-[#111b21] text-[17px]">Harsha Web</div>
                                        </div>
                                        <div className="h-[20px]">
                                            <div className="flex items-center">
                                                <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1 hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                                    <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                                </svg>
                                                <div className="flex items-center">
                                                    <svg viewBox="0 0 16 20" height="20" width="16" preserveAspectRatio="xMidYMid meet" class="mr-[2px] hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 20">
                                                        <path fill="#8696a0" d="M13.822,4.668H7.14l-1.068-1.09C5.922,3.425,5.624,3.3,5.409,3.3H3.531 c-0.214,0-0.51,0.128-0.656,0.285L1.276,5.296C1.13,5.453,1.01,5.756,1.01,5.971v1.06c0,0.001-0.001,0.002-0.001,0.003v6.983 c0,0.646,0.524,1.17,1.17,1.17h11.643c0.646,0,1.17-0.524,1.17-1.17v-8.18C14.992,5.191,14.468,4.668,13.822,4.668z M7.84,13.298 c-1.875,0-3.395-1.52-3.395-3.396c0-1.875,1.52-3.395,3.395-3.395s3.396,1.52,3.396,3.395C11.236,11.778,9.716,13.298,7.84,13.298z  M7.84,7.511c-1.321,0-2.392,1.071-2.392,2.392s1.071,2.392,2.392,2.392s2.392-1.071,2.392-2.392S9.161,7.511,7.84,7.511z"></path>
                                                    </svg>
                                                    <p className="text-[#667781] text-[14px] leading-[20px] text-ellipsis overflow-hidden ... h-[20px]">You, Harsh_sir, Neeraj_Bro_Office, Rishabh_singh, Rishi_mam, Sahil_khatri</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="mt-3 bg-white"> 
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Block">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#EA0038" d="M12,2.8c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.8,12,2.8z  M4.7,12.5c0-4,3.3-7.3,7.3-7.3c1.6,0,3.1,0.5,4.3,1.4L6.1,16.8C5.2,15.6,4.7,14.1,4.7,12.5z M12,19.8c-1.6,0-3-0.5-4.2-1.4 L17.9,8.3c0.9,1.2,1.4,2.6,1.4,4.2C19.3,16.5,16,19.8,12,19.8z"></path>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Block Rishi_mam</p>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Report">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <g>
                                            <g id="thumb-down">
                                                <path fill="#ea0038" d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Report business</p>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Delete Chat">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#EA0038" d="M6,18c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H6V18z M19,3h-3.5l-1-1h-5l-1,1H5v2h14V3z"></path>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Delete Chat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_group hidden w-[400px]">
                    <div className="h-[60px] bg-[#1E2321] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#ffffffe6" enable-background="new 0 0 24 24" onClick={()=>setProfileDetails(false)}>
                            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                        </svg>
                        <p className="text-white/90 text-[16px]">Group info</p>
                    </div>
                    <div className="overflow-y-scroll bg-[#EFF1F4] y_scroll">
                        <div className="p-6 bg-white shadow-sm">
                            <div className="h-[200px] w-[200px] rounded-full bg-cover bg-center m-auto" style={{backgroundImage:`url(${dp_normal})`}}></div>
                            <p className="text-center pt-5 text-[24px] text-[#3b4a54]">Harsha Web</p>
                            <p className="text-center text-[16px] text-[#667781] flex items-center justify-center">
                                <div className="">Group</div>
                                <div className="h-[4px] w-[4px] rounded-full mx-2 bg-[#667781]"></div>
                                <div>12 participants</div>
                            </p>
                        </div>
                        <div className="mt-3 bg-white px-[30px] pt-[19px] pb-[17px]">
                            <p className="text-[14px] text-[#a52729] leading-[23px]">Add group description</p>
                            <p className="text-[14px] text-[#8696a0] leading-[23px]">Group created by Harsh_sir, on 13/10/2022 at 11:19</p>
                        </div>
                        <div className="mt-3 bg-white pt-[17px]">
                            <div className="flex items-center justify-between px-[30px]">
                                <p className="text-[15px] leading-[23px] text-[#667781]">12 participants</p>
                                <div>
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="h-[68px] cursor-pointer w-full flex items-center px-[15px] hover:bg-[#F0F2F5] hover:transition-all">
                                <div className="w-[40px] h-[40px] mx-[14px]">
                                    <img src={dp} alt="" className="h-[40px] w-[40px] rounded-full"/>
                                    <svg viewBox="0 0 212 212" height="40" width="40" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                        <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                        <g>
                                            <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                            <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="grow h-[68px] flex items-center">
                                    <div className="h-[42px] w-full pr-[10px]">
                                        <div className="h-[22px] flex items-center justify-between">
                                            <div className="text-[#111b21] text-[17px]">You</div>
                                            <div className="text-[11px] text-[#1b8748] bg-[#e7fce3] leading-[11px] px-1 py-[2px]">Group Admin</div>
                                        </div>
                                        <div className="h-[20px]">
                                            <div className="flex items-center">
                                                <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1 hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                                    <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                                </svg>
                                                <div className="flex items-center">
                                                    <svg viewBox="0 0 16 20" height="20" width="16" preserveAspectRatio="xMidYMid meet" class="mr-[2px] hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 20">
                                                        <path fill="#8696a0" d="M13.822,4.668H7.14l-1.068-1.09C5.922,3.425,5.624,3.3,5.409,3.3H3.531 c-0.214,0-0.51,0.128-0.656,0.285L1.276,5.296C1.13,5.453,1.01,5.756,1.01,5.971v1.06c0,0.001-0.001,0.002-0.001,0.003v6.983 c0,0.646,0.524,1.17,1.17,1.17h11.643c0.646,0,1.17-0.524,1.17-1.17v-8.18C14.992,5.191,14.468,4.668,13.822,4.668z M7.84,13.298 c-1.875,0-3.395-1.52-3.395-3.396c0-1.875,1.52-3.395,3.395-3.395s3.396,1.52,3.396,3.395C11.236,11.778,9.716,13.298,7.84,13.298z  M7.84,7.511c-1.321,0-2.392,1.071-2.392,2.392s1.071,2.392,2.392,2.392s2.392-1.071,2.392-2.392S9.161,7.511,7.84,7.511z"></path>
                                                    </svg>
                                                    <p className="text-[#667781] text-[14px] leading-[20px]">Waiting for u..... My Life.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[68px] cursor-pointer w-full flex items-center px-[15px] hover:bg-[#F0F2F5] hover:transition-all">
                                <div className="w-[40px] h-[40px] mx-[14px]">
                                    <img src={harsh_sir_dp} alt="" className="h-[40px] w-[40px] rounded-full"/>
                                    <svg viewBox="0 0 212 212" height="40" width="40" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                        <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                        <g>
                                            <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                            <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="grow h-[68px] flex items-center">
                                    <div className="h-[42px] w-full pr-[10px]">
                                        <div className="h-[22px] flex items-center justify-between">
                                            <div className="text-[#111b21] text-[17px]">Harsh_sir</div>
                                            <div className="text-[11px] text-[#1b8748] bg-[#e7fce3] leading-[11px] px-1 py-[2px]">Group Admin</div>
                                        </div>
                                        <div className="h-[20px]">
                                            <div className="flex items-center">
                                                <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1 hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                                    <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                                </svg>
                                                <div className="flex items-center">
                                                    <svg viewBox="0 0 16 20" height="20" width="16" preserveAspectRatio="xMidYMid meet" class="mr-[2px] hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 20">
                                                        <path fill="#8696a0" d="M13.822,4.668H7.14l-1.068-1.09C5.922,3.425,5.624,3.3,5.409,3.3H3.531 c-0.214,0-0.51,0.128-0.656,0.285L1.276,5.296C1.13,5.453,1.01,5.756,1.01,5.971v1.06c0,0.001-0.001,0.002-0.001,0.003v6.983 c0,0.646,0.524,1.17,1.17,1.17h11.643c0.646,0,1.17-0.524,1.17-1.17v-8.18C14.992,5.191,14.468,4.668,13.822,4.668z M7.84,13.298 c-1.875,0-3.395-1.52-3.395-3.396c0-1.875,1.52-3.395,3.395-3.395s3.396,1.52,3.396,3.395C11.236,11.778,9.716,13.298,7.84,13.298z  M7.84,7.511c-1.321,0-2.392,1.071-2.392,2.392s1.071,2.392,2.392,2.392s2.392-1.071,2.392-2.392S9.161,7.511,7.84,7.511z"></path>
                                                    </svg>
                                                    <p className="text-[#667781] text-[14px] leading-[20px]">https://harshaweb.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[68px] cursor-pointer w-full flex items-center px-[15px] hover:bg-[#F0F2F5] hover:transition-all">
                                <div className="w-[40px] h-[40px] mx-[14px]">
                                    <img src={neeraj_dp} alt="" className="h-[40px] w-[40px] rounded-full"/>
                                    <svg viewBox="0 0 212 212" height="40" width="40" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                        <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                        <g>
                                            <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                            <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="grow h-[68px] flex items-center">
                                    <div className="h-[42px] w-full pr-[10px]">
                                        <div className="h-[22px] flex items-center justify-between">
                                            <div className="text-[#111b21] text-[17px]">Neeraj_Bro_Office</div>
                                            <div className="text-[11px] text-[#1b8748] bg-[#e7fce3] leading-[11px] px-1 py-[2px]">Group Admin</div>
                                        </div>
                                        <div className="h-[20px]">
                                            <div className="flex items-center">
                                                <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1 hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                                    <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                                </svg>
                                                <div className="flex items-center">
                                                    <svg viewBox="0 0 16 20" height="20" width="16" preserveAspectRatio="xMidYMid meet" class="mr-[2px] hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 20">
                                                        <path fill="#8696a0" d="M13.822,4.668H7.14l-1.068-1.09C5.922,3.425,5.624,3.3,5.409,3.3H3.531 c-0.214,0-0.51,0.128-0.656,0.285L1.276,5.296C1.13,5.453,1.01,5.756,1.01,5.971v1.06c0,0.001-0.001,0.002-0.001,0.003v6.983 c0,0.646,0.524,1.17,1.17,1.17h11.643c0.646,0,1.17-0.524,1.17-1.17v-8.18C14.992,5.191,14.468,4.668,13.822,4.668z M7.84,13.298 c-1.875,0-3.395-1.52-3.395-3.396c0-1.875,1.52-3.395,3.395-3.395s3.396,1.52,3.396,3.395C11.236,11.778,9.716,13.298,7.84,13.298z  M7.84,7.511c-1.321,0-2.392,1.071-2.392,2.392s1.071,2.392,2.392,2.392s2.392-1.071,2.392-2.392S9.161,7.511,7.84,7.511z"></path>
                                                    </svg>
                                                    <p className="text-[#667781] text-[14px] leading-[20px]">Life never focuses on you. but hey.... KEEPS S..</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[68px] cursor-pointer w-full flex items-center px-[15px] hover:bg-[#F0F2F5] hover:transition-all">
                                <div className="w-[40px] h-[40px] mx-[14px]">
                                    <img src={rishabh_dp} alt="" className="h-[40px] w-[40px] rounded-full"/>
                                    <svg viewBox="0 0 212 212" height="40" width="40" preserveAspectRatio="xMidYMid meet" class="hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                        <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                        <g>
                                            <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                            <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="grow h-[68px] flex items-center">
                                    <div className="h-[42px] w-full pr-[10px]">
                                        <div className="h-[22px] flex items-center justify-between">
                                            <div className="text-[#111b21] text-[17px]">Rishabh_singh</div>
                                            <div className="text-[11px] text-[#1b8748] bg-[#e7fce3] leading-[11px] px-1 py-[2px]">Group Admin</div>
                                        </div>
                                        <div className="h-[20px]">
                                            <div className="flex items-center">
                                                <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="mr-1 hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18">
                                                    <path fill="#53bdeb" d="M17.394,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-0.427-0.388c-0.171-0.167-0.431-0.15-0.578,0.038L7.792,13.13 c-0.147,0.188-0.128,0.478,0.043,0.645l1.575,1.51c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C17.616,5.456,17.582,5.182,17.394,5.035z M12.502,5.035l-0.57-0.444c-0.188-0.147-0.462-0.113-0.609,0.076l-6.39,8.198 c-0.147,0.188-0.406,0.206-0.577,0.039l-2.614-2.556c-0.171-0.167-0.447-0.164-0.614,0.007l-0.505,0.516 c-0.167,0.171-0.164,0.447,0.007,0.614l3.887,3.8c0.171,0.167,0.43,0.149,0.577-0.039l7.483-9.602 C12.724,5.456,12.69,5.182,12.502,5.035z"></path>
                                                </svg>
                                                <div className="flex items-center">
                                                    <svg viewBox="0 0 16 20" height="20" width="16" preserveAspectRatio="xMidYMid meet" class="mr-[2px] hidden" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 20">
                                                        <path fill="#8696a0" d="M13.822,4.668H7.14l-1.068-1.09C5.922,3.425,5.624,3.3,5.409,3.3H3.531 c-0.214,0-0.51,0.128-0.656,0.285L1.276,5.296C1.13,5.453,1.01,5.756,1.01,5.971v1.06c0,0.001-0.001,0.002-0.001,0.003v6.983 c0,0.646,0.524,1.17,1.17,1.17h11.643c0.646,0,1.17-0.524,1.17-1.17v-8.18C14.992,5.191,14.468,4.668,13.822,4.668z M7.84,13.298 c-1.875,0-3.395-1.52-3.395-3.396c0-1.875,1.52-3.395,3.395-3.395s3.396,1.52,3.396,3.395C11.236,11.778,9.716,13.298,7.84,13.298z  M7.84,7.511c-1.321,0-2.392,1.071-2.392,2.392s1.071,2.392,2.392,2.392s2.392-1.071,2.392-2.392S9.161,7.511,7.84,7.511z"></path>
                                                    </svg>
                                                    <p className="text-[#667781] text-[14px] leading-[20px]">Busy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 bg-white">
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 15">
                                        <path fill="#667781" d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Starred messages</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M12,21.7c0.9,0,1.7-0.8,1.7-1.7h-3.4C10.3,20.9,11.1,21.7,12,21.7z M17.6,16.5v-4.7 c0-2.7-1.8-4.8-4.3-5.4V5.8c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v0.6C8.2,7,6.4,9.1,6.4,11.8v4.7l-1.7,1.7v0.9h14.6v-0.9 L17.6,16.5z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Mute Notifications</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex min-h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M17.3,7.6h-0.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6,3.3,7.6,5.8v1.8H6.7c-1,0-1.8,0.8-1.8,1.8v8.9 c0,1,0.8,1.8,1.8,1.8h10.6c1,0,1.8-0.8,1.8-1.8V9.4C19.1,8.4,18.3,7.6,17.3,7.6z M12,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,15.8,12,15.8z M14.7,7.6H9.2V5.8c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v1.8C14.6,7.6,14.7,7.6,14.7,7.6z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Encryption</p>
                                        <p className="text-[14px] text-[#8696a0]">Messages are end to end encrypted. Click to verify</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Block">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#ea0038" d="M16.6,8.1l1.2-1.2l5.1,5.1l-5.1,5.1l-1.2-1.2l3-3H8.7v-1.8h10.9L16.6,8.1z M3.8,19.9h9.1 c1,0,1.8-0.8,1.8-1.8v-1.4h-1.8v1.4H3.8V5.8h9.1v1.4h1.8V5.8c0-1-0.8-1.8-1.8-1.8H3.8C2.8,4,2,4.8,2,5.8v12.4 C2,19.1,2.8,19.9,3.8,19.9z"></path>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Exit group</p>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Report">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <g>
                                            <g id="thumb-down">
                                                <path fill="#ea0038" d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Report group</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ videoCall ? "fixed w-screen min-h-screen flex items-center justify-center bg-black/80 z-10 opacity-0 animate-opacity left-0" : "hidden"}>
                <div className="bg-white h-[300px] w-[600px] rounded-md shadow-xl p-3">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#000" enable-background="new 0 0 24 24" onClick={()=>setVideoCall(false)}>
                        <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                    </svg>
                </div>
            </div>

            <div className={ audioCall ? "fixed w-screen min-h-screen flex items-center justify-center bg-black/80 z-10 opacity-0 animate-opacity left-0" : "hidden"}>
                <div className="bg-white h-[160px] w-[400px] rounded-md shadow-xl p-3">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#000" enable-background="new 0 0 24 24" onClick={()=>setAudioCall(false)}>
                        <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                    </svg>
                </div>
            </div>
        </div>
        );
}
export default Chat_single;