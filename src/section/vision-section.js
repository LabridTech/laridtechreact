import "../style/App.css";
import saas3 from '../img/saas3.jpg'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container, Box, ThemeProvider } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { theme } from "../constant/color";

export default function SectionVision() {
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      className="flex flex-col md:flex-row items-center justify-evenly my-5"
    >
      <Box
        component="div"
        className="flex flex-col w-11/12 md:!w-2/5 space-y-4 "
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
            Shaping the Future of Business
          </Typography>
        </Container>
        <Typography
          variant="h4"
          className="!text-slate-900 !font-semibold !font-sans  "
        >
          Our Vision
        </Typography>
        <Typography
          variant="body1"
          className="!text-slate-900 !font-semibold !font-sans "
        >
          We're at the forefront of technological advancement, exploring new
          possibilities to drive business success.
        </Typography>
        <Container
          className="flex items-start space-x-2"
          style={{ padding: 0 }}
        >
          <ThemeProvider theme={theme}>
            <ArrowCircleRightIcon
              color="primary"
              className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
            ></ArrowCircleRightIcon>
          </ThemeProvider>

          <Container style={{ padding: 0 }}>
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Leveraging AI for Business Advantage
            </Typography>

            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              We integrate AI, ML, and Cloud Computing to deliver custom solutions that give you a competitive edge.
            </Typography>
          </Container>
        </Container>

        <Container
          className="flex items-start space-x-2"
          style={{ padding: 0 }}
        >
          <ThemeProvider theme={theme}>
            <ArrowCircleRightIcon
              color="primary"
              className="!h-8 !w-8 rounded-full  hover:!fill-cyan-200"
            ></ArrowCircleRightIcon>
          </ThemeProvider>
          <Container style={{ padding: 0 }}>
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Staying Ahead in the Digital Age
            </Typography>

            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              We're your partner in staying ahead of industry trends and future-proofing your business.
            </Typography>
          </Container>
        </Container>

        <Container
          className="flex items-start space-x-2"
          style={{ padding: 0 }}
        >
          <ThemeProvider theme={theme}>
            <ArrowCircleRightIcon
              color="primary"
              className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
            ></ArrowCircleRightIcon>
          </ThemeProvider>

          <Container style={{ padding: 0 }}>
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Driving Digital Innovation
            </Typography>

            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              We're dedicated to pioneering new technologies that fuel business growth.
            </Typography>
          </Container>
        </Container>

        <Container
          className="flex items-start space-x-2"
          style={{ padding: 0 }}
        >
          <ThemeProvider theme={theme}>
            <ArrowCircleRightIcon
              color="primary"
              className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
            ></ArrowCircleRightIcon>
          </ThemeProvider>

          <Container style={{ padding: 0 }}>
            <Typography
              variant="h5"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Future-Proofing Your Business
            </Typography>

            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              In a rapidly changing digital world, we stay ahead of the curve, ensuring your business is equipped for the future.
            </Typography>
          </Container>
        </Container>

        <Box className="flex justify-center sm:justify-start">
          <Button
            variant="contained"
            className="w-1/2 !rounded-3xl bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300 "
            onClick={() => navigate("/quote/0")}
          >
            Let’s Discuss
          </Button>
        </Box>
      </Box>

      <img
        alt="vector"
        src={saas3}
        style={{ borderRadius: 50 }}
        className="flex w-11/12 md:w-1/3 h-96 p-2  "
      />
    </Box>
  );
}
