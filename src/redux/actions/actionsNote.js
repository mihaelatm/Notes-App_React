export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

export const addNote = (noteData) => ({
  type: ADD_NOTE,
  payload: noteData,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const updateNote = (id) => ({
  type: EDIT_NOTE,
  payload: id,
});
