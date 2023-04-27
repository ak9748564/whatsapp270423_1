import Select_chats_component from "./../components/select_chats/Select_chats_component";
import Right_component from "../components/right/Right_component";

function Select_chats_page(){
    return(
        <div>
            <div className="flex min-w-[800px]">
                <div className="chats_section w-[400px]">
                    <Select_chats_component/>
                </div>
                <div className="single_chat grow shrink">
                    <Right_component/>
                </div>
            </div>
        </div>
    );
}
export default Select_chats_page;