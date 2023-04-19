import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { AccordionActions, Button, Stack } from "@mui/material";

export default function NewNote() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCancel = () => {
    setIsExpanded(false);
  };

  const handleSave = () => {
    setIsExpanded(false);
  };

  return (
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
            <Input fullWidth placeholder="Title" disableUnderline></Input>
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
            onClick={handleSave}
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
  );
}
