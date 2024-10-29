import "../style/App.css";
import saas1 from "../img/saas1.jpg";
import saas2 from "../img/saas2.jpg";
import api from "../img/api.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container, Box, ThemeProvider } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { theme } from "../constant/color";
import { Suspense, useState } from "react";
import Loader2 from "../component/Loader2";


export default function SectionProcess() {
  const navigate = useNavigate();
  const [Tabcheck, setTabcheck] = useState(1);
  return (
    <Box
      component="div"
      className="flex flex-col !bg-black/5 !py-4 !items-center  my-5"
    >
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
          Our Approach
        </Typography>
      </Container>
      <Typography
        variant="h4"
        className="!text-slate-900 !font-semibold !font-sans  "
      >
        Our Process
      </Typography>
      <Container className="flex flex-col md:flex-row  !w-4/5  justify-evenly !rounded-lg py-5">
        <Button
          variant="contained"
          style={{ backgroundColor: Tabcheck === 0 ? null : "transparent" }}
          className={` ${Tabcheck === 0 ? null : "!text-black"}  h-20`}
          fullWidth
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            event.preventDefault();
            setTabcheck(0);
          }}
        >
          Seamless Onboarding
        </Button>

        <Button
          variant="contained"
          fullWidth
          style={{ backgroundColor: Tabcheck === 1 ? null : "transparent" }}
          className={` ${Tabcheck === 1 ? null : "!text-black"}  h-20`}
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            event.preventDefault();
            setTabcheck(1);
          }}
        >
          Customized Roadmap
        </Button>
        <Button
          variant="contained"
          fullWidth
          style={{ backgroundColor: Tabcheck === 2 ? null : "transparent" }}
          className={` ${Tabcheck === 2 ? null : "!text-black"}  h-20`}
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            event.preventDefault();
            setTabcheck(2);
          }}
        >
          Consultation & Discussion
        </Button>
      </Container>

      {Tabcheck === 0 ? (
        <Box
          component="div"
          className="flex flex-col md:flex-row !items-center !space-x-4 !justify-center my-5"
        >
          <img
            alt="vector"
            src={saas1}
            style={{ borderRadius: 50 }}
            className="flex !w-11/12 md:!w-1/3 p-2 animate-pulse "
          />

          <Container
            className="flex flex-col !w-11/12 md:!w-1/2 items-start  !space-y-4"
            style={{ padding: 0, marginInline: 1 }}
          >
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              We begin by getting to know you and your business goals through a comprehensive consultation call.
            </Typography>

            <Container
              className="flex items-start  space-x-2"
              style={{ padding: 0 }}
            >
              <ThemeProvider theme={theme}>
                <DoneIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full  hover:!fill-cyan-600 "
                ></DoneIcon>
              </ThemeProvider>

              <Typography
                variant="h6"
                className="!text-slate-900 !font-semibold !font-sans "
              >
                Group Brainstorming
              </Typography>
            </Container>
            <Container
              className="flex items-start space-x-2"
              style={{ padding: 0 }}
            >
              <ThemeProvider theme={theme}>
                <DoneIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full  hover:!fill-cyan-600 "
                ></DoneIcon>
              </ThemeProvider>

              <Typography
                variant="h6"
                className="!text-slate-900 !font-semibold !font-sans "
              >
                Option Evaluation
              </Typography>
            </Container>
            <Container
              className="flex items-start space-x-2"
              style={{ padding: 0 }}
            >
              <ThemeProvider theme={theme}>
                <DoneIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full  hover:!fill-cyan-600 "
                ></DoneIcon>
              </ThemeProvider>

              <Typography
                variant="h6"
                className="!text-slate-900 !font-semibold !font-sans "
              >
                Uncovering Shortfalls
              </Typography>
            </Container>
          </Container>
        </Box>
      ) : Tabcheck === 1 ? (
        <Box
          component="div"
          className="flex flex-col md:flex-row !items-center !space-x-4 !justify-center my-5"
        >
          <Suspense fallback={<Loader2/>}>
          <img
            alt="vector"
            src={saas2}
            style={{ borderRadius: 50 }}
            className="flex !w-11/12 md:!w-1/3 p-2 animate-pulse "
          />
          </Suspense>
         

          <Container
            className="flex flex-col !w-11/12 md:!w-1/2 items-start !space-y-4"
            style={{ padding: 0, marginInline: 1 }}
          >
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Based on your specific needs and aspirations, we craft a
              personalized roadmap that outlines actionable strategies and
              leverages data insights to maximize your success.
            </Typography>

            <Container
              className="flex items-start space-x-2"
              style={{ padding: 0 }}
            >
              <ThemeProvider theme={theme}>
                <DoneIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full  hover:!fill-cyan-600 "
                ></DoneIcon>
              </ThemeProvider>

              <Typography
                variant="h6"
                className="!text-slate-900 !font-semibold !font-sans "
              >
                Goal Setting
              </Typography>
            </Container>
            <Container
              className="flex items-start space-x-2"
              style={{ padding: 0 }}
            >
              <ThemeProvider theme={theme}>
                <DoneIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full  hover:!fill-cyan-600 "
                ></DoneIcon>
              </ThemeProvider>

              <Typography
                variant="h6"
                className="!text-slate-900 !font-semibold !font-sans "
              >
                Process Improvement
              </Typography>
            </Container>
            <Container
              className="flex items-start space-x-2"
              style={{ padding: 0 }}
            >
              <ThemeProvider theme={theme}>
                <DoneIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full  hover:!fill-cyan-600 "
                ></DoneIcon>
              </ThemeProvider>

              <Typography
                variant="h6"
                className="!text-slate-900 !font-semibold !font-sans "
              >
                Day-to-Day Planning
              </Typography>
            </Container>
          </Container>
        </Box>
      ) : Tabcheck === 2 ? (
        <Box
          component="div"
          className="flex flex-col md:flex-row !items-center !space-x-4 !justify-center my-5"
        >
          <img
            alt="vector"
            src={api}
            style={{ borderRadius: 50 }}
            className="flex !w-11/12 md:!w-1/3 p-2 animate-pulse "
          />

          <Container
            className="flex flex-col !w-11/12 md:!w-1/2 items-start !space-y-4"
            style={{ padding: 0, marginInline: 1 }}
          >
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              During a smooth onboarding process, we implement your customized
              roadmap, providing ongoing support and optimization to ensure you
              achieve the desired impact.
            </Typography>

            <Container
              className="flex items-start space-x-2"
              style={{ padding: 0 }}
            >
              <ThemeProvider theme={theme}>
                <DoneIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full  hover:!fill-cyan-600 "
                ></DoneIcon>
              </ThemeProvider>

              <Typography
                variant="h6"
                className="!text-slate-900 !font-semibold !font-sans "
              >
                Execution  
              </Typography>
            </Container>
            <Container
              className="flex items-start space-x-2"
              style={{ padding: 0 }}
            >
              <ThemeProvider theme={theme}>
                <DoneIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full  hover:!fill-cyan-600 "
                ></DoneIcon>
              </ThemeProvider>

              <Typography
                variant="h6"
                className="!text-slate-900 !font-semibold !font-sans "
              >
                Performance Evaluation  
              </Typography>
            </Container>
            <Container
              className="flex items-start space-x-2"
              style={{ padding: 0 }}
            >
              <ThemeProvider theme={theme}>
                <DoneIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full  hover:!fill-cyan-600 "
                ></DoneIcon>
              </ThemeProvider>

              <Typography
                variant="h6"
                className="!text-slate-900 !font-semibold !font-sans "
              >
                Ongoing Enhancement
              </Typography>
            </Container>
          </Container>
        </Box>
      ) : null}
      <Box className="flex justify-center sm:justify-start drop-shadow-2xl">
        <Button
          variant="contained"
          className="!rounded-2xl !px-6 bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300"
          onClick={() => navigate("/quote/0")}
        >
          Connect today
        </Button>
      </Box>
    </Box>
  );
}
