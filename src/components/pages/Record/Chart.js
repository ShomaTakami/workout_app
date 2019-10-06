import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Bench Press",
    Goal: 6000,
    Before: 2400,
    Current: 100
  },
  {
    name: "Page B",
    Goal: 6000,
    Before: 1398,
    Current: 210
  },
  {
    name: "Page C",
    Goal: 6000,
    Before: 9800,
    Current: 290
  },
  {
    name: "Page D",
    Goal: 6000,
    Before: 3908,
    Current: 300
  },
  {
    name: "Page E",
    Goal: 6000,
    Before: 4800,
    Current: 181
  },
  {
    name: "Page F",
    Goal: 6000,
    Before: 3800,
    Current: 500
  },
  {
    name: "Page G",
    Goal: 6000,
    Before: 4300,
    Current: 100
  },
  {
    name: "Page G",
    Goal: 6000,
    Before: 4300,
    Current: 100
  },
  {
    name: "Page G",
    Goal: 6000,
    Before: 4300,
    Current: 100
  },
  {
    name: "Page G",
    Goal: 6000,
    Before: 4300,
    Current: 100
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9hjfkp73/";

  render() {
    return (
      <BarChart
        width={1600}
        height={750}
        data={data}
        margin={{
          top: 150,
          right: 30,
          left: 190,
          bottom: 10
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='Before' stackId='a' fill='#8884d8' />
        <Bar dataKey='Current' stackId='a' fill='#82ca9d' />
        <Bar dataKey='Goal' fill='#ffc658' />
      </BarChart>
    );
  }
}
