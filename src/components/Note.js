import React from "react";
import notes from "../notes";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

function createNote(notes) {
  return <Note key={notes.id} title={notes.title} content={notes.content} />;
}

export default Note;
export { createNote };
