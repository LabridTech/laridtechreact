import { Box } from "@mui/material";

export default function Loader2(){
    return(
        <Box className='flex flex-col w-11/12 bg-indigo-950 items-center justify-center w-full h-full' >
         <img alt="logo" src="/logo.png" className="w-1/3 h-1/3  animate-spin" />
        </Box>
    )
}