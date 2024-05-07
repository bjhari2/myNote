import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3000/"
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZTI1MGIxYzcxMzNiYWU1NWEzNWIzIn0sImlhdCI6MTcwNjk2MDQ3OH0.-GWfzyhbR3uMOH2jbcNiXo1lHgSJOWrtRSX14TR1ykk'
      },
    })
    const json = await response.json()
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tags) => {
    // API Call
    const response = await fetch(`${host}api/notes/addnote`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZTI1MGIxYzcxMzNiYWU1NWEzNWIzIn0sImlhdCI6MTcwNjk2MDQ3OH0.-GWfzyhbR3uMOH2jbcNiXo1lHgSJOWrtRSX14TR1ykk'
      },
      body: JSON.stringify({title, description, tags})
    })
    const json = await response.json()

    // Add note logic for client side
    setNotes(notes.concat(json));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZTI1MGIxYzcxMzNiYWU1NWEzNWIzIn0sImlhdCI6MTcwNjk2MDQ3OH0.-GWfzyhbR3uMOH2jbcNiXo1lHgSJOWrtRSX14TR1ykk'
      },
    })
    const json = await response.json()

    // Delete note logic for client side
    const newNotes = notes.filter((note) => {return note._id !== id})
    setNotes(newNotes)
  };

  // Edit a Note
  const editNote = async (id, title, description, tags) => {
    // API call
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViZTI1MGIxYzcxMzNiYWU1NWEzNWIzIn0sImlhdCI6MTcwNjk2MDQ3OH0.-GWfzyhbR3uMOH2jbcNiXo1lHgSJOWrtRSX14TR1ykk'
      },
      body: JSON.stringify({title, description, tags})
    })
    const json = await response.json()

    // Edit note logic for client side
    const editedNotes = notes.filter((note) => {
      if (note._id === id) {
        note.title = title;
        note.description = description;
        note.tags = tags;
      }
      return note;
    })
    setNotes(editedNotes)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
