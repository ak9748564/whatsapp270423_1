import Settings_help_component from "../../components/settings/Settings_help_component";
import Chat_single from "../../components/Chat_single";

function Settings_help_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Settings_help_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Settings_help_page;