import {Note, NotesProp} from "../models/NoteModel";
import {Card, CardContent, CardHeader, Icon, IconButton} from "@mui/material";

export default function SavedNotes({notes, setNotes}: NotesProp) {

    const handleDelete = (id: number) => {
        return () => {
            setNotes(notes.filter((note) => note.id != id))
        }
    }

    function handleEdit(note: Note) {
        return () => {

        }
    }

    return (
        <div className="card-list">
            {notes.map((note) => {
                return (
                    <div key={note.id}>
                        <Card>
                            <CardHeader
                                title={note.title}
                                action={
                                    <>
                                        <IconButton size={'small'} onClick={handleDelete(note.id)}>
                                            <Icon fontSize={'small'}>delete</Icon>
                                        </IconButton>
                                        <IconButton size={'small'} onClick={handleEdit(note)}>
                                            <Icon fontSize={'small'}>edit</Icon>
                                        </IconButton>
                                    </>
                            }>
                            </CardHeader>
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