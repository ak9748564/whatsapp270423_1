import Community_component from "./../components/community/Community_component";
import Right_component from "../components/right/Right_component";

function Community_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Community_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Right_component/>
                </div>
            </div>
        </div>
    );
}
export default Community_page;