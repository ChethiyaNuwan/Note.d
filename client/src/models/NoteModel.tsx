export interface Note {
    id: number;
    title: string;
    note: string;
}

export interface NotesProp {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}