import { addFormData } from "../actions/formData";

// constant file

function createData(id, menu, part, weight, reps, sets) {
  return { id, menu, part, weight, reps, sets };
}
// function createData(name, bodypart, weight, reps, sets, updated, goal) {
//   return { name, bodypart, weight, reps, sets, updated, goal };
// }

const initialState = {
  rows: [
    // createData('123456789', "Random title1", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    // createData('123456712', "Random title2", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    // createData('223456789', "Random title3", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    // createData('323456789', "Random title4", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
    // createData('423456789', "Random title5", "open", "https://api.github.com/repos/angular/angular/", "2019-09-24T10:01:21Z", "2019-09-24T10:01:21Z"),
  ]
};

// state => most updated data

// if threre is nothing in the state, use intialState
export default function formData(state = initialState, action) {
  //action.type > condition
  switch (action.type) {
    case "GET_FORM_DATA":
      //1. update state
      //2. return the updated state
      return {
        ...state,
        rows: action.payload
      };
    case "ADD_FORM_DATA":
      //the latest updated state
      let copiedRows = state.rows;
      copiedRows.push(action.payload);

      return {
        ...state,
        rows: copiedRows
      };
    case "DELETE_FORM_DATA":
      let reducedRows = state.rows;
      return {
        ...state,
        rows: reducedRows.filter(row => row.id !== action.payload)
      };
    case "EDIT_FORM_DATA":
      let editedRows = state.rows;
      console.log("edited object", action.payload);

      // Answer1: using map
      const newRows = editedRows.map(row => {
        if (row.id === action.payload.id) {
          return action.payload;
        }
        return row;
      });

      //Answer2: using index and replacing it
      // const index = editedRows.findIndex((row) => row.id === action.payload.name)

      // editedRows[index] = action.payload;

      return {
        ...state,
        rows: newRows //or editedRows
      };
    default:
      return state;
  }
}
