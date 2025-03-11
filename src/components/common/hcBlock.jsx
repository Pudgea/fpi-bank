import React from "react";

const HcBlock = ({ url, name, text }) => {
  return (
    <div className="hc-block">
      <div className="hc-img">
        <img src={url} alt="" />
      </div>
      <div className="hcb-main">
        <h2>{name}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HcBlock;
