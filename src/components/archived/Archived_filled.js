import dp from "./images/dp.jfif";
import lm from "./images/lm.jfif";
import car from "./images/car.jfif";
import sahil_dp from "./../images/sahil_dp.jpg";

import "./Archived_filled.css";
import { Link } from "react-router-dom";


import { Contact_icon, Gif_icon, Location_icon, Image_icon, Sticker_icon, Document_icon, Video_icon, Audio_icon, Seen_icon, Unseen_icon, Undelivered_icon, Unsent_icon }  from "./../Svg";
import { chats } from "./../Chats_details";
import { contactIconDefault } from "./../Contacts_collection";

function Archived_filled(){
    const chats = [
        {
            name: "Sahil_khatri",
            dp: sahil_dp,
            is_online: true,
            last_seen: "12:00",
            last_message: {
                    is_sent_by_me: true,
                    is_sent: true,
                    is_delivered: true,
                    is_seen: true,
                    is_text: true,
                    is_audio: false,
                    audio_duration: "0:02",
                    is_video: false,
                    is_document: false,
                    document_name: "",
                    is_sticker: false,
                    is_image: false,
                    is_gif: false,
                    is_contact: false,
                    is_location: false,
                    is_audio_call: false,
                    is_video_call: false,
                    message: "Acha",
                    time: "15:27",
                }
        },
    ];
    return(
        <div>
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <Link to="/" className="h-[54px] w-full flex items-center">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                        <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                    </svg>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Archived</p>
                </Link>
            </div>
            <div className="h-[85px] bg-[#F0F2F5] p-[10px]">
                <p className="text-[14px] text-[#667781] leading-[20px]">These chats are unarchived when new messages are received. To change this experience, go to Settings Chats on your phone </p>
            </div>
            <div className="archived_filled overflow-scroll h-[calc(100vh-193px)]">
                <div className="">
                    {chats.map((chat_item) => {return(
    <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all">

        <div className="w-[49px] h-[49px] mx-[15px] flex items-center bg-[#DFE5E7] overflow-hidden rounded-full justify-center">
            {
                chat_item.dp === "" ? (contactIconDefault):(<img src={chat_item.dp} alt="" className="h-[49px] w-[49px] rounded-full"/>)
            }
        </div>

        <div className="grow border-b h-[72px] flex items-center">
            <div className="h-[42px] w-full pr-[10px]">

                <div className="h-[22px] flex items-center justify-between">
                    <div className="text-[#111b21] text-[17px]">{chat_item.name}</div>
                    <div className="text-[12px] text-[#667781]">{chat_item.last_message.time}</div>
                </div>
                
                <div className="h-[20px]">
                    <div className="flex items-center">
                    {
                        chat_item.last_message.is_sent_by_me ? 
                        (
                            <div className="mr-1">
                            {
                                chat_item.last_message.is_sent ? 
                                (
                                    <div>
                                    {
                                        chat_item.last_message.is_delivered ? 
                                        (
                                            <div>
                                            {
                                                chat_item.last_message.is_seen ? 
                                                (Seen_icon) : (Unseen_icon)
                                            }
                                            </div>
                                        ) : (Undelivered_icon)
                                    }
                                    </div>
                                ) : (Unsent_icon)
                            }
                            </div>                                                              
                        ) : null
                    }
                        
                    <div>
                    {
                        (chat_item.last_message.is_text) ? (<div><p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.message}</p></div>) : (
<div>
{
    chat_item.last_message.is_audio ? (
    <div className="flex items-center">
        {Audio_icon}
        <p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.audio_duration}</p>
    </div>) : null
}
{
    chat_item.last_message.is_video ? (
    <div className="flex items-center">
        {Video_icon}
        <p className="text-[#3b4a54] text-[15px]">Video</p>
    </div>) : null
}
{
    chat_item.last_message.is_document ? (
    <div className="flex items-center">
        {Document_icon}
        <p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.document_name}</p>
    </div>) : null
}
{
    chat_item.last_message.is_sticker ? (
    <div className="flex items-center">
        {Sticker_icon}
        <p className="text-[#3b4a54] text-[15px]">Sticker</p>
    </div>) : null
}
{
    chat_item.last_message.is_image ? (
    <div className="flex items-center">
        {Image_icon}
        <p className="text-[#3b4a54] text-[15px]">Photo</p>
    </div>) : null
}
{
    chat_item.last_message.is_gif ? (
    <div className="flex items-center">
        {Gif_icon}
        <p className="text-[#3b4a54] text-[15px]">GIF</p>
    </div>) : null
}
{
    chat_item.last_message.is_contact ? (
    <div className="flex items-center">
        {Contact_icon}
        <p className="text-[#3b4a54] text-[15px]">{chat_item.last_message.contact_name}</p>
    </div>) : null
}
{
    chat_item.last_message.is_location ? (
    <div className="flex items-center">
        {Location_icon}
        <p className="text-[#3b4a54] text-[15px]">Live Location</p>
    </div>) : null
}
{
    chat_item.last_message.is_audio_call ? (
    <div>

    </div>) : null
}
{
    chat_item.last_message.is_video_call ? (
    <div>

    </div>) : null
}
</div>)
                    }
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </div>           )})}
                </div>
            </div>
        </div>
    )
}
export default Archived_filled;