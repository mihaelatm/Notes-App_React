import { useState } from "react";
import styles from "./styles.module.css";

function Modal({ setModalOpen }) {
  const [editNote, setEditNote] = useState({ title: "", content: "" });
  function handleChange(event) {
    const { name, value } = event.target;

    setEditNote({
      ...editNote,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setModalOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={editNote.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            type="text"
            placeholder="Content ..."
            value={editNote.content}
            onChange={handleChange}
          />
          <button type="submit">Edit Note</button>
        </form>
      </div>
    </div>
  );
}
export default Modal;
