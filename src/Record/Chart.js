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

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

  render() {
    // console.log(this.state.rows);
    return (
      <BarChart
        width={1500}
        height={900}
        data={this.props.rows}
        margin={{
          top: 25,
          right: 30,
          left: 20,
          bottom: 50
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='menu' />
        <YAxis type='number' name='goal' unit='lbs' />
        <Tooltip />
        <Legend />
        <Bar dataKey='weight' label='Now' fill='#8884d8' />
        <Bar dataKey='goal' stackId='a' fill='#82ca9d' />
      </BarChart>
    );
  }
}
