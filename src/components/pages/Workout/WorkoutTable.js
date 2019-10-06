import React from "react";
import MaterialTable from "material-table";

export default function WorkoutTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Menu", field: "menu" },
      { title: "BodyPart", field: "bodypart" },
      { title: "Weight", field: "weight" },
      { title: "Reps", field: "reps", type: "numeric" },
      { title: "Sets", field: "sets", type: "numeric" }
    ],
    data: [
      {
        menu: "dumbell press",
        bodypart: "chest",
        weight: "65lbs",
        reps: 10,
        sets: 3
      }
    ]
  });

  return (
    <MaterialTable
      title='Editable Example'
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
}
