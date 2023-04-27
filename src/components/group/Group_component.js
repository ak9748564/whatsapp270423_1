import React from 'react';
import { useState } from 'react';
import New_group from "./New_group";
import Add_new_group_info from "./Add_new_group_info";
import { Link } from 'react-router-dom';

export default function Group_component(props) {
    const [ newGroup, setNewGroup ] = useState(true);
    const [ addNewGroupInfo, setAddNewGroupInfo ] = useState("");
    const [ groupCreationResult, setGroupCreationResult ] = useState("");

    function handleGroupCreationResult(){
        setGroupCreationResult(false);
        setAddNewGroupInfo(false);
        setNewGroup(false);
    }
  return (
    <div>
        <div className={ newGroup === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : newGroup ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
            <New_group newGroupFalse={()=>setNewGroup(false)} addNewGroupInfoTrue={()=>setAddNewGroupInfo(true)} />
        </div>

        <div className={ addNewGroupInfo === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : addNewGroupInfo ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
            <Add_new_group_info addNewGroupInfoFalse={()=>setAddNewGroupInfo(false)} groupCreationResult={()=>setGroupCreationResult(true)}/>
        </div>

        <div className={ groupCreationResult ?  "fixed w-screen min-h-screen flex items-center justify-center bg-white/90 z-10 opacity-0 animate-opacity" :"hidden" }>
            <div className={ groupCreationResult ?  "bg-white p-6 rounded-md shadow-xl w-[480px] animate-group_creation_result_true" : "animate-group_creation_result_false"} >
                <p className="text-[14px] leading-[20px] text-[#3b4a54] mt-4">couldn't add +917456998001. You can invite them privately to join this group.</p>
                <div className="mt-10 flex w-full justify-end">
                    <Link to="/" className="h-[36px] rounded-sm text-[#A52729] px-4 leading-[36px] border mr-2" >CANCEL</Link>
                    <button className="h-[36px] leading-[36px] bg-[#A52729] text-white px-4 font-medium rounded-sm">INVITE TO GROUP</button>
                </div>
            </div>
        </div>
    </div>
  )
}
