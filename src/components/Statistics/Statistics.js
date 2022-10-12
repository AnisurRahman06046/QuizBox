import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Statistics.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Statistics = () => {
  const datas = useLoaderData();
  const { data } = datas;
  console.log(data);

  return (
    <div className="chart">
      <h1>Quiz Statistics</h1>
      <div>
        <LineChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="name"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
