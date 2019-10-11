import React from "react";
import Calendar from "react-calendar";

export default class DateMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      //月のデータ
      month_days: {
        20191014: { text: "bench Press" },
        20191017: { text: "Squat" }
      }
    };
    this.getTileClass = this.getTileClass.bind(this);
    this.getTileContent = this.getTileContent.bind(this);
  }

  // state の日付と同じ表記に変換
  getFormatDate(date) {
    return `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${(
      "0" + date.getDate()
    ).slice(-2)}`;
  }

  //日付のクラスを付与 (祝日用)
  getTileClass({ date, view }) {
    // 月表示のときのみ
    if (view !== "month") {
      return "";
    }
    const day = this.getFormatDate(date);
    return this.state.month_days[day] && this.state.month_days[day].is_holiday
      ? "holiday"
      : "";
  }

  //日付の内容を出力
  getTileContent({ date, view }) {
    // 月表示のときのみ
    if (view !== "month") {
      return null;
    }
    const day = this.getFormatDate(date);
    return (
      <p>
        <br />
        {this.state.month_days[day] && this.state.month_days[day].text
          ? this.state.month_days[day].text
          : " "}
      </p>
    );
  }

  render() {
    console.log(this.getTileClass);
    return (
      <Calendar
        locale='en'
        value={this.state.date}
        tileClassName={this.getTileClass}
        tileContent={this.getTileContent}
        className='calendar'
      />
    );
  }
}
