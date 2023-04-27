import dp from "./../images/dp.jfif";
import lm from "./../images/lm.jfif";
import car from "./../images/car.jfif";
import anas_dp from "./../images/anas_dp.enc";
import { useEffect, useState, useReducer } from "react";
import { contacts, contactIconDefault } from "../Contacts_collection";
import {IoPersonSharp} from "react-icons/io";
import { Link } from "react-router-dom";

function New_group(props){

const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
// const [ignored1, forceUpdate1] = useReducer(x => x - 1, 0);
    // var contacts = [
    //     {
    //         name : "+917456998001",
    //         dp: null,
    //         about : ""
    //     },
    //     {
    //         name : "+919560132730",
    //         dp: lm,
    //         about : "Hey there! I am using WhatsApp."
    //     },
    //     {
    //         name : "3747",
    //         dp: car,
    //         about : "Hey there! I am using WhatsApp."
    //     },
    //     {
    //         name : "Arman (You)",
    //         dp: dp,
    //         about : "Message yourself"
    //     },
    // ];
    

    var contactsNewGroup = localStorage.getItem("contactsNewGroup") ? JSON.parse(localStorage.getItem("contactsNewGroup")) : [];

    function addContactToNewGroup(name){
        if(contactsNewGroup.includes(name)){}else{contactsNewGroup[contactsNewGroup.length] = name;}
        
        localStorage.setItem("contactsNewGroup", JSON.stringify(contactsNewGroup));
        forceUpdate();
    }

    function removeContactFromNewGroup(name){
        if(contactsNewGroup.includes(name)){
            contactsNewGroup.splice(contactsNewGroup.indexOf(name), 1);
        }
        localStorage.setItem("contactsNewGroup", JSON.stringify(contactsNewGroup));
        forceUpdate();
    } 
    
    return(
        <div className="flex flex-col h-screen">
                <div className="h-[108px] bg-[#A52729] flex flex-col justify-end grow-0 shrink-0">
                    <Link to="/" className="h-[54px] w-full flex items-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[19px] text-[#ffffffe6] font-medium">Add group participants</p>
                    </Link>
                </div>
                <div className="min-h-[70px] flex items-center px-[10px] grow-0 shrink-0 w-full">
                    <div className="w-full">
                    <div className={ contactsNewGroup.length === 0 ? "hidden" : "min-h-[32px] w-full flex items-center flex-wrap mt-6" }>
                        {
                            contacts.map((item) => {
                                if(contactsNewGroup.includes(item.contactName))
                                return(
                                    <div className="flex items-center shrink-0 grow-0 h-[26px] rounded-full bg-[#E9EDEF] m-[3px]">
                                        <div className="h-[26px] w-[26px] rounded-full">
                                            {
                                                item.contactIcon === null ? (contactIconDefault) : (<div className="h-[26px] w-[26px] rounded-full flex items-center justify-center"><img src={item.contactIcon} className="rounded-full h-[26px] w-[26px]" /></div>)
                                            }
                                        </div> 
                                        <div className="text-[14px] text-[#3b4a54] px-2 leading-[26px]">{item.contactName}</div>
                                        <div className="h-[20px] w-[20px] flex items-center justify-center hover:bg-white mr-[3px] rounded-full cursor-pointer hover:transition-all" onClick={()=>removeContactFromNewGroup(item.contactName)}>
                                            <svg viewBox="0 0 16 16" height="16" width="16" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 16" >
                                                <path fill="#8696a0" enable-background="new" d="M12.174,4.661l-0.836-0.835L8,7.165L4.661,3.826L3.826,4.661 L7.165,8l-3.339,3.339l0.835,0.835L8,8.835l3.338,3.339l0.836-0.835L8.835,8L12.174,4.661z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center w-full h-[35px] px-4">
                        <div className="w-full">
                            <input type="text" className="outline-none placeholder:text-[#3b4a54] text-[15px] placeholder:leading-[35px] px-2 py-1 w-full border-b" placeholder="Type contact name"/> 
                        </div>
                    </div>
                    </div>
                </div>
                <div className="new_chats_scroll grow shrink  overflow-y-scroll">
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">#</div>
                    {
                        contacts.map((item, key) => {
                            return(
                                <div 
                                onClick={()=>addContactToNewGroup(item.contactName)}
                                className={contactsNewGroup.includes(item.contactName) ? "hidden" : "flex hover:bg-[#ececec] hover:transition-all cursor-pointer"} 
                                >
                                    <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                                        <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                            {
                                                item.contactIcon === null ? (contactIconDefault) : (<img src={item.contactIcon} alt="" className="rounded-full w-full h-full" />)
                                            }
                                        </div>
                                    </div>
                                    <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                                        <div className="h-[22px] text-[17px] leading-[22px]">{item.contactName}</div>
                                        <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">{item.about}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="flex  hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                                    <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                                    <g>
                                        <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path>
                                        <path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+917456998001</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]"></div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={lm} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">+919560132730</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div>
                    <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={car} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">3747</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Hey there! I am using Whatsapp</div>
                        </div>
                    </div> */}
                    <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">A</div>
                    {/* <div className="flex items-center hover:bg-[#ececec] hover:transition-all cursor-pointer">
                        <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                            <div className="w-[48px] h-[48px] rounded-full bg-[#00A884] flex items-center justify-center">
                                <img src={dp} alt="" className="h-full w-full rounded-full"/>
                            </div>
                        </div>
                        <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                            <div className="h-[22px] text-[17px] leading-[22px]">Arman (You)</div>
                            <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">Message yourself</div>
                        </div>
                    </div> */}
                </div>
                <div className={ contactsNewGroup.length === 0 ? "hidden" : "w-full flex justify-center pt-[24px] pb-[40px]" }>
                    <div className="rounded-full bg-[#A52729] flex items-center justify-center h-[46px] w-[46px] cursor-pointer" onClick={props.addNewGroupInfoTrue}>
                        <svg viewBox="0 0 30 30" height="30" width="30" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30" >
                            <path fill="white" d="M15,7l-1.4,1.4l5.6,5.6H7v2h12.2l-5.6,5.6L15,23l8-8L15,7z"></path>
                        </svg>
                    </div>
                </div>
                
        </div>
    )
}
export default New_group;