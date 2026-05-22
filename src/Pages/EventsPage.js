import React from "react";

import groundGlowAsset from "../assets/hwb-ground-glow.jpg";
import walkAsset from "../assets/hwb-walk.jpg";
import standTallAsset from "../assets/hwb-stand-tall.jpg";
import veteransAsset from "../assets/hwb-veterans-wellbeing-day.jpg";
import ballAsset from "../assets/hwb-ball.svg";

export default function EventsPage() {
  const titleStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontFamily: "Montserrat",
    fontSize: "24px",
  };

  const imageWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  };

  const imgStyle = {
    maxWidth: "90%",
    height: "auto",
  };

  return (
    <div className="events-page">
      <h1 style={titleStyle}>Events</h1>

      <div style={imageWrapperStyle}>
        <img src={groundGlowAsset} alt="Ground & Glow event" style={imgStyle} />
      </div>

      <div style={imageWrapperStyle}>
        <img src={walkAsset} alt="Hwb Walk and Talk Group event" style={imgStyle} />
      </div>

      <div style={imageWrapperStyle}>
        <img src={standTallAsset} alt="Stand Tall event" style={imgStyle} />
      </div>

      <div style={imageWrapperStyle}>
        <img src={veteransAsset} alt="Veterans Wellbeing Day event" style={imgStyle} />
      </div>

      <div style={imageWrapperStyle}>
        <img src={ballAsset} alt="Hwb Ball event" style={imgStyle} />
      </div>
    </div>
  );
}
