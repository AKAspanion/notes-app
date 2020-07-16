import { ADD_NOTE } from "../actions/types";

export default (state = { notes: [] }, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
