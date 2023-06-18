import { NotesProp } from "../models/NoteModel";
import {Card, CardContent, CardHeader} from "@mui/material";

export default function SavedNotes({notes,setNotes}:NotesProp){
    
    return(
        <div className="card-list">
            {notes.map((note)=>{
                return(
                    <div key={note.id}>
                        <Card>
                            <CardHeader title={note.title}></CardHeader>
                            <CardContent>
                                {note.note}
                            </CardContent>
                        </Card>
                    </div>
                )
            })
            }
        </div>
    )
}