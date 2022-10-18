import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ src, Icon, title }) {
  //Icon --> I is capitalised as it's a component which is passed as a prop
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
