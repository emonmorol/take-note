import React, { useEffect, useState } from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./Notes.css";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [notes]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?? You want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/notes/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = notes.filter((service) => service._id !== id);
          setNotes(remaining);
        });
    }
  };

  return (
    <div className="note-coontent">
      <h2 className="notes-title">Here Is your all notes</h2>
      <div className="notes-container">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} handleDelete={handleDelete} />
        ))}
        {/* <NoteCard />
        <NoteCard />
        <NoteCard /> */}
      </div>
    </div>
  );
};

export default Notes;
