import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);

  const renderNote = (note) => (
    <Note note={note} key={note.id} onType={props.onType} />
  );

  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

/*const NotesList = () => (
  <ul className="notes-list">
    <Note />
    <Note />
    <Note />
  </ul>
); */

export default NotesList;
/* const NoteList = () => ( was used BEFORE props was passed and you put
  props inside parenthases to pass the props const NoteList = (props) => ( */
