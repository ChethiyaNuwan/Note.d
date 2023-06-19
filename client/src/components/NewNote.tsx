import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { AccordionActions, Button, Stack } from "@mui/material";
import { NotesProp } from "../models/NoteModel";

export default function NewNote({notes,setNotes}:NotesProp) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const handleCancel = () => {
    setBody("");
    setIsExpanded(false);
  };

  const handleSave = (e: any) => {
    e.preventDefault();
    setIsExpanded(false);
    const newNote ={
      id: Math.floor(Math.random() * 1000),
      title: e.target.title.value,
      note: e.target.body.value,
    };
    setNotes([...notes, newNote]);
    setBody("");
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
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
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
