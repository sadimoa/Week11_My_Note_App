import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

import Notes from "./components/Notes.jsx";
import AddNote from "./components/AddNote.jsx";
import EditNote from "./components/EditNote.jsx";

function App() {
  const [notes, setNotes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:9000/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [notes]);

  const createNote = (noteData) => {
    axios
      .post("http://localhost:9000/create_note", noteData)
      .then((res) => setNotes([res.data, ...notes]));
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:9000/delete_note/${id}`).then((res) => {
      setNotes(notes.filter((note) => note.id !== id));
    });
  };

  const editeNote = (id, updatedNote) => {
    axios
      .put(`http://localhost:9000/update_note/${id}`, updatedNote)
      .then((res) => {
        const updatedNotes = notes.map((note) => {
          if (note.id === id) {
            return res.data;
          }
          return note;
        });
        setNotes(updatedNotes);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          {location.pathname === "/" && <AddNote createNote={createNote} />}
          <Routes>
            <Route
              path="/"
              element={<Notes notes={notes} deleteNote={deleteNote} />}
            />
            <Route
              path="editeNote/:id"
              element={<EditNote editeNote={editeNote} notes={notes} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
