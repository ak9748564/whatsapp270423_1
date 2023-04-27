import dp from "./../images/dp.jfif";
import neeraj_dp from "./../images/neeraj_dp.jpeg";

import { Contact_icon, Gif_icon, Location_icon, Image_icon, Sticker_icon, Document_icon, Video_icon, Audio_icon, Seen_icon, Unseen_icon, Undelivered_icon, Unsent_icon }  from "./../Svg";
import { chats } from "./../Chats_details";
import { contactIconDefault } from "./../Contacts_collection";

function Unread_filled(props){
    return(
        <div>
            <div className="">
                <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px]">
                    <p className="text-[16px] text-[#a52729] px-9">FILTERED BY UNREAD</p>
                </div>
                <div className="">
{chats.map((chat_item) => {return(
    <div className="h-[72px] cursor-pointer w-full flex items-center pr-[8px] hover:bg-[#F0F2F5] hover:transition-all" onclick={() => props.contact(chat_item.name)}>

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
        
    </div>)})}
                </div>
            </div>
        </div>
    );
}
export default Unread_filled;