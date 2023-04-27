import React, { useContext } from 'react';
import { Cross_icon, Right_chevron_icon } from '../Svg';
import { Context } from './../../context/Context';
import rishi_mam_dp from './../images/rishi_mam_dp.jfif';
import { Bell_icon, Disappearing_icon, Info_icon, Share_icon, Star_icon, Lock_icon } from './Svg';

export default function Profile_business() {
    const {changeIsProfileOpen, chatProfile} = useContext(Context);
  return (
    <div>
        <div className="w-[400px]">
            <div className="h-[60px] bg-[#1E2321] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                <div className='mr-7 cursor-pointer' onClick={()=>changeIsProfileOpen("")}>{Cross_icon}</div>
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
                            <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-[#ececec] hover:transition-all cursor-pointer">{Share_icon}</div>
                            <p className="text-[#a52729] text-[13px] text-center cursor-pointer">Share</p>
                        </div>
                    </div>
                    <div className="border-t flex items-center justify-between h-[60px]">
                        <p className="text-[14px] text-[#3b4a54]">This is a business account</p>
                        <div>{Info_icon}</div>
                    </div>
                </div>
                <div className="mt-3 bg-white">
                    <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                        <div className="grow-0 shrink-0  w-[40px] mr-[8px]">{Star_icon}</div>
                        <div className="flex items-center justify-between w-full">
                            <p className="text-[17px] leading-[22px] text-[#111b21]">Starred messages</p>
                            <div>{Right_chevron_icon}</div>
                        </div>
                    </div>
                    <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                        <div className="grow-0 shrink-0  w-[40px] mr-[8px]">{Bell_icon}</div>
                        <div className="flex items-center justify-between w-full">
                            <p className="text-[17px] leading-[22px] text-[#111b21]">Mute Notifications</p>
                            <div>{Right_chevron_icon}</div>
                        </div>
                    </div>
                    <div className="flex h-[58px] px-[30px] cursor-pointer">
                        <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">{Disappearing_icon}</div>
                        <div className="flex justify-between w-full">
                            <div>
                                <p className="text-[17px] leading-[22px] text-[#111b21]">Disappearing messages</p>
                                <p className="text-[14px] text-[#8696a0]">Off</p>
                            </div>
                            <div>{Right_chevron_icon}</div>
                        </div>
                    </div>
                    <div className="flex min-h-[58px] px-[30px] cursor-pointer">
                        <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">{Lock_icon}</div>
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
    </div>
  )
}
