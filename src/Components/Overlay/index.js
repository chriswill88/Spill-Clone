import React, { useState } from "react";
import "./styles.css";

const Overlay = ({ expanded, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOverlayClick = () => {
    setIsExpanded(!isExpanded);
    onClick(); // Notify parent component (App.js) about the click event
  };

  return (
    <>
      <div
        className={`overlay ${isExpanded ? "expanded" : ""}`}
        onClick={handleOverlayClick}
      >
        <div className="content">
          <div className="bottombarContainer">
            <span className="bottombarImg"></span>
            <div>
              {isExpanded ? (
                <>
                  <div className="topButtons">
                    <button className="cancelButton">Cancel</button>
                    <button className="spillButton">Spill</button>
                  </div>
                  <div className="insideBottombarContainer2">
                    <textarea
                      placeholder="Add Text Here"
                      className="bottombarInput2"
                    ></textarea>
                  </div>
                </>
              ) : (
                <div className="insideBottombarContainer1">
                  <div className="bottomProfileImg"></div>
                  <input className="bottombarInput" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
