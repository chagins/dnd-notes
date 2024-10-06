import { Note } from "@/entities/note";
import { useState } from "react";

interface UseNoteCardMoveArgs {
  initialPosition: Note["position"];
  cardRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const useNoteCardMove = (args: UseNoteCardMoveArgs) => {
  const { initialPosition, cardRef } = args;
  const mouseStartPos = { x: 0, y: 0 };

  const [position, setPosition] = useState<Note["position"]>(initialPosition);

  const onMouseMove = (event: MouseEvent) => {
    if (!cardRef.current) {
      return;
    }

    const mouseMoveDir: Note["position"] = {
      x: mouseStartPos.x - event.clientX,
      y: mouseStartPos.y - event.clientY,
    };

    mouseStartPos.x = event.clientX;
    mouseStartPos.y = event.clientY;

    setPosition({
      x: cardRef.current.offsetLeft - mouseMoveDir.x,
      y: cardRef.current.offsetTop - mouseMoveDir.y,
    });
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseStartPos.x = event.clientX;
    mouseStartPos.y = event.clientY;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return {
    position,
    onMouseMove,
    onMouseDown,
    onMouseUp,
  };
};
