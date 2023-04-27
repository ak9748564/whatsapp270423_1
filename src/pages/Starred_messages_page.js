import Starred_messages_component from "./../components/starred_messages/Starred_messages_component";
import Right_component from "../components/right/Right_component";

function Group_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Starred_messages_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Right_component/>
                </div>
            </div>
        </div>
    );
}
export default Group_page;