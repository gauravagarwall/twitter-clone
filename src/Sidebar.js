import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';

function Sidebar() {
  return (
    <div className="sideBar">
      <TwitterIcon />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={TagIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon ={MailOutlinedIcon} text="Messages" />
      <SidebarOption Icon ={BookmarkBorderIcon} text="Bookmark" />
      <SidebarOption Icon ={ListAltIcon} text="List" />
      <SidebarOption Icon ={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon ={MoreHorizIcon} text="More" />

      {/* TweetButton */}
      <Button varient="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
