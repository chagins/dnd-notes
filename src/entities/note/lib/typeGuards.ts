import { Colors, Note, NoteData, Position } from "./types";

export const isColors = (data: unknown): data is Colors => {
  const asColors = data as Colors;
  const isData = !!data;
  const isObject = typeof data === "object";
  const hasId = "id" in asColors && typeof asColors["id"] === "string";
  const hasColorHeader =
    "colorHeader" in asColors && typeof asColors["colorHeader"] === "string";
  const hasColorBody =
    "colorBody" in asColors && typeof asColors["colorBody"] === "string";
  const hasColorText =
    "colorText" in asColors && typeof asColors["colorText"] === "string";

  return (
    isData &&
    isObject &&
    hasId &&
    hasColorHeader &&
    hasColorBody &&
    hasColorText
  );
};

export const isPosition = (data: unknown): data is Position => {
  const asPosition = data as Position;
  const isData = !!data;
  const isObject = typeof data === "object";
  const hasX = "x" in asPosition && typeof asPosition["x"] === "number";
  const hasY = "y" in asPosition && typeof asPosition["y"] === "number";
  return isData && isObject && hasX && hasY;
};

export const isNote = (data: unknown): data is Note => {
  const asNote = data as Note;
  const isData = !!data;
  const isObject = typeof data === "object";
  const hasId = "$id" in asNote && typeof asNote["$id"] === "number";
  const hasBody = "body" in asNote && typeof asNote["body"] === "string";
  const hasColors = "colors" in asNote && isColors(asNote["colors"]);
  const hasPosition = "position" in asNote && isPosition(asNote["position"]);

  return isData && isObject && hasId && hasBody && hasColors && hasPosition;
};

export const isNoteData = (data: unknown): data is NoteData => {
  const asNoteData = data as NoteData;
  const isData = !!data;
  const isObject = typeof data === "object";
  const hasId = "$id" in asNoteData && typeof asNoteData["$id"] === "number";
  const hasBody =
    "body" in asNoteData && typeof asNoteData["body"] === "string";

  const hasColors =
    "colors" in asNoteData && typeof asNoteData["colors"] === "string";

  const hasPosition =
    "position" in asNoteData && typeof asNoteData["position"] === "string";

  return isData && isObject && hasId && hasBody && hasColors && hasPosition;
};
