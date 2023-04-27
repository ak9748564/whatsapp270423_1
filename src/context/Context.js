import { createContext, useState } from 'react';

export const Context = createContext({
    profileType: "",
    changeProfileType: () => {},
    chatProfile: "",
    changeChatProfile: () => {},
    isProfileOpen: "",
    changeIsProfileOpen: () => {},
    searchMessages: "",
    changeSearchMessages: () => {},
    chatMessages: [],
    changeChatMessages: () => {},
    videoCall: "",
    changeVideoCall: () => {},
    audioCall: "",
    changeAudioCall: () => {},
    blockedContacts: [],
    changeBlockedContacts: () => {},
});

export const ContextProvider = ({ children }) => {
    const [profileType, setProfileType] = useState("self");
    const [isProfileOpen, setIsProfileOpen] = useState("");
    const [searchMessages, setSearchMessages] = useState("");
    const [chatProfile, setChatProfile] = useState({});
    const [videoCall, setVideoCall] = useState("");
    const [audioCall, setAudioCall] = useState("");
    const [blockedContacts, setBlockedContacts] = useState([]);

    const changeProfileType = (value) => {
        setProfileType(value);
    }
    const changeChatProfile = (value) => {
        setChatProfile(value);
    }
    const changeIsProfileOpen = (value) => {
        setIsProfileOpen(value);
    }
    const changeSearchMessages = (value) => {
        setSearchMessages(value);
    }
    const changeVideoCall = (value) => {
        setVideoCall(value);
    }
    const changeAudioCall = (value) => {
        setAudioCall(value);
    }
    const changeBlockedContacts = (value) => {
        setBlockedContacts(value);
    }
    return (
        <Context.Provider value={{ profileType, changeProfileType, isProfileOpen, changeIsProfileOpen,  searchMessages, changeSearchMessages, chatProfile, changeChatProfile, videoCall, changeVideoCall, audioCall, changeAudioCall, blockedContacts, changeBlockedContacts }}>
            {children}
        </Context.Provider>
    )
}
