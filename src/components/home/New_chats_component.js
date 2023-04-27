import Chats_component from "./Chats_component";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../header/Header";
import './New_chats.css';

function New_chats_component(props) {
    const [notified, setNotified] = useState(true);

    useEffect(() => {
        // check if notification allowed bfor this site 
        if ('Notification' in window) {
            if (Notification.permission !== "granted") {
                // setNotified(false);
            }
        }
    }, []);

    const notificationRequest = () => {
        if ('Notification' in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    setNotified(true);
                }
            });
        }
    }

    return (
        <div>
            <div className="w-[400px]">
                <Header />
                <div className="w-full bg-white">
                    <div className="h-[50px] flex items-center pl-[10px] grow-0 shrink-0 bg-[#1e2321]">
                        <div className="flex items-center bg-[#0f1110] rounded-lg w-full h-[35px] px-4">
                            <svg viewBox="0 0 24 24" height="20" width="20" className="fill-[#54656f]">
                                <path fill="#ffffffe6" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                            </svg>
                            <div className="w-full">
                                <input type="text" className="bg-[#0f1110] text-white  outline-none placeholder:text-white/70 text-[13px] px-7 w-full h-[35px]" placeholder="Search or start a new chat" title="Search input textbox" />
                            </div>
                        </div>
                        <Link to="/unread-chats" className="w-[50px] h-[40px] flex items-center justify-center cursor-pointer" title="Unread chats filter">
                            <div className="flex items-center justify-center h-[30px] w-[30px] rounded-full">
                                <svg viewBox="0 0 24 24" height="20" width="20" className="fill-[#54656f]">
                                    <path fill="#ffffffe6" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className={notified ? "hidden" : "flex items-center h-[89px] bg-[#a52729] px-[15px] grow-0 shrink-0"} >
                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell-slash-fill fill-[#a52729]" viewBox="0 0 16 16" style={{ transform: "rotateY(180deg)" }}>
                                <path d="M5.164 14H15c-1.5-1-2-5.902-2-7 0-.264-.02-.523-.06-.776L5.164 14zm6.288-10.617A4.988 4.988 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113l9.73-9.73zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z" />
                            </svg>
                        </div>
                        <div className="grow shrink h-[48px] px-3 flex flex-col justify-evenly">
                            <p className="text-[16px] leading-[21px] text-white/90">Get notified of new messages</p>
                            <div onClick={(e) => notificationRequest()} className="hover:underline text-[14px] text-white/70 flex items-center">
                                <p>Turn on desktop notifications</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-chevron-right fill-white/70 mt-1" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className="cursor-pointer" onClick={() => setNotified(true)}>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="#ffffffe6" enableBackground="new 0 0 24 24" >
                                <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={notified ? "scrollbar overflow-y-scroll h-[calc(100vh-110px)] " : "scrollbar overflow-y-scroll h-[calc(100vh-199px)]"}>
                        {/* <Chats_component /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default New_chats_component;