import { useState } from "react";
import styles from "./styles.module.css";
import { addNote } from "../../redux/actions/actionsNote";
import { connect } from "react-redux";

function NoteForm({ addNoteToList }) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote({
      ...note,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNoteToList({
      ...note,
      id: new Date().getTime().toString(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <input
        value={note.title}
        type="text"
        name="title"
        onChange={handleChange}
        required
        placeholder="Title"
      />
      <textarea
        value={note.content}
        name="content"
        onChange={handleChange}
        placeholder="Content ... "
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNoteToList: (noteData) => dispatch(addNote(noteData)),
  };
};

export default connect(null, mapDispatchToProps)(NoteForm);
