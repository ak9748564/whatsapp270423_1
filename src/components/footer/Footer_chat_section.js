import EmojiPicker from 'emoji-picker-react';
import React from 'react';
import { Attach_icon, Emoji_icon, Mic_icon, Send_icon, } from "../Svg";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API } from '../Constant/API';
import { addChat, addLastMessage } from '../../reducers/chatReducer';

export default function Footer_chat_section() {
  const [send, setSend] = React.useState(true);
  const [inputStr, setInputStr] = React.useState('');
  const [showPicker, setShowPicker] = React.useState(false);
  const [attach, setAttach] = React.useState("");

  const { recieverId, profile } = useSelector(state => state.chat);

  const dispatch = useDispatch();

  const onEmojiClick = (emojiObject) => {
    if (emojiObject.emoji) {
      setInputStr(prevInput => prevInput + emojiObject.emoji);
    }
    else {
      setInputStr(emojiObject);
    }
    if ((emojiObject !== "") && (emojiObject !== null)) { setSend(false); } else { setSend(true); }
  }
  const sendMessage = () => {
    if (inputStr !== "") {

      dispatch(addChat({
        reciever: recieverId,
        message: inputStr,
        createdAt: new Date().toISOString(),
        sender: profile,
      }));

      dispatch(addLastMessage({ sender: {_id: recieverId}, message: inputStr, createdAt: new Date().toISOString() }))

      axios.post(`${API}/chat`, {
        reciever: recieverId,
        message: inputStr,
      }, {
        headers: {
          "token": localStorage.getItem("token")
        }
      })

      setInputStr("");
      setSend(true);
    }
  }

  return (
    <div className="h-[64px] bg-[#1e2321] flex items-center px-4 shadow-sm grow-0 shrink-0">
      <div className="h-[52px] w-[26px] flex items-center justify-center cursor-pointer mr-[8px] ml-[10px] relative">
        <div onClick={() => setShowPicker(!showPicker)}>{Emoji_icon}</div>
        <div className={showPicker ? "absolute top-[-460px] left-0" : "hidden"}>
          {showPicker && <EmojiPicker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />}
        </div>
      </div>
      <div className="h-[52px] w-[40px] flex items-center justify-center cursor-pointer mr-[10px] relative" title="Attach">
        <div className="relative h-[52px] w-[40px]">
          <div className="absolute top-[-375px] flex flex-col items-center justify-end h-[375px] w-[58px]">
            <div className={attach === "" ? "hidden" : attach ? "rounded-full my-[6px] shadow-lg animate-scale_up6 overflow-hidden h-0 w-0" : "h-[53px] w-[53px] rounded-full my-[6px] shadow-lg animate-scale_down6"}>
              <svg viewBox="0 0 53 53" height="" width="" preserveAspectRatio="xMidYMid meet" class="h-full w-full" fill="none">
                <circle cx="26.5" cy="26.5" r="26.5" fill="#02A698"></circle>
                <path opacity="0.15" d="M26.5 0C11.8645 0 0 11.8645 0 26.5H53C53 11.8645 41.1355 0 26.5 0Z" fill="#111B21"></path>
                <rect x="15.7051" y="26.6035" width="5.94055" height="9.50487" rx="1.21053" fill="white"></rect>
                <rect x="24.0215" y="14.7227" width="5.94055" height="21.386" rx="1.21053" fill="white"></rect>
                <rect x="32.3379" y="21.8496" width="5.94055" height="14.2573" rx="1.21053" fill="white"></rect>
              </svg>
            </div>
            <div className={attach === "" ? "hidden" : attach ? "rounded-full my-[6px] shadow-lg animate-scale_up5 overflow-hidden h-0 w-0" : "h-[53px] w-[53px] rounded-full my-[6px] shadow-lg animate-scale_down5"}>
              <svg viewBox="0 0 53 53" height="" width="" preserveAspectRatio="xMidYMid meet" class="h-full w-full" version="1.1" x="0px" y="0px" enable-background="new 0 0 53 53">
                <g>
                  <defs>
                    <circle id="contact-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                  </defs>
                  <clipPath id="contact-SVGID_2_">
                    <use href="#contact-SVGID_1_" overflow="visible"></use>
                  </clipPath>
                  <g clip-path="url(#contact-SVGID_2_)">
                    <g>
                      <path fill="#0795DC" d="M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"></path>
                      <path fill="#0EABF4" d="M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"></path>
                    </g>
                  </g>
                </g><g fill="#F5F5F5"><path id="svg-contact" d="M26.5 26.5C28.986 26.5 31 24.486 31 22 31 19.514 28.986 17.5 26.5 17.5 24.014 17.5 22 19.514 22 22 22 24.486 24.014 26.5 26.5 26.5ZM26.5 28.75C23.496 28.75 17.5 30.258 17.5 33.25L17.5 34.375C17.5 34.994 18.006 35.5 18.625 35.5L34.375 35.5C34.994 35.5 35.5 34.994 35.5 34.375L35.5 33.25C35.5 30.258 29.504 28.75 26.5 28.75Z"></path></g>
              </svg>
            </div>
            <div className={attach === "" ? "hidden" : attach ? "rounded-full my-[6px] shadow-lg animate-scale_up4 overflow-hidden h-0 w-0" : "h-[53px] w-[53px] rounded-full my-[6px] shadow-lg animate-scale_down4"}>
              <svg viewBox="0 0 53 53" height="53" width="53" preserveAspectRatio="xMidYMid meet" class="h-full w-full" version="1.1" x="0px" y="0px" enable-background="new 0 0 53 53" >
                <g>
                  <defs>
                    <circle id="document-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                  </defs>
                  <clipPath id="document-SVGID_2_">
                    <use href="#document-SVGID_1_" overflow="visible"></use>
                  </clipPath>
                  <g clip-path="url(#document-SVGID_2_)">
                    <path fill="#5157AE" d="M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"></path>
                    <path fill="#5F66CD" d="M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"></path>
                  </g>
                </g>
                <g fill="#F5F5F5">
                  <path id="svg-document" d="M29.09 17.09c-.38-.38-.89-.59-1.42-.59H20.5c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H32.5c1.1 0 2-.9 2-2V23.33c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM27.5 22.5V18L33 23.5H28.5c-.55 0-1-.45-1-1z"></path>
                </g>
              </svg>
            </div>
            <div className={attach === "" ? "hidden" : attach ? "rounded-full my-[6px] shadow-lg animate-scale_up3 overflow-hidden h-0 w-0" : "h-[53px] w-[53px] rounded-full my-[6px] shadow-lg animate-scale_down3"}>
              <svg viewBox="0 0 53 53" height="53" width="53" preserveAspectRatio="xMidYMid meet" class="h-full w-full" version="1.1" x="0px" y="0px" enable-background="new 0 0 53 53">
                <g>
                  <defs>
                    <circle id="camera-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                  </defs>
                  <clipPath id="camera-SVGID_2_">
                    <use href="#camera-SVGID_1_" overflow="visible"></use>
                  </clipPath>
                  <g clip-path="url(#camera-SVGID_2_)">
                    <path fill="#D3396D" d="M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"></path>
                    <path fill="#EC407A" d="M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"></path>
                    <rect x="17" y="24.5" fill="#D3396D" width="15" height="9"></rect>
                  </g>
                </g>
                <g fill="#F5F5F5">
                  <path id="svg-camera" d="M27.795 17C28.742 17 29.634 17.447 30.2 18.206L30.5 18.609C31.066 19.368 31.958 19.815 32.905 19.815L34.2 19.815C35.746 19.815 37 21.068 37 22.615L37 32C37 34.209 35.209 36 33 36L20 36C17.791 36 16 34.209 16 32L16 22.615C16 21.068 17.254 19.815 18.8 19.815L20.095 19.815C21.042 19.815 21.934 19.368 22.5 18.609L22.8 18.206C23.366 17.447 24.258 17 25.205 17L27.795 17ZM26.5 22.25C23.601 22.25 21.25 24.601 21.25 27.5 21.25 30.399 23.601 32.75 26.5 32.75 29.399 32.75 31.75 30.399 31.75 27.5 31.75 24.601 29.399 22.25 26.5 22.25ZM26.5 24C28.433 24 30 25.567 30 27.5 30 29.433 28.433 31 26.5 31 24.567 31 23 29.433 23 27.5 23 25.567 24.567 24 26.5 24Z"></path>
                </g>
              </svg>
            </div>
            <div className={attach === "" ? "hidden" : attach ? "rounded-full my-[6px] shadow-lg animate-scale_up2 overflow-hidden h-0 w-0" : "h-[53px] w-[53px] rounded-full my-[6px] shadow-lg animate-scale_down2"}>
              <svg viewBox="0 0 53 53" height="53" width="53" preserveAspectRatio="xMidYMid meet" class="" fill="none"><g clip-path="url(#clip0_850:74884)"><circle cx="26.5" cy="26.5" r="26.5" fill="#0063CB"></circle><path d="M53 26.5C53 41.1356 41.1355 53 26.5 53C11.8645 53 0 41.1356 0 26.5L53 26.5Z" fill="#0070E6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M36.0017 22.17V26.4891C35.762 26.8114 35.3783 27.0202 34.9458 27.0202H33.1413C29.7615 27.0202 27.0216 29.76 27.0216 33.1398V34.9443C27.0216 35.3777 26.812 35.7621 26.4886 36.0017H22.17C19.3147 36.0017 17 33.687 17 30.8317V22.17C17 19.3147 19.3147 17 22.17 17H30.8317C33.687 17 36.0017 19.3147 36.0017 22.17ZM30.5216 25.5L31.4591 23.4375L33.5216 22.5L31.4591 21.5625L30.5216 19.5L29.5841 21.5625L27.5216 22.5L29.5841 23.4375L30.5216 25.5ZM23.5 22.5L24.9062 25.5938L28 27L24.9062 28.4062L23.5 31.5L22.0938 28.4062L19 27L22.0938 25.5938L23.5 22.5Z" fill="#F7F7F7"></path><path d="M34.9458 28.5202C35.2984 28.5202 35.6358 28.4554 35.9469 28.337C35.8132 29.1226 35.439 29.8536 34.868 30.4246L30.4246 34.868C29.8539 35.4388 29.1232 35.8129 28.338 35.9467C28.4566 35.6353 28.5216 35.2974 28.5216 34.9443V33.1398C28.5216 30.5885 30.5899 28.5202 33.1413 28.5202H34.9458Z" fill="#F7F7F7"></path></g><defs><clipPath id="clip0_850:74884"><rect width="53" height="53" fill="white"></rect></clipPath></defs></svg>
            </div>
            <div className={attach === "" ? "hidden" : attach ? "rounded-full my-[6px] shadow-lg animate-scale_up1 overflow-hidden h-0 w-0" : "h-[53px] w-[53px] rounded-full my-[6px] shadow-lg animate-scale_down1"}>
              <svg viewBox="0 0 53 53" height="53" width="53" preserveAspectRatio="xMidYMid meet" class="h-full w-full" version="1.1" x="0px" y="0px" enable-background="new 0 0 53 53" >
                <g>
                  <defs>
                    <circle id="image-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                  </defs>
                  <clipPath id="image-SVGID_2_">
                    <use href="#image-SVGID_1_" overflow="visible"></use>
                  </clipPath>
                  <g clip-path="url(#image-SVGID_2_)">
                    <path fill="#AC44CF" d="M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"></path>
                    <path fill="#BF59CF" d="M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"></path>
                    <rect x="17" y="24.5" fill="#AC44CF" width="18" height="9"></rect>
                  </g>
                </g>
                <g fill="#F5F5F5">
                  <path id="svg-image" d="M18.318 18.25 34.682 18.25C35.545 18.25 36.409 19.077 36.493 19.946L36.5 20.083 36.5 32.917C36.5 33.788 35.68 34.658 34.818 34.743L34.682 34.75 18.318 34.75C17.368 34.75 16.582 34.005 16.506 33.066L16.5 32.917 16.5 20.083C16.5 19.213 17.32 18.342 18.182 18.257L18.318 18.25 34.682 18.25ZM23.399 26.47 19.618 31.514C19.349 31.869 19.566 32.25 20.008 32.25L32.963 32.25C33.405 32.239 33.664 31.848 33.384 31.492L30.702 28.043C30.486 27.774 30.077 27.763 29.861 28.032L27.599 30.759 24.26 26.459C24.045 26.179 23.614 26.179 23.399 26.47ZM31.75 21.25C30.784 21.25 30 22.034 30 23 30 23.966 30.784 24.75 31.75 24.75 32.716 24.75 33.5 23.966 33.5 23 33.5 22.034 32.716 21.25 31.75 21.25Z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[52px] w-[40px] flex justify-center items-center" onClick={() => setAttach(!attach)}>{Attach_icon}</div>
      </div>
      <div className="grow shrink h-[40px] bg-white rounded-xl shadow-sm cursor-pointer" title="Type a message">
        <input type="text" onKeyDown={e => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }
        } className="outline-none rounded-lg h-[40px] placeholder:text-white/50 text-[15px] px-4 w-full bg-[#0f1110] text-white/60" placeholder="Type a message" onChange={e => onEmojiClick(e.target.value)} value={inputStr} />
      </div>
      <div className="h-[37px] w-[52px] flex items-center justify-center cursor-pointer">
        {send ? (Mic_icon) : (<div onClick={sendMessage}>{Send_icon}</div>)}
      </div>
    </div>
  )
}
