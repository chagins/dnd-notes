export interface Colors  {
  id: string;
  colorHeader: string;
  colorBody: string;
  colorText: string;
};

export interface Position  {
  x: number;
  y: number;
};

export interface NoteId {
  $id: number;
};

export type Note = NoteId & {
  body: string;
  colors: Colors;
  position: Position;
};

export type NoteData = NoteId & {
  body: string;
  colors: string;
  position: string;
};
