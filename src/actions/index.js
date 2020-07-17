import { ADD_NOTE, UPDATE_NOTE } from "./types";

export const addNote = (payload) => {
  return {
    type: ADD_NOTE,
    payload,
  };
};

export const updateNote = (payload) => {
  return {
    type: UPDATE_NOTE,
    payload,
  };
};
