import React, { useRef, useEffect } from 'react'
import { Seen_icon, Unseen_icon } from "../Svg";
import { useSelector } from 'react-redux'


export default function Chat_area() {

  var chat = [
    {
      name: "John Doe",
      message: "Hello, Rishu how are you?",
      time: "15:30",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "Hi, I am fine. What about you? How is your family?",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message: "Are you working right now?",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "??",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "Yes I am working. I am working on a new project.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message: "Please don't disturb me right now.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message: "OKay, I will call you later.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "Bye",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "👋",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message: "👋",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: true,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message:
        "Hi, are you there? I am waiting for your reply. Please reply me. it's urgent. you have to reply me.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: false,
      isSentByMe: false,
    },
    {
      name: "John Doe",
      message:
        "Okay I am replying you. I am sorry for the late reply. I was busy in my work.",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: false,
      isSentByMe: true,
    },
    {
      name: "John Doe",
      message: "😀",
      time: "15:31",
      avatar_url:
        "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      isMessageRead: false,
      isSentByMe: true,
    },
  ];

  
  const chatMsgRef = useRef(null);

  const { recieverId, chats, userId } = useSelector((state) => state.chat)

  

  useEffect(() => {
    if (chatMsgRef.current) {
      chatMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats, recieverId]);


  return (
    <div className="w-full pb-5" id="chatRef" >
      {chats.map((val, key) => {
        let hour = new Date(val.createdAt).getHours();
        const minute = new Date(val.createdAt).getMinutes();
        let AMPM = "AM";
        if (hour > 12) {
          AMPM = "PM";
        }
        hour = hour > 12 ? hour - 12 : hour;
        const time = `${hour}:${minute} ${AMPM}`;

        return (
          <>
            <div
              key={key}
              className={
                userId === val.sender._id
                  ? "w-full flex justify-end my-1"
                  : "w-full flex justify-start my-1"
              }
            >
              <div
                className={
                  userId === val.sender._id
                    ? "max-w-[60%] bg-[#A52729] text-[#ffffffe6]  rounded-md text-[14px] flex shadow-sm"
                    : "max-w-[60%] bg-white text-[#111b21] h- text-[14px] rounded-md flex shadow-sm"
                }
              >
                <div className="leading-[20px] px-2 py-[7px]">
                  {val.message}
                </div>
                <div className="flex items-end pb-[5px] text-[12px] leading-[15px] pr-2">
                  <div
                    className={
                      userId === val.sender._id
                        ? "pr-[2px] text-[#ffffffe6] text-[11px]"
                        : "pr-[2px] text-[#111b21] text-[11px]"
                    }
                  >
                    {time}
                  </div>
                  <div>
                    {userId === val.sender._id ? (
                      <>
                        {val.isMessageRead === true ? (Seen_icon) : (Unseen_icon)}
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div ref={chatMsgRef}></div>
    </div>
  )
}
