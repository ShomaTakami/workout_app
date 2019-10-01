import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchAppBar from "./header/AppBar";

import Workout from "./pages/Workout/WorkoutTable";
import Today from "./pages/Today/Today";
import Timer from "./pages/Timer/Timer";
import Calender from "./pages/Calendar/Calender";
import Account from "./pages/account/Account";

const AppPage = () => {
  return (
    <>
      <SearchAppBar />
      <Switch>
        <Route path='/workout' exact component={Workout} />
        <Route path='/today' component={Today} />
        <Route path='/timer' component={Timer} />
        <Route path='/calender' exact component={Calender} />
        <Route path='/account' exact component={Account} />
      </Switch>
    </>
  );
};

export default AppPage;
