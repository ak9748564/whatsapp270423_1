import Right_component from "./../components/right/Right_component";
import Archived_component from "./../components/archived/Archived_component";

function Archived_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Archived_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Right_component/>
                </div>
            </div>
        </div>
    );
}
export default Archived_page;