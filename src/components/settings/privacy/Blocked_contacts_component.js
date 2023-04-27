import { Link } from "react-router-dom";
import { contactIconDefault } from "../../Contacts_collection";
import dp from "./../../images/dp.jfif";
import lm from "./../../images/lm.jfif";
import car from "./../../images/car.jfif";
import "./../Settings.css";
import { useContext, useState } from "react";
import { Context } from "./../../../context/Context";
import Chats_component from "../../home/Chats_component";

function Blocked_contacts(props){
    const [allContacts, setAllContacts] = useState("")
    const {blockedContacts, changeBlockedContacts} = useContext(Context);

    const blocked_contacts = [
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
        {
            name: "John Doe",
            phoneNumber: "+1 234 567 890",
            dp: dp,
            about: "Hey there! I am using WhatsApp."
        },
    ];

    var contacts = [
        {
            name : "+917456998001",
            dp: null,
            about : ""
        },
        {
            name : "+919560132730",
            dp: lm,
            about : "Hey there! I am using WhatsApp."
        },
        {
            name : "3747",
            dp: car,
            about : "Hey there! I am using WhatsApp."
        },
        {
            name : "Arman (You)",
            dp: dp,
            about : "Message yourself"
        },
    ];
    
    return (
        <div className="settings h-screen max-h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <div className="h-[54px] w-full flex items-center">
                    <Link to="/settings/privacy">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>   
                    </Link>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Blocked contacts</p>
                </div>
            </div>
            <div className="flex items-center h-[60px] cursor-pointer" onClick={()=>setAllContacts(true)}>
                <div className="w-[74px] h-[60px] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                        <path fill="#8696a0" d="M14.7,12c2,0,3.6-1.6,3.6-3.6s-1.6-3.6-3.6-3.6s-3.6,1.6-3.6,3.6S12.7,12,14.7,12z  M6.6,10.2V7.5H4.8v2.7H2.1V12h2.7v2.7h1.8V12h2.7v-1.8H6.6z M14.7,13.8c-2.4,0-7.2,1.2-7.2,3.6v1.8H22v-1.8 C21.9,15,17.1,13.8,14.7,13.8z"></path>
                    </svg>
                </div>
                <div className="text-[17px] leading-[22px] text-[#111b21]">Add blocked contact</div>
            </div>
             {
                blockedContacts.length > 0 ? 
                (
                <div>
                    <div className="settings overflow-y-scroll h-[calc(100vh-268px)] bg-white">
                        {
                            blocked_contacts.map((contact, index) => {
                                return(
                        <div className="h-[72px] flex hover:bg-[#f5f6f6] hover:transition-all cursor-pointer">
                            <div className="w-[77px] h-[72px] flex items-center justify-center grow-0 shrink-0">
                                {
                                    contact.dp === null ? (<div className="h-[49px] w-[49px]">{contactIconDefault}</div>) : (<img className="h-[49px] w-[49px] rounded-full" src={dp}/>)
                                }
                            </div>
                            <div className="h-[72px] grow shrink flex flex-col justify-center">
                                <p className="text-[#111b21] text-[17px] leading-[22px]">{contact.phoneNumber}</p>
                                <p className="text-[#667781] text-[14px] leading-[19px]">{contact.about}</p>
                            </div>
                            <div className="h-[72px] grow-0 shrink-0 flex items-center pl-[15px] pr-[13px]">
                                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" >
                                    <path fill="#8696a0" d="M17.25,7.8L16.2,6.75l-4.2,4.2l-4.2-4.2L6.75,7.8l4.2,4.2l-4.2,4.2l1.05,1.05l4.2-4.2l4.2,4.2l1.05-1.05 l-4.2-4.2L17.25,7.8z"></path>
                                </svg>
                            </div>
                        </div>
                                )
                            })
                        }
                    </div>
                    <p className="text-[14px] text-[#8696a0] h-[100px] pt-[20px] px-[30px] bg-[#E9EBEE]">Blocked contacts will no longer be able to call you or send you messages</p>
                </div>
                ) : ( 
                <div className="settings overflow-y-scroll h-[calc(100vh-168px)] bg-[#E9EBEE]">
                    <div className="p-[50px]">
                        <div className="h-[164px] w-[164px] flex items-center justify-center bg-[#F7F8FA] rounded-full m-auto mb-[30px]">
                            <svg viewBox="0 0 90 90" height="90" width="90" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 90 90" >
                                <path fill="white" d="M67.436,76.012c-5.561,0-10.104-4.542-10.104-10.104c0-2.08,0.637-4.033,1.741-5.689l14.052,14.052 C71.469,75.375,69.517,76.012,67.436,76.012z M57.715,51.856C51.474,49.479,44.13,48.29,39.12,48.29 c-10.274,0-30.481,4.967-30.481,15.241v7.642h42.58c-0.552-1.656-0.849-3.439-0.849-5.264 C50.328,60.092,53.257,54.955,57.715,51.856z M39.12,40.649c8.406,0,15.241-6.877,15.241-15.241c0-8.406-6.877-15.241-15.241-15.241 S23.88,17.045,23.88,25.408C23.837,33.814,30.715,40.649,39.12,40.649z M67.436,51.984c-7.684,0-13.925,6.241-13.925,13.925 c0,7.684,6.241,13.925,13.925,13.925s13.925-6.241,13.925-13.925C81.361,58.224,75.12,51.984,67.436,51.984z M75.8,71.554 L61.748,57.502c1.613-1.104,3.566-1.741,5.689-1.741c5.561,0,10.104,4.542,10.104,10.104C77.54,67.988,76.903,69.941,75.8,71.554z"></path>
                            </svg>
                        </div>
                        <p className="text-[16px] text-[#8696a0] text-center mb-[18px]">No blocked contacts yet</p>
                        <p className="text-[14px] text-[#8696a0] text-center">Blocked contacts will no longer be able to call you or send you messages</p>
                    </div>
                </div>
                )
             }
             <div className={ allContacts ? "fixed top-0 w-screen min-h-screen flex items-center justify-center bg-white/90 z-10 animate-opacity" : "hidden"}>
                <div className={ allContacts === "" ? "hidden" : allContacts ? "bg-white rounded-md shadow-xl w-[480px] animate-scale_full max-h-[90vh] min-[40vh]" : "bg-white rounded-md shadow-xl w-[480px] animate-scale_zero" } >
                    <div className="flex items-center h-[60px] bg-[#a52729] px-[25px] rounded-t-md">
                        <div className="cursor-pointer" onClick={()=>setAllContacts(false)}>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#ffffffe6" enable-background="new 0 0 24 24">
                                <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="h-[50px] flex items-center px-[10px] grow-0 shrink-0 bg-[#1e2321]">
                        <div className="flex items-center bg-[#0f1110] rounded-lg w-full h-[35px] px-4">
                            <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                                <path fill="#ffffffe6" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                            </svg>
                            <div className="w-full">
                                <input type="text" className="bg-[#0f1110]  outline-none placeholder:text-white/70 text-[13px] px-7 w-full h-[35px]" placeholder="Search contacts" title="Search input textbox" />
                            </div>
                        </div>
                    </div>
                    <div className="settings overflow-y-scroll min-h-[calc(40vh-110px)] max-h-[calc(90vh-110px)] bg-white rounded-b-md pb-[5px]">
                        <div className="h-[72px] flex items-center pl-8 text-[#a52729] text-[16px]">#</div>
                    {
                        contacts.map((item, key) => {
                            return(
                                <div
                                className="flex hover:bg-[#ececec] hover:transition-all cursor-pointer" 
                                >
                                    <div className="h-[72px] w-[76px] grow-0 shrink-0 flex items-center justify-center">
                                        <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center">
                                            {
                                                item.dp === null ? (contactIconDefault) : (<img src={item.dp} alt="" className="rounded-full w-full h-full" />)
                                            }
                                        </div>
                                    </div>
                                    <div className="shrink grow h-[72px] border-t text-[17px] text-[#111b21] leading-[72px] flex flex-col justify-center">
                                        <div className="h-[22px] text-[17px] leading-[22px]">{item.name}</div>
                                        <div className="h-[20px] text-[14px] leading-[20px] text-[#667781]">{item.about}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>  
        </div>
        // </div>
    )
}
export default Blocked_contacts;