import { useEffect } from "react";
import New_chats_component from "../components/home/New_chats_component";
import Right_component from "../components/right/Right_component";
import { useDispatch, useSelector } from "react-redux";
import { CHAT_WS } from "../components/Constant/API";

import { addChat, getChats, getProfile, addNewUnreadMessage, addLastMessage } from '../reducers/chatReducer';
import { sendToWs } from '../websocket/chat';

function Home_page() {
    const dispatch = useDispatch();
    const { recieverId, userId } = useSelector((state) => state.chat)

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    const checkAndAddChat = (data) => {
        console.log(data.sender._id, recieverId);
        if (data.sender._id === recieverId) {
            dispatch(addChat(data));
        } else {
            dispatch(addNewUnreadMessage(data));
        }
        dispatch(addLastMessage(data));
    }
    // socket connection


    useEffect(() => {
        if (userId === undefined || userId === null || userId === "") return;

        // new chat socket connection
        const chatSocket = new WebSocket(CHAT_WS);

        // on open
        chatSocket.onopen = () => {
            console.log("connected");
            sendToWs(chatSocket, {
                type: "join",
                _id: userId,
            })
        };

        // on message 
        chatSocket.onmessage = (e) => {
            const data = JSON.parse(e.data);
            console.log(data);
            if (data.type === "send-to-user") {
                checkAndAddChat(data);
            }
        }

        // on reciever id change
        if (recieverId !== null && recieverId !== undefined && recieverId !== "") {
            dispatch(getChats(recieverId));
        }

        // close on unmount
        return () => {
            chatSocket.close();
        }

    }, [recieverId, userId]);

    return (
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <New_chats_component />
                </div>
                <div className="single_chat grow shrink">
                    <Right_component />
                </div>
            </div>
        </div>
    );
}
export default Home_page;