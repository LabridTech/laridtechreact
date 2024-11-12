import "../style/App.css";
import back from '../img/about.jpg'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container, Box } from "@mui/material";


export default function SectionAbout() {
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      className="flex !bg-slate-100 flex-col md:flex-row items-center justify-evenly my-5"
    >
      <img
        alt="vector"
        src={back}
        style={{ borderRadius: 50 }}
        className="flex w-11/12 md:w-1/3 p-2  "
      />

      <Box
        component="div"
        className="flex flex-col w-11/12 md:!w-2/5 space-y-6 "
      >
        <Container
          style={{ padding: 10 }}
          className="flex items-center space-x-2"
        >
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <Typography
            variant="body2"
            className="!text-stone-950 !font-semibold !font-sans "
          >
            Our path
          </Typography>
        </Container>
        <Typography
          variant="h4"
          className="!text-slate-900 !font-semibold !font-sans  "
        >
          About us
        </Typography>
        <Container
          className="flex flex-col items-start !space-y-4"
          style={{ padding: 0 }}
        >
          <Typography
            variant="h6"
            className="!text-slate-900 !font-semibold !font-sans "
          >
            Labrid Tech is a technology solutions company specializing in web,
            app, and software development.
          </Typography>

          <Typography
            variant="h6"
            className="!text-slate-900 !font-semibold !font-sans "
            style={{ margin: 0 }}
          >
            We are passionate about crafting exceptional digital experiences and
            cutting-edge solutions tailored to your unique needs.
          </Typography>
        </Container>

        <Box className="flex justify-center sm:justify-start drop-shadow-2xl">
          <Button
            variant="contained"
            className="w-1/2 !rounded-3xl bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300"
            onClick={() => navigate("/quote/1")}
          >
            Let’s connect
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
