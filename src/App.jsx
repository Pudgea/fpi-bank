import Header from "./components/ui/Header";
import "./css/App.css";
import "./css/header.css";
import "./css/charts.css";
import "./css/info.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import getDateRange from "./utils/getDateRange";
import {
  Chart,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import ChartContainer from "./components/ui/Charts";

Chart.register(
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

function App() {
  return (
    <div className="container">
      <Header />
      <ChartContainer />
      <div className="info-container">
        <div className="ic-main">
          <p>gay</p>
        </div>
        <div className="ic-bg"></div>
      </div>
    </div>
  );
}

export default App;
