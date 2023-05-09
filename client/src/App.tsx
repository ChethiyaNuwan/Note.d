import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import NewNote from './components/NewNote'
import { Note } from './models/NoteModel';
import SavedNotes from './components/SavedNotes';

function App() {
  const [notes,setNotes] = useState<Note[]>([]);

  return (
    <>
      <Header/>
      <NewNote notes={notes} setNotes={setNotes}/>
      <SavedNotes notes={notes} setNotes={setNotes}/>
    </>
  )
}

export default App
