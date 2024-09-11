import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../actions/actionsNote";

const initialState = {
  notesList: [],
  noteCount: 0,
};

const noteReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE) {
    return {
      ...state,
      noteCount: state.noteCount + 1,
      notesList: [...state.notesList, payload],
    };
  }

  if (type === DELETE_NOTE) {
    return {
      ...state,
      noteCount: state.noteCount - 1,
      notesList: state.notesList.filter((note) => note.id !== payload),
    };
  }

  if (type === EDIT_NOTE) {
    return {
      ...state,
      notesList: state.notesList.map((note) =>
        note.id === payload.id ? { ...note, ...payload.updatedNote } : note
      ),
    };
  }

  return state;
};

export default noteReducer;
