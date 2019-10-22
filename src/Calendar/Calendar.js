import React from "react";
import DateMonth from "./DateMonth";
import StickyHeadTable from "./CalendarDetail";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addToCalendar, getFormData, editFormData } from "../actions/formData";

import "./Calender.css";
import "../header/AppBar.css";

function Calendar(props, { match, history, location }) {
  React.useEffect(() => {
    if (props.formDataRows.length === 0) {
      props.getFormData();
    }
  });

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
      <StickyHeadTable className='today_content' rows={props.formDataRows} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formDataRows: state.formDataReducer.rows
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addToCalendar,
      getFormData,
      editFormData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
