import { Link } from "react-router-dom";
import dp from "./../../images/dp.jfif";
import "./../Settings.css";
import default_message_timer from "./../../images/default_message_timer.png";

function Default_message_timer(props){
    return (
        <div className="settings h-screen max-h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <div className="h-[54px] w-full flex items-center">
                    <Link to="/settings/privacy">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#fffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>   
                    </Link>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Default message timer</p>
                </div>
            </div>
                
            <div className="settings overflow-y-scroll h-[calc(100vh-108px)] bg-[#E9EBEE]">
                <div className="px-[30px] bg-white shadow-sm">
                    <div className="w-full py-[30px]">
                        <img src={default_message_timer} alt="" className="h-[120px] m-auto"/>
                    </div>
                    <p className="text-[#a52729] text-[14px] leading-[17px] py-[19px]">Start new chats with disappearing messages</p>
                    <div>
                        <div className="flex items-center py-[18px]">
                            <input type="radio" name="" id="" className="w-[18px] h-[18px] mr-5"/>
                            <p className="text-[16px] leading-[20px] text-[#3b4a54]">24 hours</p>
                        </div>
                        <div className="flex items-center py-[18px]">
                            <input type="radio" name="" id="" className="w-[18px] h-[18px] mr-5"/>
                            <p className="text-[16px] leading-[20px] text-[#3b4a54]">7 days</p>
                        </div>
                        <div className="flex items-center py-[18px]">
                            <input type="radio" name="" id="" className="w-[18px] h-[18px] mr-5"/>
                            <p className="text-[16px] leading-[20px] text-[#3b4a54]">90 days</p>
                        </div>
                        <div className="flex items-center py-[18px]">
                            <input type="radio" name="" id="" className="w-[18px] h-[18px] mr-5"/>
                            <p className="text-[16px] leading-[20px] text-[#3b4a54]">Off</p>
                        </div>
                    </div>
                    <div className="my-[15px]">
                        <p className="mt-[25px] text-[#027eb5] text-[14px] pb-[25px] cursor-pointer">
                            Learn more
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Default_message_timer;