import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Status from "./components/status/Status";
import Show_status from "./components/status/Show_status";
import Community_page from "./pages/Community_page";
import Group_page from "./pages/Group_page";
import Archived_page from "./pages/Archived_page";
import Settings_page from "./pages/settings/Settings_page";
import Select_chats_page from "./pages/Select_chats_page";
import Starred_messages_page from "./pages/Starred_messages_page";
import Unread_chats_page from "./pages/Unread_chats_page";
import New_chat_page from "./pages/New_chat_page";
import Header from "./components/header/Header";
import Settings_notifications_page from "./pages/settings/Settings_notifications_page";
import Settings_help_page from "./pages/settings/Settings_help_page";
import Profile_page from "./pages/Profile_page";
import Privacy_page from "./pages/settings/privacy/Privacy_page";
import Last_seen_and_online_page from "./pages/settings/privacy/Last_seen_and_online_page";
import About_page from "./pages/settings/privacy/About_page";
import Profile_photo_page from "./pages/settings/privacy/Profile_photo_page";
import Groups_page from "./pages/settings/privacy/Groups_page";
import Default_message_timer_page from "./pages/settings/privacy/Default_message_timer_page";
import Blocked_contacts_page from "./pages/settings/privacy/Blocked_contacts_page";
import Audio_call from "./components/Audio_call";
import Video_call from "./components/Video_call";
import Emoji from "./components/Emoji";
import store from './store/store';

import axios from "axios";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "./context/Context";
import { Provider } from 'react-redux'

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Home_page />} />
            <Route path="/status" element={<Status />} />
            <Route path="/status/show-status" element={<Show_status />} />
            <Route path="/community" element={<Community_page />} />
            <Route path="/group" element={<Group_page />} />
            <Route path="/new-chat" element={<New_chat_page />} />
            <Route path="/archived" element={<Archived_page />} />
            <Route path="/settings" element={<Settings_page />} />
            <Route path="/settings/notifications" element={<Settings_notifications_page />} />
            <Route path="/select-chats" element={<Select_chats_page />} />
            <Route path="/starred-messages" element={<Starred_messages_page />} />
            <Route path="/unread-chats" element={<Unread_chats_page />} />
            <Route path="/settings/help" element={<Settings_help_page />} />
            <Route path="/settings/privacy" element={<Privacy_page />} />
            <Route path="/settings/privacy/last-seen-and-online" element={<Last_seen_and_online_page />} />
            <Route path="/settings/privacy/profile-photo" element={<Profile_photo_page />} />
            <Route path="/settings/privacy/about" element={<About_page />} />
            <Route path="/settings/privacy/groups" element={<Groups_page />} />
            <Route path="/settings/privacy/default-message-timer" element={<Default_message_timer_page />} />
            <Route path="/settings/privacy/blocked-contacts" element={<Blocked_contacts_page />} />
            <Route path="/profile" element={<Profile_page />} />
            <Route path="/audio-call" element={<Audio_call />} />
            <Route path="/video-call" element={<Video_call />} />
            <Route path="/emoji" element={<Emoji />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/header" element={<Header />} />
          </Routes>
        </ContextProvider>
      </Provider>
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
      </>
    </div>
  );
}

export default App;
