import { Note } from "@/entities/note";
import style from "./NoteCard.module.css";
import { NoteCardHeader } from "../../NoteCardHeader";
import { NoteCardBody } from "../../NoteCardBody";
import { useRef } from "react";
import { useNoteCardMove } from "../hooks";

interface NoteCardProps {
  note: Note;
}

export const NoteCard = ({ note }: NoteCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const { position, onMouseUp, onMouseDown } = useNoteCardMove({
    cardRef,
    initialPosition: note.position,
  });

  const { body, colors } = note;
  const { colorBody, colorHeader, colorText } = colors;
  const { x, y } = position;


  return (
    <div
      ref={cardRef}
      onMouseUp={onMouseUp}
      className={style.card}
      style={{
        backgroundColor: colorBody,
        left: String(x) + "px",
        top: String(y) + "px",
      }}
    >
      <NoteCardHeader colorHeader={colorHeader} onMouseDown={onMouseDown} />
      <NoteCardBody body={body} colorText={colorText} />
    </div>
  );
};
