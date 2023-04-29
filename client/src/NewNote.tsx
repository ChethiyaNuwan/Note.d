import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { AccordionActions, Button, Stack } from "@mui/material";

interface Note {
  id: number;
  title: string;
  note: string;
}

export default function NewNote() {
  const [isExpanded, setIsExpanded] = useState(false);
  const notes: Note[] = [];
  const [note, setNote] = useState("");

  const handleCancel = () => {
    setNote("");
    setIsExpanded(false);
  };

  const handleSave = (e: any) => {
    e.preventDefault();
    setIsExpanded(false);
    notes.push({
      id: Math.floor(Math.random() * 1000),
      title: e.target.title.value,
      note: e.target.note.value,
    });
    setNote("");
    console.log(notes);
  };

  return (
    <form method="post" onSubmit={handleSave}>
      <Accordion
        sx={{
          width: "40%",
          left: "30%",
          right: "30%",
          top: "20px",
        }}
        onChange={() => {
          setIsExpanded(true);
        }}
        expanded={isExpanded}
      >
        <AccordionSummary
          sx={{
            margin: "0",
          }}
        >
          <Typography
            sx={{
              color: "gray",
              width: "100%",
            }}
          >
            {!isExpanded ? (
              "Add New Note"
            ) : (
              <Input
                fullWidth
                placeholder="Title"
                disableUnderline
                required
                name="title"
              ></Input>
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Input
            fullWidth
            placeholder="Add a note"
            disableUnderline
            multiline
            minRows={10}
            maxRows={10}
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></Input>
        </AccordionDetails>
        <AccordionActions>
          <Stack spacing={1} direction="row">
            <Button
              sx={{
                backgroundColor: "#F7A84B",
                ":hover": { backgroundColor: "#F7884B" },
              }}
              variant="contained"
              type="submit"
            >
              Save
            </Button>
            <Button
              sx={{
                backgroundColor: "#F7A84B",
                ":hover": { backgroundColor: "#F7884B" },
              }}
              variant="contained"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Stack>
        </AccordionActions>
      </Accordion>
    </form>
  );
}
