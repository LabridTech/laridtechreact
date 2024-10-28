import "../style/App.css";
import Typography from "@mui/material/Typography";
import { Container, Box, ThemeProvider } from "@mui/material";
import { theme } from "../constant/color";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SouthIcon from "@mui/icons-material/South";
import { useState } from "react";

export default function SectionCare() {
  const [tabexpand, setTabexpand] = useState(0);
  return (
    <Box
      component="div"
      className="flex flex-col md:flex-row items-center !bg-black/50 justify-evenly space-y-4 md:space-y-1 py-10 my-5"
    >
      <Box
        component="div"
        className="flex flex-col w-11/12 md:!w-1/3 space-y-4 "
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
            Your Care
          </Typography>
        </Container>
        <Typography
          variant="h4"
          className="!text-slate-900 !font-semibold !font-sans  "
        >
          Your Business is our Business
        </Typography>
        <Typography
          variant="body1"
          className="!text-slate-900 !font-semibold !font-sans "
        >
          LabridTech is your one-stop shop for unlocking growth through
          technology. We offer strategic guidance to identify opportunities,
          custom software development to streamline processes, and cutting-edge
          AI solutions to gain valuable insights and automate tasks. With
          LabridTech, you'll make smarter decisions, improve efficiency, and
          achieve explosive results.
        </Typography>
      </Box>

      <Box className="flex flex-col   space-y-4 w-11/12 md:w-1/3">
        <Container
          className="flex flex-col items-start space-x-2 opacity-70  space-y-2 "
          style={{ padding: 0 }}
        >
          <Container
            style={{ padding: 0 }}
            className="flex justify-between rounded-3xl !p-3 !bg-black/10"
          >
            <Typography
              variant="body1"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Understanding Your Vision
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 1 ? (
                <SouthIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(0);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></SouthIcon>
              ) : (
                <ArrowRightAltIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(1);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ArrowRightAltIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 1 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans   rounded-3xl !p-4 !bg-black/10"
            >
              We take the time to listen to your ideas and challenges, ensuring
              our solutions align perfectly with your long-term goals.
            </Typography>
          ) : null}
        </Container>

        <Container
          className="flex flex-col items-start space-x-2 opacity-70 space-y-2 "
          style={{ padding: 0 }}
        >
          <Container
            style={{ padding: 0 }}
            className="flex justify-between rounded-3xl !p-3  !bg-black/10"
          >
            <Typography
              variant=""
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Building Trustworthy Partnerships
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 2 ? (
                <SouthIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(0);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></SouthIcon>
              ) : (
                <ArrowRightAltIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(2);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ArrowRightAltIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 2 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans  rounded-3xl !p-4  !bg-black/10 "
            >
              We believe in open communication and collaboration, fostering a
              transparent and reliable partnership that empowers informed
              decision-making.
            </Typography>
          ) : null}
        </Container>

        <Container
          className="flex flex-col items-start space-x-2 opacity-70 space-y-2 "
          style={{ padding: 0 }}
        >
          <Container
            style={{ padding: 0 }}
            className="flex justify-between rounded-3xl !p-3  !bg-black/10"
          >
            <Typography
              variant=""
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Delivering Measurable Results
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 3 ? (
                <SouthIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(0);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></SouthIcon>
              ) : (
                <ArrowRightAltIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(3);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ArrowRightAltIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 3 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans  rounded-3xl !p-4  !bg-black/10 "
            >
              Our success is measured by yours. We focus on providing tangible
              results that drive growth and make a real difference to your
              business.
            </Typography>
          ) : null}
        </Container>

        <Container
          className="flex flex-col items-start space-x-2 opacity-70 space-y-2 "
          style={{ padding: 0 }}
        >
          <Container
            style={{ padding: 0 }}
            className="flex justify-between rounded-3xl !p-3  !bg-black/10"
          >
            <Typography
              variant=""
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Empowering Your Team
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 4 ? (
                <SouthIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(0);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></SouthIcon>
              ) : (
                <ArrowRightAltIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(4);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ArrowRightAltIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 4 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans  rounded-3xl !p-4  !bg-black/10 "
            >
              We don’t just implement solutions; we equip your team with the
              knowledge and skills to leverage technology effectively for
              ongoing success.
            </Typography>
          ) : null}
        </Container>
      </Box>
    </Box>
  );
}
