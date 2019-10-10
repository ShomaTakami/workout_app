import React from "react";
import DateMonth from "./DateMonth";
import CalendarDetail from "./CalendarDetail";
import { Link } from "react-router-dom";

import "./Calender.css";

function Calendar({ match, history, location }) {
  return (
    <div className='cal_page'>
      <div className='header'>
        <Link to='/' className='li left'>
          <button className='btn-square'>Menu</button>
        </Link>
        <h1 className='cal_h1 li'>Calendar</h1>
        <Link to='/record' className='li right'>
          <button className='btn-square'>Chart</button>
        </Link>
      </div>
      <br />
      <DateMonth />
      {/* //TODO クリックしたら今日のトレーニングの詳細が出る */}
      <CalendarDetail className='detail' />
    </div>
  );
}
export default Calendar;
