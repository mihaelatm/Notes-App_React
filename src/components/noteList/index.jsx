import { connect } from "react-redux";
import NoteItem from "../noteItem";
import styles from "./styles.module.css";
import Modal from "../modal";
import { useState } from "react";

function NoteList({ notesList }) {
  const [modalOpen, setModalOpen] = useState(false);

  if (notesList.length === 0)
    return (
      <p className={styles.note_list_text}>You don't have any notes yet</p>
    );
  return (
    <div>
      {notesList.map((note) => {
        return <NoteItem key={note.id} {...note} setModalOpen={setModalOpen} />;
      })}
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  notesList: state.notesList,
});
export default connect(mapStateToProps)(NoteList);
