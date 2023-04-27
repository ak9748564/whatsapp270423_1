function Starred_messages(props){
    return(
        <div>
                <div className="h-[60px] bg-[#f0f2f5] pl-[25px] pr-[20px] flex items-center justify-between">
                    <div className="h-[54px] w-full flex items-center cursor-pointer" onClick={props.starredMessages}>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#54656f" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                        <p className="text-[16px] text-[#111b21] pl-7">Starred messages</p>
                    </div>
                    <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-[#8a8a8a] hover:transition-all cursor-pointer shrink-0">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#54656f" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                        </svg>
                    </div>
                </div>
                <div className="starred_messages overflow-y-scroll bg-[#f0f2f5] flex flex-col">
                    <div className="grow shrink flex items-center justify-center">
                        <p className="text-[14px] text-[#8696a0]">No starred messages</p>
                    </div>
                    <div className="grow-0 shrink-0 pt-[22px] pb-[12px] px-[16px] text-[#8696a0] text-[14px]">Use Whatsapp on your phone to see older chats and messages.</div>
                </div>
        </div>
    )
}
export default Starred_messages;