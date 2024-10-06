import { isNote, isNoteData } from "./typeGuards";
import { Note } from "./types";

export const transformNoteDataToNote = (data: unknown): Note | null => {
  if (!isNoteData(data)) {
    return null;
  }

  try {
    const note = {
      $id: data.$id,
      body: JSON.parse(data.body),
      colors: JSON.parse(data.colors),
      position: JSON.parse(data.position),
    };

    if (isNote(note)) {
      return note;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
