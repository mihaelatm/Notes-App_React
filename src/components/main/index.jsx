import NoteCount from "../noteCount";
import NoteForm from "../noteForm";
import NoteList from "../noteList";

function Main() {
  return (
    <main>
      {/* notes counter */}
      <NoteCount />
      <NoteForm />
      <NoteList />
    </main>
  );
}

export default Main;
