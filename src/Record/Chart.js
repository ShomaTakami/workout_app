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
    name: "Side Raise",
    current: 10,
    goal: 25
  },
  {
    name: "Squat",
    current: 245,
    goal: 400
  },
  {
    name: "Arm Curl",
    current: 60,
    goal: 100
  },
  {
    name: "Arm Curl",
    current: 60,
    goal: 100
  },
  {
    name: "Arm Curl",
    current: 60,
    goal: 100
  },
  {
    name: "Arm Curl",
    current: 60,
    goal: 100
  },
  {
    name: "Arm Curl",
    current: 60,
    goal: 100
  },
  {
    name: "Arm Curl",
    current: 60,
    goal: 100
  },
  {
    name: "Arm Curl",
    current: 60,
    goal: 100
  },
  {
    name: "Bench Press",
    current: 160,
    goal: 200
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

  render() {
    return (
      <BarChart
        width={1500}
        height={750}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis type='number' dataKey='goal' name='goal' unit='lbs' />
        <Tooltip />
        <Legend />
        <Bar dataKey='current' stackId='a' fill='#8884d8' />
        <Bar dataKey='goal' stackId='a' fill='#82ca9d' />
      </BarChart>
    );
  }
}
