import React from "react";
import WorkoutTable from "./WorkoutTable";

import "./workout.css";

function Workout({ match, history, location }) {
  return (
    <div
      className='work_page'
      style={{ backgroundColor: "black", height: "90vh" }}>
      <h1 className='work_h1'>Table</h1>
      <WorkoutTable />
      <h1 className='work_h1'>Youtube</h1>
      {/* // TODO 下にyoutube API 動画検索　筋トレ方法探せる */}
    </div>
  );
}

export default Workout;
