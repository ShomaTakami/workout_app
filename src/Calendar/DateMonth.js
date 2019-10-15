import React from "react";
import { Calendar as CalendarBox } from "react-calendar";

export default class DateMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      month_days: {
        data: { menu: "Done" }
      }
    };
    this.getTileClass = this.getTileClass.bind(this);
    this.getTileContent = this.getTileContent.bind(this);
  }

  getFormatDate(date) {
    return `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${(
      "0" + date.getDate()
    ).slice(-2)}`;
  }

  getTileClass({ date, view }) {
    if (view !== "month") {
      return "";
    }
    const day = this.getFormatDate(date);
    return this.state.month_days[day] && this.state.month_days[day].is_holiday
      ? "holiday"
      : "";
  }

  getTileContent({ date, view }) {
    if (view !== "month") {
      return null;
    }
    const day = this.getFormatDate(date);
    return (
      <p>
        <br />
        {this.state.month_days[day] && this.state.month_days[day].menu
          ? this.state.month_days[day].menu
          : " "}
      </p>
    );
  }

  render() {
    console.log(this.getTileClass);
    return (
      <CalendarBox
        locale='en'
        value={this.state.date}
        tileClassName={this.getTileClass}
        tileContent={this.getTileContent}
        className='calendar'
      />
    );
  }
}
