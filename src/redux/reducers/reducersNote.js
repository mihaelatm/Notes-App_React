import { ADD_NOTE } from "../actions/actionsNote";

const initialState = {
  notesList: [],
};

const noteReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE) {
    return {
      ...state,
      notesList: [...state.notesList, payload],
    };
  }

  return state;
};

export default noteReducer;
