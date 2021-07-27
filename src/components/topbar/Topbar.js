import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Topbar() {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">Salesadmin</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Language />
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <div className="topAvatar">
            <img
              src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
