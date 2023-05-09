import { NotesProp } from "../models/NoteModel";

export let some=5;
export default function SavedNotes({notes,setNotes}:NotesProp){
    
    return(
        <div>
            {notes.map((note)=>{
                return(
                    <div key={note.id}>
                        <h4>{note.title}</h4>
                        <p>{note.note}</p>
                    </div>
                )
            })
            }
        </div>
    )
}