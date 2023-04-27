import React from 'react';
import { useState } from 'react';
import Settings from "./Settings";
import { Link } from 'react-router-dom';
import Sett_notifications from './Settings_notifications_component';

export default function Settings_component(props) {
    const [ settings, setSettings ] = useState(true);
  return (
    <div>
        <div className={ settings === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : settings ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
            <Settings/>
        </div>
    </div>
  )
}
