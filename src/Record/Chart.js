import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

  render() {
    return (
      <ResponsiveContainer width={1200} height={800}>
        <BarChart
          data={this.props.rows}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='menu' />
          <YAxis type='number' name='goal' unit='lbs' />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey='weight' label='Now' fill='#8884d8' />
          <Bar dataKey='goal' stackId='a' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
