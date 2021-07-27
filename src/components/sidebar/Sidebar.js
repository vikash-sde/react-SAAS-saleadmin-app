import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  TrendingUp,
  InsertChart,
  Timeline,
  PermIdentity,
  Web,
  AttachMoney,
  Info,
  WorkOutline,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Equalizer,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <InsertChart className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <PermIdentity />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Web />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney />
              Transaction
            </li>
            <li className="sidebarListItem">
              <Equalizer />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Stuff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutline />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Info />
              Info
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
