import AppBar from "@mui/material/AppBar";

export default function Header() {
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: 0,
        padding: "10px",
        position: "sticky",
      }}
    >
      <img src="../logo.png" alt="logo" width="250px" />
    </AppBar>
  );
}
