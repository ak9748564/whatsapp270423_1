import New_chat_component from "./../components/new_chat/New_chat_component";
import Right_component from "../components/right/Right_component";

function New_chat_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <New_chat_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Right_component/>
                </div>
            </div>
        </div>
    );
}
export default New_chat_page;