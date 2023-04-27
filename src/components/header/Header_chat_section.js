import React, { useContext, useEffect } from "react";
import Header_group from "./Header_group";
import Header_normal from "./Header_normal";
import Header_self from "./Header_self";
import Header_business from "./Header_business";
import { Context } from "./../../context/Context";

export default function Header_chat_section(props) {

  // const { profileType } = useContext(Context);
  const profileType = "normal";
  
  return (
    <div>
      <div className={profileType === "group" ? "" : "hidden"}>
        <Header_group profileTypeGroup={() => props.changePType("group")} closeProfile={props.closeProfile} />
      </div>
      <div className={profileType === "normal" ? "" : "hidden"}>
        <Header_normal profileTypeGroup={() => props.changePType("self")} />
      </div>
      <div className={profileType === "business" ? "" : "hidden"}>
        <Header_business profileTypeGroup={() => props.changePType("business")} />
      </div>
      <div className={profileType === "self" ? "" : "hidden"}>
        <Header_self profileTypeGroup={() => props.changePType("self")} />
      </div>
    </div>
  );
}
