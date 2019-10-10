import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchAppBar from "./header/AppBar";

import Workout from "./Workout/Workout";
import Record from "./Record/Record";
import Calendar from "./Calendar/Calendar";

const AppPage = () => {
  return (
    <>
      <SearchAppBar />
      <Switch>
        <Route path='/' exact={true} component={Workout} />
        <Route path='/record' component={Record} />
        <Route path='/calendar' component={Calendar} />
      </Switch>
    </>
  );
};

export default AppPage;
