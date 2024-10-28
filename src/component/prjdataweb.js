import Typography from "@mui/material/Typography";
import EastIcon from '@mui/icons-material/East';
import { Box, Container, ThemeProvider } from "@mui/material";
import { theme } from "../constant/color";

export default function PrjdataWeb({ title ,heading, item }) {
  return (
    <Box
      className='flex flex-col w-4/5 md:w-1/2 space-y-2'
    >
      
      <Box className="flex flex-col items-center space-y-2">
          <Container
            style={{ padding: 10 }}
            className="flex items-center justify-center space-x-2"
          >
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <Typography
              variant="body2"
              className="!text-stone-950 !font-semibold !font-sans "
            >
              {title}
            </Typography>
          </Container>
          <Typography
            variant="h4"
            className="!text-slate-900 !font-semibold !font-sans  "
          >
             {heading}
          </Typography>
        </Box>
      {item.map((value) => (
        <Typography
          variant="subtitle1" 
          gutterBottom
        >
          <ThemeProvider theme={theme}></ThemeProvider>
          <EastIcon color='primary' style={{ margin: 0, marginRight: 10 }} />
          {value}
        </Typography>
      ))}
    </Box>
  );
}
