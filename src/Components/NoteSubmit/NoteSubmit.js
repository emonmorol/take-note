import React from "react";
import "./NoteSubmit.css";
import { useForm } from "react-hook-form";

const NoteSubmit = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://my-notes-md123.herokuapp.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="form-container">
      <h2>Add Your Note</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-content">
          <label htmlFor="note-title">Note Title</label>
          <input {...register("name", { required: true })} />
        </div>
        <div className="input-content">
          <label>Note Title</label>
          <textarea
            placeholder="Type Your Note"
            {...register("noteDetail", { required: true })}
          />
        </div>
        <button className="button" type="submit">
          Save Note
        </button>
      </form>
    </div>
  );
};

export default NoteSubmit;
