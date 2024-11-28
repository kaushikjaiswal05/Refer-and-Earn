import React from "react";
import "./help.css";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

function Help() {
  return (
    <div className="help">
      <div className="banner">
        <div className="icon">
          <HeadsetMicIcon style={{ fontSize: 45, paddingRight: 5 }} />
        </div>
        <div className="text">
          <h2>Want to dvelve deeper into the program?</h2>
          <p>
            Share your details to recieve expert insights from our program team!
          </p>
        </div>
        <button>
          Get in Touch <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Help;
