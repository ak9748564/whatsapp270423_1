import React from 'react';
import Archived_filled from './Archived_filled';
import Archived_empty from './Archived_empty';

export default function Archived_component() {
    const [archivedEmpty, setArchivedEmpty] = React.useState(true);
    const [archivedFilled, setArchivedFilled] = React.useState(false);
    const [noOfChatsArchived, setNoOfArchivedChats] = React.useState(0);

    React.useEffect(() => {
        if(noOfChatsArchived === 0){
            setArchivedEmpty(true);
            setArchivedFilled(false);
        }else{
            setArchivedEmpty(false);
            setArchivedFilled(true);
        }
    }, [archivedEmpty, archivedFilled, noOfChatsArchived]);
    
  return (
    <div>
        <div className={ archivedFilled === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : archivedFilled ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
            <Archived_filled archivedEmpty={()=>setArchivedEmpty(false)}/>
        </div>
        <div className={ archivedEmpty === "" ? "h-screen w-[400px] fixed left-[-400px] z-10 bg-white" : archivedEmpty ? "animate-new_chats_show fixed w-[400px] bg-white z-10" : "animate-new_chats_hide fixed w-[400px] bg-white z-10" }>
            <Archived_empty/>
        </div>
    </div>
  )
}
