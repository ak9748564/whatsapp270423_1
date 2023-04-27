import Privacy_component from "./../../../components/settings/privacy/Privacy_component";
import Chat_single from "../../../components/Chat_single";

function Privacy_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Privacy_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Privacy_page;