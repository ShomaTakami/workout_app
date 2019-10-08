import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchAppBar from "./header/AppBar";

import Workout from "./Workout/Workout";
import Record from "./Record/Record";
import Timer from "./Timer/Timer";
import Calendar from "./Calendar/Calendar";
import Account from "./account/Account";

const AppPage = () => {
  return (
    <>
      <SearchAppBar />
      <Switch>
        <Route path='/workout' exact={true} component={Workout} />
        <Route path='/record' component={Record} />
        <Route path='/timer' component={Timer} name='Filange' seconds={180} />
        <Route path='/calendar' exact component={Calendar} />
        <Route path='/account' exact component={Account} />
      </Switch>
    </>
  );
};

export default AppPage;
