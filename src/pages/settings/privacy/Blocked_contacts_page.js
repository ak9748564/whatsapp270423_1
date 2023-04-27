import Blocked_contacts_component from "./../../../components/settings/privacy/Blocked_contacts_component";
import Chat_single from "../../../components/Chat_single";

function Blocked_contacts_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Blocked_contacts_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Blocked_contacts_page;