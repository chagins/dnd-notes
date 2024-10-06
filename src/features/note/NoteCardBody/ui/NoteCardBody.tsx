import { useCallback, useEffect, useRef } from "react";
import style from "./NoteCardBody.module.css";
import { Colors, Note } from "@/entities/note/lib";

interface NoteCardBodyProps {
  colorText: Colors["colorText"];
  body: Note["body"];
}

export const NoteCardBody = ({ colorText, body }: NoteCardBodyProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const setAutoHeight = useCallback(() => {
    if (textAreaRef.current) {
      const element = textAreaRef.current;
      element.style.height = "auto";
      element.style.height = String(element.scrollHeight) + "px";
    }
  }, []);

  useEffect(() => {
    setAutoHeight();
  }, [setAutoHeight]);

  return (
    <div className={style.cardBody}>
      <textarea
        ref={textAreaRef}
        style={{ color: colorText }}
        defaultValue={body}
        onInput={() => {
          setAutoHeight();
        }}
      />
    </div>
  );
};
