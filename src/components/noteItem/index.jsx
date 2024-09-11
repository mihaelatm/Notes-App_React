import styles from "./styles.module.css";

function NoteItem({ id, title, content }) {
  return (
    <div className={styles.note_item_continer}>
      <h3 className={styles.note_item_title}>{title}</h3>
      <p className={styles.note_item_content}>{content}</p>
      <button className={styles.edit_button}>Edit</button>
      <button className={styles.delete_item_button}>Delete</button>
    </div>
  );
}
export default NoteItem;
