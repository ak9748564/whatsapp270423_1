import { Link } from "react-router-dom";

function Archived_empty(props){
    return(
        <div className="flex flex-col h-screen max-h-screen">
            <div className="h-[108px] bg-[#A52729] flex flex-col justify-end">
                <Link to="/" className="h-[54px] w-full flex items-center">
                    <div>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="fill-[#ffffffe6] mx-6 cursor-pointer" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <path fill="#ffffffe6" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                    </div>
                    <p className="text-[19px] text-[#ffffffe6] font-medium">Archived</p>
                </Link>
            </div>
            <div className="grow shrink flex items-center justify-center">
                <div>
                    <div className="h-[164px] w-[164px] flex items-center justify-center rounded-full bg-[#F7F8FA]">
                        <svg viewBox="0 0 90 90" height="90" width="90" preserveAspectRatio="xMidYMid meet" class="white" version="1.1" x="0px" y="0px" enable-background="new 0 0 90 90">
                            <path fill="white" d="M71.109,24.113l-4.288-5.222c-0.594-0.934-1.825-1.528-3.396-1.528H26.575c-1.528,0-2.759,0.594-3.693,1.528 l-3.991,5.222c-0.934,1.231-1.528,2.462-1.528,3.991v38.377c0,3.396,2.759,6.156,6.156,6.156h42.962 c3.396,0,6.156-2.759,6.156-6.156V28.104C72.637,26.575,72.042,25.344,71.109,24.113z M45.042,61.896L28.146,45h10.741v-6.156 h12.269V45h10.741L45.042,61.896z M23.859,23.519l2.462-3.057H63.17l2.759,3.057H23.859z"></path>
                        </svg>
                    </div>
                    <p className="text-[16px] text-[#8696a0] text-center mt-7">No archived chats</p>
                </div>
            </div>
        </div>
    );
}
export default Archived_empty;