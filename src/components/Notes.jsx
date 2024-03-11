import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Notes(props) {
  return (
    <div>
      {/* Style your note cards with Tailwind here and get the data from app.js */}
      <div className="grid grid-cols-4 items-center justify-center content-center gap-5 ">
        {props.notes.map((note) => (
          <div key={note.id} className="bg-yellow-500 w-52 h-auto p-5">
            <h3 className="font-bold text-lg">{note.title}</h3>
            <p className="font-light pt-2">{note.content}</p>
            <div className=" mt-20 flex flex-row items-center justify-center gap-3">
              <Link to={`editeNote/${note.id}`}>
                <FaEdit className=" text-xl " />
              </Link>
              <FaTrash
                className="text-xl"
                onClick={() => props.deleteNote(note.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
