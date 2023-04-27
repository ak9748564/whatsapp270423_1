import { Link } from "react-router-dom";
import dp from "./../images/dp.jfif";
import { useState } from "react";
import { Edit_icon } from "../Svg";

function Status(){
    const [statusUpload, setStatusUpload] = useState(false);
    return (
        <div>
            <div className="flex h-screen">
                <div className="w-[400px] bg-[#1E262C] h-full">
                    <div className="h-[103px] flex items-end">
                        <div className="flex items-center cursor-pointer w-full">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[16px] leading-[22px] text-white">My Status</div>
                                <div className="h-[20px] text-[13px] leading-[20px] text-[#ffffff8c]">No updates</div>
                            </div>
                            <div className="pr-5" onClick={()=>setStatusUpload(true)}>{Edit_icon}</div>
                        </div>
                    </div>
                    <div className="status overflow-y-scroll">
                        <div className="h-[38px] px-4 flex flex-col justify-end">
                            <div className="h-[1px] w-full bg-[#4B5156]"></div>
                            <p className="text-[#b6b9ba] text-[13px] mt-2">RECENT</p>
                        </div>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[17px] leading-[22px] text-white">Saif Ali Gurgaon</div>
                                <div className="h-[20px] text-[14px] leading-[20px] text-[#ffffff8c]">today at 18:55</div>
                            </div>
                        </Link>
                        <div className="h-[38px] px-4 flex flex-col justify-end hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[1px] w-full bg-[#4B5156]"></div>
                            <p className="text-[#b6b9ba] text-[13px] mt-2">VIEWED</p>
                        </div>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[17px] leading-[22px] text-white">Saif Ali Gurgaon</div>
                                <div className="h-[20px] text-[14px] leading-[20px] text-[#ffffff8c]">today at 18:55</div>
                            </div>
                        </Link>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[17px] leading-[22px] text-white">Saif Ali Gurgaon</div>
                                <div className="h-[20px] text-[14px] leading-[20px] text-[#ffffff8c]">today at 18:55</div>
                            </div>
                        </Link>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[17px] leading-[22px] text-white">Saif Ali Gurgaon</div>
                                <div className="h-[20px] text-[14px] leading-[20px] text-[#ffffff8c]">today at 18:55</div>
                            </div>
                        </Link>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[17px] leading-[22px] text-white">Saif Ali Gurgaon</div>
                                <div className="h-[20px] text-[14px] leading-[20px] text-[#ffffff8c]">today at 18:55</div>
                            </div>
                        </Link>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[17px] leading-[22px] text-white">Saif Ali Gurgaon</div>
                                <div className="h-[20px] text-[14px] leading-[20px] text-[#ffffff8c]">today at 18:55</div>
                            </div>
                        </Link>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[17px] leading-[22px] text-white">Saif Ali Gurgaon</div>
                                <div className="h-[20px] text-[14px] leading-[20px] text-[#ffffff8c]">today at 18:55</div>
                            </div>
                        </Link>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[17px] leading-[22px] text-white">Saif Ali Gurgaon</div>
                                <div className="h-[20px] text-[14px] leading-[20px] text-[#ffffff8c]">today at 18:55</div>
                            </div>
                        </Link>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full hover:bg-[#30373C] hover:transition-all">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center m-auto">
                                    <img src={dp} alt="" className="h-full w-full rounded-full"/>
                                </div>
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex flex-col justify-center">
                                <div className="h-[22px] text-[17px] leading-[22px] text-white">Saif Ali Gurgaon</div>
                                <div className="h-[20px] text-[14px] leading-[20px] text-[#ffffff8c]">today at 18:55</div>
                            </div>
                        </Link>
                        <Link to="/status/show-status" className="flex items-center cursor-pointer w-full">
                            <div className="h-[64px] w-[68px] grow-0 shrink-0 flex items-center justify-center">
                                
                            </div>
                            <div className="shrink grow h-[64px] text-[17px] leading-[64px] flex items-center">
                                <svg viewBox="0 0 13 12" height="12" width="13" preserveAspectRatio="xMidYMid meet" class="fill-[#9A9DA0] mr-1">
                                    <path d="M9.54004 3.4668C9.54004 2.87891 9.39421 2.33887 9.10254 1.84668C8.81543 1.34993 8.4235 0.958008 7.92676 0.670898C7.43457 0.379232 6.89681 0.233398 6.31348 0.233398C5.72559 0.233398 5.18327 0.379232 4.68652 0.670898C4.19434 0.958008 3.80241 1.34993 3.51074 1.84668C3.22363 2.33887 3.08008 2.87891 3.08008 3.4668V4.7041C3.05273 4.71322 2.99805 4.73828 2.91602 4.7793C2.61979 4.9388 2.39421 5.16439 2.23926 5.45605C2.15267 5.61556 2.09115 5.79102 2.05469 5.98242C2.01823 6.17383 2 6.45866 2 6.83691V9.25C2 9.62826 2.01823 9.91309 2.05469 10.1045C2.09115 10.2959 2.15267 10.4714 2.23926 10.6309C2.39421 10.9225 2.61979 11.1481 2.91602 11.3076C3.07096 11.3942 3.24414 11.4557 3.43555 11.4922C3.63151 11.5286 3.91634 11.5469 4.29004 11.5469H8.33008C8.70378 11.5469 8.98633 11.5286 9.17773 11.4922C9.3737 11.4557 9.54915 11.3942 9.7041 11.3076C9.99577 11.1527 10.2214 10.9271 10.3809 10.6309C10.4674 10.4714 10.529 10.2959 10.5654 10.1045C10.6019 9.91309 10.6201 9.62826 10.6201 9.25V6.83691C10.6201 6.45866 10.6019 6.17383 10.5654 5.98242C10.529 5.79102 10.4674 5.61556 10.3809 5.45605C10.2214 5.15983 9.99577 4.93424 9.7041 4.7793C9.62207 4.73828 9.56738 4.71322 9.54004 4.7041V3.4668ZM4.37207 3.4668C4.37207 3.11589 4.45866 2.79232 4.63184 2.49609C4.80501 2.19531 5.03971 1.95833 5.33594 1.78516C5.63672 1.61198 5.96257 1.52539 6.31348 1.52539C6.66439 1.52539 6.98796 1.61198 7.28418 1.78516C7.5804 1.95833 7.8151 2.19531 7.98828 2.49609C8.16146 2.79232 8.24805 3.11589 8.24805 3.4668V4.54004H4.37207V3.4668Z"></path>
                                </svg>
                                <div className="flex items-center">
                                    <p className="text-[12px] text-[#9A9DA0]">Your status updates are</p>
                                    <p className="text-[12px] text-[#0B5F85]">&nbsp;end-to-end encrypted</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="grow shrink relative">
                    <div className={ statusUpload ? "absolute w-full min-h-screen flex items-center justify-center bg-black/80 z-10 opacity-0 animate-opacity left-0" : "hidden"}>
                        <div className="bg-white h-[160px] w-[400px] rounded-md shadow-xl p-3 flex flex-col">
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#000" enable-background="new 0 0 24 24" onClick={()=>setStatusUpload(false)}>
                                <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                            </svg>
                            <div className="flex min-w-full items-center justify-center grow shrink" >
                                <input type="file" name="" id="" className="w-[203px]"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full min-h-screen bg-[#0B141A] relative flex flex-col">
                        <Link to="/" className="absolute right-[20px] top-[20px] cursor-pointer grow-0 shrink-0">
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                <path fill="white" d="M19.8,5.8l-1.6-1.6L12,10.4L5.8,4.2L4.2,5.8l6.2,6.2l-6.2,6.2l1.6,1.6l6.2-6.2l6.2,6.2l1.6-1.6L13.6,12 L19.8,5.8z"></path>
                            </svg>
                        </Link>
                        <div className="flex items-end h-[150px] grow-0 shrink-0">
                        <svg viewBox="0 0 80 80" height="80" width="80" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" id="Layer_1" x="0px" y="0px" enable-background="new 0 0 80 80" >
                            <path fill="#6D7276" d="M30.566,78.982c-0.222,0-0.447-0.028-0.672-0.087C12.587,74.324,0.5,58.588,0.5,40.631 c0-3.509,0.459-6.989,1.363-10.343c0.377-1.399,1.814-2.23,3.217-1.851c1.399,0.377,2.228,1.818,1.851,3.217 c-0.784,2.909-1.182,5.929-1.182,8.977c0,15.578,10.48,29.226,25.485,33.188c1.401,0.37,2.237,1.806,1.867,3.209 C32.79,78.204,31.728,78.982,30.566,78.982z M49.921,78.875C67.336,74.364,79.5,58.611,79.5,40.563c0-3.477-0.452-6.933-1.345-10.27 c-0.374-1.401-1.812-2.232-3.213-1.858c-1.4,0.375-2.233,1.813-1.858,3.214c0.773,2.896,1.166,5.895,1.166,8.914 c0,15.655-10.545,29.319-25.646,33.23c-1.403,0.363-2.246,1.796-1.883,3.199c0.306,1.182,1.371,1.967,2.539,1.967 C49.478,78.959,49.699,78.932,49.921,78.875z M15.482,16.5C21.968,9.901,30.628,6.267,39.867,6.267 c9.143,0,17.738,3.569,24.202,10.05c1.024,1.026,2.686,1.028,3.712,0.004c1.026-1.024,1.028-2.685,0.005-3.712 C60.329,5.135,50.413,1.018,39.867,1.018c-10.658,0-20.648,4.191-28.128,11.802c-1.016,1.034-1.002,2.696,0.032,3.711 c0.511,0.503,1.175,0.753,1.84,0.753C14.289,17.284,14.968,17.022,15.482,16.5z"></path>
                        </svg>
                    </div>
                    <div className="grow shrink flex items-center justify-center">
                        <p className="text-[#6D7276] text-[16px]">Click on a contact to view to their status updates</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Status;