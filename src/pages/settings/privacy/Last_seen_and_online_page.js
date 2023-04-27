import Last_seen_and_online_component from "./../../../components/settings/privacy/Last_seen_and_online_component";
import Chat_single from "../../../components/Chat_single";

function Last_seen_and_online_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Last_seen_and_online_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Last_seen_and_online_page;