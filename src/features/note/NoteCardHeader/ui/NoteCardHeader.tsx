import { TrashIcon } from "@/shared/icons";
import style from "./NoteCardHeader.module.css";
import { Colors } from "@/entities/note/lib";

interface NoteCardHeaderProps {
  colorHeader: Colors["colorHeader"];
  onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export const NoteCardHeader = ({
  colorHeader,
  onMouseDown,
}: NoteCardHeaderProps) => {
  return (
    <div
      className={style.cardHeader}
      style={{ backgroundColor: colorHeader }}
      onMouseDown={onMouseDown}
    >
      <TrashIcon />
    </div>
  );
};
