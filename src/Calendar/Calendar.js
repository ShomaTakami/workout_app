import React from "react";
import DateMonth from "./DateMonth";
import StickyHeadTable from "./CalendarDetail";
import { Link } from "react-router-dom";

import "./Calender.css";
import "../header/AppBar.css";

function Calendar({ match, history, location }) {
  return (
    <div className='cal_page'>
      <div id='header'>
        <Link to='/' className='li left '>
          &#8592; Menu
        </Link>
        <h1 className='chal_h1 li'>Calendar</h1>
        <Link to='/record' className='li right'>
          Chart &#8594;
        </Link>
      </div>
      <DateMonth className='calendar_content' />
      <StickyHeadTable className='today_content' />
    </div>
  );
}

export default Calendar;
