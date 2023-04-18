import { AppBar } from "@mui/material";

export default function Header(){
    return (
        <AppBar sx={{backgroundColor:'transparent',boxShadow:0,padding:'10px'}}>
            <img src="../logo.png" alt="logo" width='250px'/>
        </AppBar>
    )
}