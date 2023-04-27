import Default_message_timer_component from "./../../../components/settings/privacy/Default_message_timer_component";
import Chat_single from "../../../components/Chat_single";

function Default_message_timer_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Default_message_timer_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Default_message_timer_page;