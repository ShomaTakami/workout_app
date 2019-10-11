const initialState = {
  rows: []
};

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

      const newRows = editedRows.map(row => {
        if (row.id === action.payload.id) {
          return action.payload;
        }
        return row;
      });

      return {
        ...state,
        rows: newRows
      };
    default:
      return state;
  }
}
