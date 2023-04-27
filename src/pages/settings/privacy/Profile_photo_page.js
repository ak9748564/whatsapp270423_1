import Profile_photo_component from "./../../../components/settings/privacy/Profile_photo_component";
import Chat_single from "../../../components/Chat_single";

function Profile_photo_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Profile_photo_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Chat_single/>
                </div>
            </div>
        </div>
    );
}
export default Profile_photo_page;