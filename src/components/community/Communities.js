import { useEffect, useState } from "react";
import Introducing_communities from "./Introducing_communities";
import All_communities from "./All_communities";
import { Introducing_communities_icon } from '../Svg';
import { Link } from 'react-router-dom';


function Communities(props){
    const [allCommunities, setAllCommunities] = useState("");
    const [introducingCommunities, setIntroducingCommunities] = useState("");
    const [noOfCommunities, setNoOfCommunities] = useState(0);

    useEffect(()=>{
        if(noOfCommunities === 0){
            setIntroducingCommunities(true);
            setAllCommunities(false);
        }
        else
        {
            setIntroducingCommunities(false);
            setAllCommunities(true);
        }
    },[allCommunities, introducingCommunities, noOfCommunities]);
    return(
        <div>
            <div className={ introducingCommunities === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : introducingCommunities ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <div className="flex flex-col h-screen">
                    <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                        <Link to="/" className="h-[54px] w-full flex items-center">
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                            </svg>
                            <p className="text-[19px] text-[#ffffffe6] font-medium">Communities</p>
                        </Link>
                    </div>
                    <div>
                        <div className='flex items-end justify-center h-[161px]'>
                            {Introducing_communities_icon}
                        </div>
                        <p className='text-[24px] leading-[36px] text-[#111b21] font-bold text-center mt-5'>Introducing communities</p>
                        <p className='text-[14px] leading-[21px] text-[#8696a0] text-center px-8 mt-3'>Easily organise your related groups and send announcements. Now, your communities, like neighbourhoods or schools, can have their own space.</p>
                        <div className='flex justify-center w-full mt-8'>
                            <button className='bg-[#A52729] text-white px-4 py-2 rounded-sm' onClick={props.setCommunitiesFalse}>START A COMMUNITY</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ allCommunities === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : allCommunities ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
                <All_communities />
            </div>
        </div>
    )
}
export default Communities;