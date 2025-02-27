import axios from "axios";
import { Chart } from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import getDateRange from "../../../utils/getDateRange";

const Charts = () => {
  const [chartStat, setChartStat] = useState();
  const [chartData, setChartData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(1);

  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  const getCurrentStat = async (diapason) => {
    const { currentDate, startDate } = getDateRange(diapason);
    const from = new Date(startDate).getTime() / 1000;
    const to = new Date(currentDate).getTime() / 1000;

    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/fpi-bank/market_chart/range?vs_currency=usd&from=${from}&to=${to}`
    );

    return data.prices.map((price) => ({ x: new Date(price[0]), y: price[1] }));
  };

  const setStarter = async () => {
    const day = await getCurrentStat(1);
    const week = await getCurrentStat(7);
    const mounth = await getCurrentStat(30);

    console.log(day);

    setChartData({
      day,
      week,
      mounth,
    });
  };

  useEffect(() => {
    setStarter();
  }, []);

  useEffect(() => {
    if (chartStat && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: false,
              data: chartStat,
              borderColor: "#9FE632",
              tension: 0.1,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "time",
              time: { unit: "day" },
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
              title: {
                display: false,
              },
            },
            y: {
              beginAtZero: false,
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
              title: {
                display: false,
              },
            },
          },
          responsive: true,
          plugins: {
            legend: { display: false },
            title: {
              display: false,
            },
          },
        },
      });
    }
  }, [chartStat]);

  useEffect(() => {
    if (chartData) {
      setChartStat(chartData.day);
    }
  }, [chartData]);
  return (
    <div className="cc-chart">
      <div className="cc-chart-panel">
        <button
          className={selectedDate === 1 ? "active" : ""}
          onClick={() => {
            setChartStat(chartData?.day);
            setSelectedDate(1);
          }}
        >
          24 часа
        </button>
        <button
          className={selectedDate === 2 ? "active" : ""}
          onClick={() => {
            setChartStat(chartData?.week);
            setSelectedDate(2);
          }}
        >
          7 дней
        </button>
        <button
          className={selectedDate === 3 ? "active" : ""}
          onClick={() => {
            setChartStat(chartData?.mounth);
            setSelectedDate(3);
          }}
        >
          30 дней
        </button>
      </div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Charts;
