import { connect } from "react-redux";
import styles from "./styles.module.css";

function NoteCount({ noteCount }) {
  return (
    <div className={styles.note_count_container}>
      <h3>{noteCount}</h3>
    </div>
  );
}

const mapStateToProps = (state) => ({
  noteCount: state.noteCount,
});

export default connect(mapStateToProps)(NoteCount);
