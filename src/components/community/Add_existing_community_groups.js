import dp from "./images/dp.jfif";
import lm from "./images/lm.jfif";
import car from "./images/car.jfif";
import a from "./images/a.svg";
import svg from "./images/svg.svg";
import butlerians_dp from "./images/butlerians_dp.jpg";

import { useEffect, useState, useReducer } from "react";
import { Group_icon } from "../Svg";
import {groupIconDefault, groups} from "../group/Groups_collection";


function Add_existing_community_groups(props){

const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    // var groups = [
    //     {
    //         name : "Ahmad_Dogar",
    //         dp: null,
    //         participants : "You, Vishnu_Sharma",
    //     },
    //     {
    //         name : "Butlerians",
    //         dp: butlerians_dp,
    //         participants: "Anas, You, Chetan"
    //     },
    //     // {
    //     //     name : "3747",
    //     //     dp: car,
    //     //     about : "Hey there! I am using WhatsApp."
    //     // },
    //     // {
    //     //     name : "Arman (You)",
    //     //     dp: dp,
    //     //     about : "Message yourself"
    //     // },
    // ];

    var groupsNewCommunity = localStorage.getItem("groupsNewCommunity") ? JSON.parse(localStorage.getItem("groupsNewCommunity")) : [];

    function addGroupToNewCommunity(name){
        if(groupsNewCommunity.includes(name)){}else{groupsNewCommunity[groupsNewCommunity.length] = name;}
        
        localStorage.setItem("groupsNewCommunity", JSON.stringify(groupsNewCommunity));
        forceUpdate();
    }

    function removeGroupFromNewCommunity(name){
        if(groupsNewCommunity.includes(name)){
            groupsNewCommunity.splice(groupsNewCommunity.indexOf(name), 1);
        }
        localStorage.setItem("groupsNewCommunity", JSON.stringify(groupsNewCommunity));
        forceUpdate();
    } 
    
    return(
        <div className="flex flex-col h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <div className="h-[54px] w-full flex items-center">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" onClick={props.addExistingCommunityGroupsFalse}>
                        <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                    </svg>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Add existing groups (0/20)</p>
                </div>
            </div>
            <div className="p-6 text-[#667781] text-[14px] text-center border-b">Everyone in the groups will be added to the community</div>
            <div className="min-h-[70px] flex items-center px-[10px] grow-0 shrink-0 w-full">
                <div className="w-full">
                <div className={ groupsNewCommunity.length === 0 ? "hidden" : "min-h-[32px] w-full flex items-center flex-wrap mt-6" }>
                {
                    groups.map((item) => {
                    if(groupsNewCommunity.includes(item.groupName))
                    return(
                        <div className="flex items-center shrink-0 grow-0 h-[26px] rounded-full bg-[#E9EDEF] m-[3px]">
                            <div className="h-[26px] w-[26px] rounded-full">
                            {
                                item.groupIcon === null ? (groupIconDefault) : (<div><img src={item.groupIcon} alt="" className="rounded-full h-[26px] w-[26px]" /></div>)
                            }
                            </div>
                            <div className="text-[14px] text-[#3b4a54] px-2 leading-[26px]">{item.groupName}</div>
                            <div className="h-[20px] w-[20px] flex items-center justify-center hover:bg-white mr-[3px] rounded-full cursor-pointer hover:transition-all" onClick={()=>removeGroupFromNewCommunity(item.groupName)}>
                                <svg viewBox="0 0 16 16" height="16" width="16" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 16" >
                                    <path fill="#8696a0" enable-background="new" d="M12.174,4.661l-0.836-0.835L8,7.165L4.661,3.826L3.826,4.661 L7.165,8l-3.339,3.339l0.835,0.835L8,8.835l3.338,3.339l0.836-0.835L8.835,8L12.174,4.661z"></path>
                                </svg>
                            </div>
                        </div>)})}
                </div>
                <div className="flex items-center w-full h-[35px] px-4">
                    <div className="w-full">
                        <input type="text" className="outline-none placeholder:text-[#3b4a54] text-[15px] placeholder:leading-[35px] px-2 py-1 w-full border-b" placeholder="Type group name"/> 
                    </div>
                </div>
            </div>
            </div>
            <div className="new_chats_scroll grow shrink  overflow-y-scroll">
                {
                    groups.map((item) => {
                        return(
                            <div onClick={()=>addGroupToNewCommunity(item.groupName)} className={groupsNewCommunity.includes(item.groupName) ? "hidden" : "flex hover:bg-[#ececec] hover:transition-all cursor-pointer"} >
                                {/* <div className="h-[72px] flex items-center pl-6">
                                    <input type="checkbox" className="h-[20px] w-[20px] border-[2px] border-black outline-none"/>
                                </div> */}
                                <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                                    <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                    {
                                        item.groupIcon === null ? (groupIconDefault) : (<div><img src={item.groupIcon} alt="" className="rounded-full h-[26px] w-[26px]" /></div>)
                                    }
                                    </div>
                                </div>
                                <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                                    <div className="h-[22px] text-[17px] leading-[22px]">{item.groupName}</div>
                                    <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">{item.participants.length} members</div>
                                </div>
                            </div>)})
                }
            </div>
            <div className={ groupsNewCommunity.length === 0 ? "hidden" : "w-full flex justify-center pt-[24px] pb-[40px]" }>
                <div className="rounded-full bg-[#A52729] flex items-center justify-center h-[46px] w-[46px] cursor-pointer" onClick={props.addNewGroupInfoTrue}>
                    <svg viewBox="0 0 30 30" height="30" width="30" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 30 30" >
                        <path fill="white" d="M15,7l-1.4,1.4l5.6,5.6H7v2h12.2l-5.6,5.6L15,23l8-8L15,7z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default Add_existing_community_groups;