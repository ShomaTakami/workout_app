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
    before: 2400,
    current: 100,
    goal: 6000
  },
  {
    name: "Bench Press",
    before: 2400,
    current: 100,
    goal: 6000
  },
  {
    name: "Bench Press",
    before: 2400,
    current: 100,
    goal: 6000
  },
  {
    name: "Bench Press",
    before: 2400,
    current: 100,
    goal: 6000
  },
  {
    name: "Bench Press",
    before: 2400,
    current: 100,
    goal: 6000
  },
  {
    name: "Bench Press",
    before: 2400,
    current: 100,
    goal: 6000
  },
  {
    name: "Bench Press",
    before: 2400,
    current: 100,
    goal: 6000
  },
  {
    name: "Bench Press",
    before: 2400,
    current: 100,
    goal: 6000
  },
  {
    name: "Bench Press",
    before: 2400,
    current: 100,
    goal: 6000
  },
  {
    name: "Bench Press",
    before: 2400,
    current: 100,
    goal: 6000
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9hjfkp73/";

  render() {
    return (
      <BarChart
        width={1600}
        height={900}
        data={data}
        margin={{ top: 35, right: 20, left: 20, bottom: 0 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='before' stackId='a' fill='#8884d8' />
        <Bar dataKey='current' stackId='a' fill='#82ca9d' />
        <Bar dataKey='goal' fill='#ffc658' />
      </BarChart>
    );
  }
}
