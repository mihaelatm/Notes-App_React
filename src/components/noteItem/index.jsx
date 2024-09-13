import { connect } from "react-redux";
import styles from "./styles.module.css";
import { deleteNote } from "../../redux/actions/actionsNote";

function NoteItem({ id, title, content, deleteNoteFromList, setModalOpen }) {
  return (
    <div className={styles.note_item_container}>
      <h3 className={styles.note_item_title}>{title}</h3>
      <p className={styles.note_item_content}>{content}</p>
      <button onClick={() => setModalOpen(true)} className={styles.edit_button}>
        Edit
      </button>
      <button
        onClick={() => deleteNoteFromList(id)}
        className={styles.delete_item_button}
      >
        Delete
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNoteFromList: (id) => dispatch(deleteNote(id)),
  };
};

export default connect(null, mapDispatchToProps)(NoteItem);
