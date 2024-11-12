import "../style/App.css";
import back from "../img/backgroundv.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container, Box, ThemeProvider } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import { theme } from "../constant/color";

export default function SectionChoosing() {
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      className="flex flex-col md:flex-row items-center justify-evenly my-5"
    >
      <img
        alt="vector"
        src={back}
        style={{ borderRadius: 50 }}
        className="flex w-11/12 md:w-1/3 p-2  "
      />

      <Box component="div" className="flex flex-col w-11/12 md:!w-2/5 space-y-4 "> 
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
            what set us apart
          </Typography>
        </Container>
        <Typography
          variant="h4"
          className="!text-slate-900 !font-semibold !font-sans  "
        >
          Why choose Labridtech?
        </Typography>
        <Container
          className="flex items-start space-x-2"
          style={{ padding: 0 }}
        >
          <ThemeProvider theme={theme}>
            <EastIcon
              color="primary"
              className="!h-8 !w-8 rounded-full !bg-blue-100 p-1 hover:!fill-cyan-200 "
            ></EastIcon>
          </ThemeProvider>

          <Container style={{ padding: 0 }}>
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Affordable Excellence
            </Typography>

            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Top-tier digital solutions without breaking the bank. We offer
              transparent, budget-friendly pricing to fit any business size.
            </Typography>
          </Container>
        </Container>
        <Container
          className="flex items-start space-x-2"
          style={{ padding: 0 }}
        >
          <ThemeProvider theme={theme}>
            <EastIcon
              color="primary"
              className="!h-8 !w-8 rounded-full !bg-blue-100 p-1 hover:!fill-cyan-200"
            ></EastIcon>
          </ThemeProvider>
          <Container style={{ padding: 0 }}>
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Startup Specialists
            </Typography>

            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              From web development to branding, we help startups and small
              businesses grow, engage customers, and build a lasting online
              presence.
            </Typography>
          </Container>
        </Container>
        <Container
          className="flex items-start space-x-2"
          style={{ padding: 0 }}
        >
          <ThemeProvider theme={theme}>
            <EastIcon
              color="primary"
              className="!h-8 !w-8 rounded-full !bg-blue-100 p-1 hover:!fill-cyan-200"
            ></EastIcon>
          </ThemeProvider>
          <Container style={{ padding: 0 }}>
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              End-to-End Services
            </Typography>

            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Need a website, marketing, or a brand revamp? We've got you
              covered with expert solutions that bring your vision to life.
            </Typography>
          </Container>
        </Container>
        <Container
          className="flex items-start space-x-2"
          style={{ padding: 0 }}
        >
          <ThemeProvider theme={theme}>
            <EastIcon
              color="primary"
              className="!h-8 !w-8 rounded-full !bg-blue-100 p-1 hover:!fill-cyan-200"
            ></EastIcon>
          </ThemeProvider>
          <Container style={{ padding: 0 }}>
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Digital Transformation Experts
            </Typography>

            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Stay ahead with scalable, tech-driven strategies that streamline
              your operations and fuel growth.
            </Typography>
          </Container>
        </Container>
        <Container
          className="flex items-start space-x-2"
          style={{ padding: 0 }}
        >
          <ThemeProvider theme={theme}>
            <EastIcon
              color="primary"
              className="!h-8 !w-8 rounded-full !bg-blue-100 p-1 hover:!fill-cyan-200"
            ></EastIcon>
          </ThemeProvider>
          <Container style={{ padding: 0 }}>
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Customer-First Focus
            </Typography>

            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Your success is our mission. We craft tailored solutions to exceed
              your goals and keep you ahead of the gam
            </Typography>
          </Container>
        </Container>
        <Box className="flex justify-center sm:justify-start">
          <Button
            variant="contained"
            className="w-1/2 !rounded-3xl bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300"
            onClick={() => navigate("/quote/0")}
          >
            Leave A Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
