import { Box } from "@mui/material";

export default function Loader(){
    return(
        <Box className='flex flex-col w-11/12 bg-indigo-950 items-center justify-center w-full h-lvh' >
         <img alt="logo" src="/logo.png" className="w-44 h-44  animate-spin" />
        </Box>
    )
}