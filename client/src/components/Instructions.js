import Typography from '@mui/material/Typography';
import StartButton from "./StartButton"
import Box from '@mui/material/Box';

export default function Instructions() {
    return (
        <Box
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
            >
            <Typography variant='h2' align="center">Instructions</Typography>
            <Typography variant='body2' align="center">blah blah blah</Typography>
            <StartButton/>
        </Box>
        
    )
}