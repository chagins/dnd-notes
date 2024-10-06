import { TrashIcon } from "@/shared/icons";
import style from "./NoteCardHeader.module.css";
import { Colors } from "@/entities/note/lib";

interface NoteCardHeaderProps {
  colorHeader: Colors["colorHeader"];
}
export const NoteCardHeader = ({ colorHeader }: NoteCardHeaderProps) => {
  return (
    <div className={style.cardHeader} style={{ backgroundColor: colorHeader }}>
      <TrashIcon />
    </div>
  );
};
