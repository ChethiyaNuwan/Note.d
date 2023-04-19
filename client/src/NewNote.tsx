import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";

export default function NewNote() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Accordion
      sx={{
        width: "40%",
        left: "30%",
        right: "30%",
        top: "20px",
      }}
      onChange={() => {setIsExpanded(true)}}
      expanded={isExpanded}
    >
      <AccordionSummary
        sx={{
          margin: "0"
        }}
        focusVisibleClassName="focus-visible"
      >
        <Typography
          sx={{
            color: "gray",
            width: "100%"
          }}>
          {!isExpanded ? "Add New Note" : <Input fullWidth placeholder="Title" disableUnderline></Input>}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Input fullWidth placeholder="Add a note" disableUnderline multiline minRows={10} maxRows={15}></Input>
      </AccordionDetails>
    </Accordion>
  );
}
