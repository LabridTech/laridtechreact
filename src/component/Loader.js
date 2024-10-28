import { Box } from "@mui/material";

export default function Loader(){
    return(
        <Box className='flex flex-col w-11/12 items-center justify-center h-11/12' >
         <img alt="logo" src="/logo.png" className="w-20 h-20  animate-ping" />
        </Box>
    )
}