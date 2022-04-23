import React, { useState } from "react";
import "./NoteCard.css";

const NoteCard = ({ note, handleDelete }) => {
  const { name, noteDetail, _id } = note;
  const [update, setUpdate] = useState([]);

  return (
    <div className="note-card-content">
      <h2>{name}</h2>
      <p>{noteDetail}</p>
      <div className="button-container">
        <button onClick={() => handleDelete(_id)}>Delete</button>
        <button>Update</button>
      </div>
    </div>
  );
};

export default NoteCard;
