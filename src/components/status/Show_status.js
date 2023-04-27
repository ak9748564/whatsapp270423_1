import React from 'react';
import { Link } from 'react-router-dom';
import { Back_icon, Cross_icon, Play_icon, Pause_icon, Sound_off_icon, Sound_on_icon, No_sound_icon, Menu_icon, Right_chevron_icon, Left_chevron_icon, Emoji_icon, Send_icon, Sticker_icon, Sticker_icon_status, Emoji_icon_grey, Emoji_icon_grey_large, Sticker_icon_status_grey, Send_icon_grey } from '../Svg';
import abhishek_tiwari from './../images/abhishek_tiwari.jpg';

export default function Show_status() {
    const [play, setPlay] = React.useState(true);
    const [sound, setSound] = React.useState("");
    const [menu, setMenu] = React.useState(false);
    const [replySection, setReplySection] = React.useState(false);
  return (
    <div className='w-full min-h-screen bg-[#0B141A]'>
        <div className='relative w-screen min-h-screen'>
            <div className='w-full min-h-screen flex items-center justify-center'>
                <div className='sm:w-[500px] h-screen  shadow-lg shadow-white'></div>
            </div>
            <div className='absolute top-0 w-screen min-h-screen flex flex-col p-5'>
                <div className='w-full grow-0 shrink-0 flex justify-between'>
                    <Link to="/status" className='cursor-pointer'>{Back_icon}</Link>
                    <div className='sm:w-[500px]'>
                        <div className='flex items-center w-full px-[2px]'>
                            <div className='h-[7px] w-full  mx-[2px] rounded-full bg-white/20 overflow-hidden'>
                                <div className='bg-white h-[7px] w-full relative left-[-50%]'></div>
                            </div>
                            <div className='h-[7px] w-full  mx-[2px] rounded-full bg-white/20'></div>
                            <div className='h-[7px] w-full  mx-[2px] rounded-full bg-white/20'></div>
                        </div>
                        <div className='flex justify-between h-[70px] items-center'>
                            <div className='flex ml-3'>
                                <div className='h-[40px] w-[40px] rounded-full'><img src={abhishek_tiwari} alt="" className='h-full w-full rounded-full'/></div>
                                <div className='flex flex-col justify-evenly ml-3'>
                                    <p className='text-white text-[16px] leading-[16px]'>Abhishek Tiwari</p>
                                    <p className='text-[#ffffffc2] text-[13px] leading-[13px]'>yesterday at 15:11</p>
                                </div>
                            </div>
                            <div className='flex items-center mr-1'>
                                <div className='mx-1 cursor-pointer'>
                                    {
                                        play ? (<div onClick={()=>setPlay(false)}>{Pause_icon}</div>) : (<div onClick={()=>setPlay(true)}>{Play_icon}</div>)
                                     }
                                </div>
                                <div className='mx-1 cursor-pointer'>{
                                    sound === "" ? (No_sound_icon) : sound ? (<div onClick={()=>setSound(false)}>{Sound_on_icon}</div>) : (<div onClick={()=>setSound(true)}>{Sound_off_icon}</div>)
                                }</div>
                                <div className='relative cursor-pointer'>
                                    <div onClick={()=>setMenu(!menu)}>{Menu_icon}</div>
                                    {
                                        menu ? (<div className='absolute top-[30px] right-[10px] bg-white px-5 py-2  rounded-sm shadow-md'>Report</div>) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className='cursor-pointer'>{Cross_icon}</Link>
                </div>
                <div className='w-full flex items-center justify-between grow shrink'>
                    <div className='w-[40px] h-[40px] bg-black/40 flex items-center justify-center rounded-full'>{Left_chevron_icon}</div>
                    <div className='w-[40px] h-[40px] bg-black/40 flex items-center justify-center rounded-full'>{Right_chevron_icon}</div>
                </div>
                <div className='w-full grow-0 shrink-0 flex items-center justify-center' onClick={()=>setReplySection(!replySection)}>
                    <div className={ replySection ? "h-[64px] flex items-center px-4 shadow-sm grow-0 shrink-0 xl:w-[1000px] rounded-xl bg-[#F0F2F5]" : "h-[64px] flex items-center px-4 shadow-sm grow-0 shrink-0 xl:w-[1000px] rounded-xl" }>
                        <div className="h-[52px] w-[26px] flex items-center justify-center cursor-pointer mr-[8px] ml-[10px]">{ replySection ? (Emoji_icon_grey_large) : (<div>{Emoji_icon}</div>)}</div>
                        <div className="h-[52px] w-[40px] flex items-center justify-center cursor-pointer mr-[10px]" title="Attach">{ replySection ? (Sticker_icon_status_grey) : (Sticker_icon_status)}</div>
                        <div className="grow shrink h-[40px] rounded-xl shadow-sm cursor-pointer" title="Type a message">
                            <input type="text" className={ replySection ? "outline-none rounded-lg h-[40px] text-[15px] px-4 w-full bg-white placeholder:text-[#111b21]" : "outline-none rounded-lg h-[40px] placeholder:text-white/50 text-[15px] px-4 w-full bg-black/50 text-white/60" } placeholder="Type a message"/>
                        </div>
                        <div className="h-[37px] w-[52px] flex items-center justify-center cursor-pointer">
                            <div>{Send_icon_grey}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
