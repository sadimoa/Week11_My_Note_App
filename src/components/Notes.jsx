import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {

  // console.log(props.deleteNote)

  // const updateNote = (id,updatedNote) => {
  //  setNotes(notes.map(note) => )
  // }

  return (
    <div className="w-full mt-10 flex items-center flex-wrap justify-center space-x-5">
      {/* Style your note cards with Tailwind here and get the data from app.js */}
      {props.notes.map((note) => (
        <div className="bg-yellow-400  w-2/12  p-4 h-auto" key={note.id}>
        <div>
          <h1 className="text-bold text-2xl font-serif font-black">{note.title}</h1>
          <p className="text-bold text-lg mt-3 font-serif">{note.content}</p>
        </div>
        <div className="flex justify-center items-center pt-16 space-x-2 text-lg cursor-pointer">
          <FaEdit/>
          <FaTrash onClick={() => props.deleteNote(note.id)}/>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
