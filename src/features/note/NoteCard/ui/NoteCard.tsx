import { NoteData, transformNoteDataToNote } from "@/entities/note";
import style from "./NoteCard.module.css";
import { NoteCardHeader } from "../../NoteCardHeader";
import { NoteCardBody } from "../../NoteCardBody";

interface NoteCardProps {
  noteData: NoteData;
}

export const NoteCard = ({ noteData }: NoteCardProps) => {
  const note = transformNoteDataToNote(noteData);

  if (!note) {
    return null;
  }

  const { body, colors, position } = note;
  const { colorBody, colorHeader, colorText } = colors;
  const { x, y } = position;

  return (
    <div
      className={style.card}
      style={{
        backgroundColor: colorBody,
        left: String(x) + "px",
        top: String(y) + "px",
      }}
    >
      <NoteCardHeader colorHeader={colorHeader} />
      <NoteCardBody body={body} colorText={colorText} />
    </div>
  );
};
