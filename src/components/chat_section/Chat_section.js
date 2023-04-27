import whatsapp_web_bg_light from "./../images/whatsapp_web_bg_light.jpg";
import Header_chat_section from "../header/Header_chat_section";
import Footer_chat_section from "../footer/Footer_chat_section";
import Chat_area from "../chat_area/Chat_area";

function Chat_section(props) {
  return (
    <div className="h-[100vh] flex flex-col grow shrink">
      <div>
        <Header_chat_section pType={props.pType} changePType={props.changePType} closeProfile={props.closeProfile} />
      </div>
      <div className="h-full grow shrink bg-cover bg-no-repeat bg-center flex  bg-white" style={{ backgroundImage: `url(${whatsapp_web_bg_light})` }}>
        <div className=" w-full px-5 lg:px-[65px] pt-2 chat_section overflow-y-scroll">
          <Chat_area/>
        </div>
      </div>
      <div>
        <Footer_chat_section/>
      </div>
    </div>
  );
}
export default Chat_section;
