import Groups_component from "./../../../components/settings/privacy/Groups_component";
import Chat_single from "../../../components/Chat_single";

function Groups_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Groups_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Groups_page;