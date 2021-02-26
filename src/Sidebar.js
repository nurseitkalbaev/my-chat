import React from "react";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Button, Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://yt3.ggpht.com/yti/ANoDKi6Kc6iro2A5Q7Bnn9AymPPzJxJQdN1IsyzeOGz7nw=s88-c-k-c0x00ffffff-no-rj-mo" />
        <div className="sidebar__headerRight">
          <Button>
            <DonutLarge />
          </Button>
          <Button>
            <Chat />
          </Button>
          <Button>
            <MoreVert />
          </Button>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
