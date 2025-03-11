import React from "react";
import Charts from "./Charts";
import ChartsText from "./ChartsText";

const ChartContainer = () => {
  return (
    <div className="charts-container">
      <div className="cc-head">
        <h1>
          Следите за ростом <span className="primary">FPI банок</span> на самом
          <span id="mega-span">
            <span id="mega">mega</span> крутом
          </span>{" "}
          сайте
        </h1>
      </div>
      <div className="cc-main">
        <Charts />
        <ChartsText />
      </div>
    </div>
  );
};

export default ChartContainer;
