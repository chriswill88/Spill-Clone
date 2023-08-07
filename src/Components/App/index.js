import React, { useState } from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import Feed from "../Feed/index";
import Post from "../Post";
import { Posts as InitialPosts } from "./fakeData";
import Overlay from "../Overlay";

const App = () => {
  const [isOverlayExpanded, setIsOverlayExpanded] = useState(false);
  const [posts, setPosts] = useState(InitialPosts);

  const handleSpill = (text) => {
    if (!text.trim()) {
      alert("Text cannot be empty!");
      return;
    }

    const newPost = {
      id: posts.length + 1,
      userId: 2,
      desc: text,
      comment: 1,
      quote: 0,
      tea: 8,
    };

    setPosts([...posts, newPost]);
  };

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
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>

      <div className="mainOverlay">
        <Overlay
          expanded={isOverlayExpanded}
          onClick={handleOverlayClick}
          onSpill={handleSpill}
        />
      </div>
    </div>
  );
};

export default App;
