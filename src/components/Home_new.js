import New_chats_component from "./home/New_chats_component";
import Chat_single from "./Chat_single";
import Right_component from "./right/Right_component";
import { useState } from "react";


function Home(){
    
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section">
                    <New_chats_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Right_component />
                </div>
            </div>
        </div>
    );
}
export default Home;