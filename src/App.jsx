import "./App.css";
import Note from "./components/Note";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TextEditor from "./components/TextEditor";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        {/* Routes of the app */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/editor" element={<TextEditor />} />
          <Route exact path="/<:id>/" element={<Note />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
