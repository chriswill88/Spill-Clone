import React, { useState } from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import Feed from "../Feed/index";
import Post from "../Post";
import { Posts } from "./fakeData";
import Overlay from "../Overlay";

const App = () => {
  const [isOverlayExpanded, setIsOverlayExpanded] = useState(false);

  const handleOverlayClick = () => {
    setIsOverlayExpanded(!isOverlayExpanded);
  };

  return (
    <div className="app">
      <div className="topbarContainer">
        <SearchIcon />
        <span className="topbarLink">Spill</span>
        <NotificationsIcon />
      </div>

      <ul className="middleContainerLinks">
        <li className="middleContainerLink">Fresh Tea</li>
        <li className="middleContainerLink">My Brew</li>
      </ul>

      <div className="middleContainer">
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>

      <div className="mainOverlay">
        <Overlay expanded={isOverlayExpanded} onClick={handleOverlayClick} />
      </div>
      {/* <div className="bottombarContainer">
        <span className="bottombarImg"></span>
        <div className="postbar">
          <input placeholder="Add Text Here" className="bottombarInput" />
        </div>
      </div> */}
    </div>
  );
};

export default App;
