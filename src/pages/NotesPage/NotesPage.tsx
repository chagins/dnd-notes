import { mockNotes, Note, transformNoteDataToNote } from "@/entities/note";
import { NoteCard } from "@/features/note";
import { useMemo } from "react";

export const NotesPage = () => {
  const notes = useMemo(
    () =>
      mockNotes.reduce<Note[]>((acc, data) => {
        const note = transformNoteDataToNote(data);
        return note ? acc.concat(note) : acc;
      }, []),
    []
  );

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
    </div>
  );
};
