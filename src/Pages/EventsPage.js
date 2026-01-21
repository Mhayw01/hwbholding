import React from "react";

import walkAsset from "../assets/hwb-walk.svg";
import veteransAsset from "../assets/hwb-veterans.svg";
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
        <img src={walkAsset} alt="Hwb Walk event" style={imgStyle} />
      </div>

      <div style={imageWrapperStyle}>
        <img src={veteransAsset} alt="Hwb Veterans event" style={imgStyle} />
      </div>

      <div style={imageWrapperStyle}>
        <img src={ballAsset} alt="Hwb Ball event" style={imgStyle} />
      </div>
    </div>
  );
}
