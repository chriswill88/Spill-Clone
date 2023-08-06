import React, { useState } from "react";
import "./styles.css";

const Overlay = ({ expanded, onClick, onSpill }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [spillText, setSpillText] = useState("");

  const handleOverlayExpandClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onClick();
    }
  };

  const handleCancelClick = (event) => {
    event.stopPropagation();
    setIsExpanded(false);
    onClick();
  };

  const handleSpillClick = () => {
    onSpill(spillText);
    setIsExpanded(false);
    setSpillText("");
  };

  return (
    <>
      <div
        className={`overlay ${isExpanded ? "expanded" : ""}`}
        onClick={handleOverlayExpandClick}
      >
        <div className="content">
          <div className="bottombarContainer">
            <span className="bottombarImg"></span>
            <div>
              {isExpanded ? (
                <>
                  <div className="topButtons">
                    <button
                      className="cancelButton"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>{" "}
                    <button className="spillButton" onClick={handleSpillClick}>
                      Spill
                    </button>
                  </div>
                  <div className="insideBottombarContainer2">
                    <textarea
                      placeholder="Add Text Here"
                      className="bottombarInput2"
                      value={spillText}
                      onChange={(e) => setSpillText(e.target.value)}
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
