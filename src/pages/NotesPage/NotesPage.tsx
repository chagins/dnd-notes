import { mockNotes as notes } from "@/entities/note";
import { NoteCard } from "@/features/note";

export const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} noteData={note} />
      ))}
    </div>
  );
};
