import { useState } from "react";
import styles from "./styles.module.css";

function NoteForm() {
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

export default NoteForm;
