import Unread_chats_component from "../components/unread_chats/Unread_chats_component";
import { Lock_icon } from "../components/Svg";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import Right_component from "../components/right/Right_component";

function Unread_chats_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="w-[400px] h-screen">
                    <Header/>
                    <div className="h-[50px] flex items-center pl-[10px] grow-0 shrink-0 bg-[#1e2321]">
                        <div className="flex items-center bg-[#0f1110] rounded-lg w-full h-[35px] px-4">
                            <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                                <path fill="#ffffffe6" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                            </svg>
                            <div className="w-full">
                                <input type="text" className="bg-[#0f1110] outline-none placeholder:text-white/70 text-[13px] px-7 w-full"  placeholder="Search unread chats" title="Search input textbox"/>
                            </div>
                        </div>
                        <div className="w-[50px] h-[40px] flex items-center justify-center cursor-pointer" title="Unread chats filter">
                            <Link to="/" className="flex items-center justify-center h-[28px] w-[28px] rounded-full bg-[#a52729]">
                                <svg viewBox="0 0 24 24" height="20" width="20"  class="fill-[#54656f]">
                                    <path fill="#ffffffe6" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="grow shrink overflow-y-scroll">
                        <Unread_chats_component/>
                    </div>
                    <div className="cursor-pointer w-full px-[15px] pt-[15px] grow-0 shrink-0">
                        <hr />
                        <div className="flex items-center cursor-pointer w-full">
                            <div className="h-[64px] w-[50px] grow-0 shrink-0 flex items-center justify-center">
                                {Lock_icon}
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex items-center">
                                <div className="flex items-center">
                                    <p className="text-[12px] text-[#111b21]">Your personal messages are</p>
                                    <p className="text-[12px] text-[#027eb5]">&nbsp;end-to-end encrypted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single_chat grow shrink">
                    <Right_component/>
                </div>
            </div>
        </div>
    );
}
export default Unread_chats_page;