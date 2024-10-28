import { Box } from "@mui/material";

export default function Loader(){
    return(
        <Box className='flex flex-col w-11/12 items-center justify-center w-full h-lvh' >
         <img alt="logo" src="/logo.png" className="w-44 h-64  animate-ping" />
        </Box>
    )
}