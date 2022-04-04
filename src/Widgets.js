import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="GrvAgarwal1"
          options={{ height: 500 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
