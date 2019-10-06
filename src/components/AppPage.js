import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchAppBar from "./header/AppBar";

import Workout from "./pages/Workout/Workout";
import Record from "./pages/Record/Record";
import Timer from "./pages/Timer/Timer";
import Calendar from "./pages/Calendar/Calendar";
import Account from "./pages/account/Account";

const AppPage = () => {
  return (
    <>
      <SearchAppBar />
      <Switch>
        <Route path='/workout' exact component={Workout} />
        <Route path='/record' component={Record} />
        <Route path='/timer' component={Timer} name='Filange' seconds={180} />
        <Route path='/calendar' exact component={Calendar} />
        <Route path='/account' exact component={Account} />
      </Switch>
    </>
  );
};

export default AppPage;
