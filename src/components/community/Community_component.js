import React from 'react';
import Add_community_groups from './Add_community_groups';
import Add_existing_community_groups from './Add_existing_community_groups';
import Add_new_community_info from './Add_new_community_info';
import Start_community from './Start_community';
import Communities from './Communities';
import { useState, useEffect } from 'react';

export default function Community(props) {
    const [ addExistingCommunityGroups, setAddExistingCommunityGroups ] = useState("");
    const [ addCommunityGroups, setAddCommunityGroups ] = useState("");
    const [ addNewCommunityInfo, setAddNewCommunityInfo ] = useState("");
    const [ startCommunity, setStartCommunity ] = useState("");
    const [ communities, setCommunities ] = useState(true);
    const [ community, setCommunity ] = useState("");

    useEffect(()=>{
        if(communities === false){
            setStartCommunity(true);
        }
    },[communities, startCommunity]);

    useEffect(()=>{
        if(startCommunity === false){
            setAddNewCommunityInfo(true);
        }
    },[startCommunity, addNewCommunityInfo]);
  return (
  <div>
    <div className={ addExistingCommunityGroups === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : addExistingCommunityGroups ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Add_existing_community_groups addExistingCommunityGroupsFalse={()=>setAddExistingCommunityGroups(false)} />
    </div>

    <div className={ addCommunityGroups === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : addCommunityGroups ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Add_community_groups addCommunityGroupsFalse={()=>setAddCommunityGroups(false)} addExistingCommunityGroupsTrue={()=>setAddExistingCommunityGroups(true)}/>
    </div>

    <div className={ addNewCommunityInfo === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : addNewCommunityInfo  ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Add_new_community_info addNewCommunityInfoFalse={()=>setAddNewCommunityInfo(false)} addCommunityGroupsTrue={()=>setAddCommunityGroups(true)}/>
    </div>

    <div className={ startCommunity === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : startCommunity ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Start_community startCommunityFalse={()=>setStartCommunity(false)}/>
    </div>

    <div className={ communities === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : communities ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
        <Communities setCommunitiesFalse={()=>setCommunities(false)} />
    </div>
  </div>)
}