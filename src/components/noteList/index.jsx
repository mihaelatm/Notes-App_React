import { connect } from "react-redux";
import NoteItem from "../noteItem";
import styles from "./styles.module.css";

function NoteList({ notesList }) {
  if (notesList.length === 0)
    return (
      <p className={styles.note_list_text}>You don't have any notes yet</p>
    );
  return (
    <div>
      {notesList.map((note) => {
        return <NoteItem key={note.id} {...note} />;
      })}
    </div>
  );
}
const mapStateToProps = (state) => ({
  notesList: state.notesList,
});
export default connect(mapStateToProps)(NoteList);
