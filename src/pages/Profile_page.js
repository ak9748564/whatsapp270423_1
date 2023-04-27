import Right_component from "../components/right/Right_component";
import Profile_component from "./../components/profile/Profile_component";

function Profile_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Profile_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Right_component/>
                </div>
            </div>
        </div>
    );
}
export default Profile_page;