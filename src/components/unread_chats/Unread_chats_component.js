import dp from "./../images/dp.jfif";
import neeraj_dp from "./../images/neeraj_dp.jpeg";
import Unread_empty from "./Unread_empty";
import Unread_filled from "./Unread_filled";
import { useState, useEffect } from "react";
import { Lock_icon } from "../Svg";

function Unread_chats_component(){
    const [noOfUnreadChats, setNoOfUnreadChats] = useState(0);
    const [unreadChatsEmpty, setUnreadChatsEmpty] = useState(true);
    const [unreadChatsFilled, setUnreadChatsFilled] = useState(false);

    useEffect(() => {
        if(noOfUnreadChats === 0){
            setUnreadChatsEmpty(true);
            setUnreadChatsFilled(false);
        }else{
            setUnreadChatsEmpty(false);
            setUnreadChatsFilled(true);
        }
    }, [noOfUnreadChats, unreadChatsEmpty, unreadChatsFilled]);
    
    return(
        <div className="">
            <div className={ unreadChatsEmpty ? "" : "hidden" }>
                <Unread_empty/>
            </div>
            <div  className={ unreadChatsFilled ? "" : "hidden" }>
                <Unread_filled/>
            </div>
        </div>
    );
}
export default Unread_chats_component;