import About_component from "./../../../components/settings/privacy/About_component";
import Chat_single from "../../../components/Chat_single";

function About_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <About_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default About_page;