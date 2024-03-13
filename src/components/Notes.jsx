import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  return (
    <div className="grid grid-cols-3 content-center gap-5">
      {/* Style your note cards with Tailwind here and get the data from app.js */}
      {props.notes.map((note) => (
        <div key={note.id} className="w-[250px] rounded h-auto bg-yellow-500 p-5">
          <h3 className="font-bold mb-2">{note.title}</h3>
          <p className="font-light mb-5">{note.content}</p>
          <div className="flex justify-center m-auto gap-2 text-xl">
            <FaEdit />
            <FaTrash onClick={() => props.deleteNote(note.id)}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
