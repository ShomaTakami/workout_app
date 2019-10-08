import React from "react";
import DateMonth from "./DateMonth";
import CalendarDetail from "./CalendarDetail";

import "./Calender.css";

function Calendar({ match, history, location }) {
  return (
    <div style={{ backgroundColor: "black", height: "90vh" }}>
      <h1 className='cal_h1'>Calendar</h1>
      <br />
      <DateMonth />
      <br />
      <h1 className='cal_h1'>Detail</h1>
      <br />
      <br />
      {/* //TODO クリックしたら今日のトレーニングの詳細が出る */}
      <CalendarDetail className='detail' />
    </div>
  );
}
export default Calendar;
