import "../style/App.css";
import saas from "../img/saas.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container, Box, ThemeProvider } from "@mui/material";
import { theme } from "../constant/color";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function Faq() {
  const navigate = useNavigate();
  const [tabexpand, setTabexpand] = useState(0);
  return (
    <Box
      id="Faq"
      component="div"
      className="flex flex-col md:flex-row items-center md:items-start space-y-6 lg:space-y-2 justify-evenly my-5"
    >
      <Box
        component="div"
        className="flex flex-col w-11/12 md:!w-2/5 space-y-4 "
      >
        <Container
          style={{ padding: 10 }}
          className="flex items-center space-x-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <Typography
            variant="body2"
            className="!text-stone-950 !font-semibold !font-sans "
          >
            FAQ
          </Typography>
        </Container>
        <Typography
          variant="h3"
          className="!text-slate-900 !font-semibold !font-sans  "
        >
          Your Questions Answered
        </Typography>
        <Container
          className="flex flex-col items-start space-x-2 rounded-3xl space-y-2 !p-4 !bg-black/10"
          style={{ padding: 0 }}
        >
          <Container style={{ padding: 0 }} className="flex justify-between ">
            <Typography
              variant="h6"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              How can LabridTech expand my business?
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 0 ? (
                <ExpandLessIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandLessIcon>
              ) : (
                <ExpandMoreIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(0);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandMoreIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 0 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              LabridTech is your one-stop shop for unlocking growth through
              technology. We offer strategic guidance to identify opportunities,
              custom software development to streamline processes, and
              cutting-edge AI solutions to gain valuable insights and automate
              tasks. With LabridTech, you'll make smarter decisions, improve
              efficiency, and achieve explosive results.
            </Typography>
          ) : null}
        </Container>

        <Container
          className="flex flex-col items-start space-x-2 rounded-3xl space-y-2 !p-4 !bg-black/10"
          style={{ padding: 0 }}
        >
          <Container style={{ padding: 0 }} className="flex justify-between ">
            <Typography
              variant="h6"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              I'm interested in improving my business with technology, but I'm
              not sure where to start.
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 1 ? (
                <ExpandLessIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandLessIcon>
              ) : (
                <ExpandMoreIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(1);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandMoreIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 1 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Need tech help? We're here for you! Labridtech offers expert
              consultations and workshops to help you pinpoint your tech needs
              and explore the best solutions. From initial brainstorming to
              final implementation, we'll guide you every step of the way. Book
              a free consultation today!
            </Typography>
          ) : null}
        </Container>

        <Container
          className="flex flex-col items-start space-x-2 rounded-3xl space-y-2 !p-4 !bg-black/10"
          style={{ padding: 0 }}
        >
          <Container style={{ padding: 0 }} className="flex justify-between ">
            <Typography
              variant="h6"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              How can latest technology help my business?
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 2 ? (
                <ExpandLessIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandLessIcon>
              ) : (
                <ExpandMoreIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(2);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandMoreIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 2 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Technology is the game-changer in modern business. By embracing
              technology, companies can optimize their processes, boost
              efficiency, and uncover valuable data-driven insights. This
              enables them to make informed decisions, anticipate customer
              preferences, and adapt to evolving market trends. Conversely,
              businesses that neglect technology adoption may face operational
              bottlenecks, lack crucial customer insights, and miss out on
              significant growth opportunities.
            </Typography>
          ) : null}
        </Container>

        <Container
          className="flex flex-col items-start space-x-2 rounded-3xl space-y-2 !p-4 !bg-black/10"
          style={{ padding: 0 }}
        >
          <Container style={{ padding: 0 }} className="flex justify-between ">
            <Typography
              variant="h6"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              What is the difference in labridtech then other companies?
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 3 ? (
                <ExpandLessIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandLessIcon>
              ) : (
                <ExpandMoreIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(3);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandMoreIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 3 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              We're committed to driving business growth. Our comprehensive
              approach combines state-of-the-art technology solutions with
              expert consulting to deliver innovative and effective results. We
              align our strategies with your business objectives and guarantee
              measurable outcomes that propel your business forward.
            </Typography>
          ) : null}
        </Container>

        <Container
          className="flex flex-col items-start space-x-2 rounded-3xl space-y-2 !p-4 !bg-black/10"
          style={{ padding: 0 }}
        >
          <Container style={{ padding: 0 }} className="flex justify-between ">
            <Typography
              variant="h6"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              How much does your software development services cost?
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 4 ? (
                <ExpandLessIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandLessIcon>
              ) : (
                <ExpandMoreIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(4);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandMoreIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 4 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              The cost of our services varies depending on the complexity and
              scope of the project. We provide customized quotes based on your
              specific requirements.
            </Typography>
          ) : null}
        </Container>

        <Container
          className="flex flex-col items-start space-x-2 rounded-3xl space-y-2 !p-4 !bg-black/10"
          style={{ padding: 0 }}
        >
          <Container style={{ padding: 0 }} className="flex justify-between ">
            <Typography
              variant="h6"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              What happens after the project is completed?
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 5 ? (
                <ExpandLessIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandLessIcon>
              ) : (
                <ExpandMoreIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(5);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandMoreIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 5 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              We offer ongoing maintenance and support to ensure your software
              continues to function optimally. This includes bug fixes, updates,
              and enhancements as needed. You can also opt for additional
              support packages to meet your specific needs.
            </Typography>
          ) : null}
        </Container>

        <Container
          className="flex flex-col items-start space-x-2 rounded-3xl space-y-2 !p-4 !bg-black/10"
          style={{ padding: 0 }}
        >
          <Container style={{ padding: 0 }} className="flex justify-between ">
            <Typography
              variant="h6"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Can you work with my existing team?
            </Typography>
            <ThemeProvider theme={theme}>
              {tabexpand === 6 ? (
                <ExpandLessIcon
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandLessIcon>
              ) : (
                <ExpandMoreIcon
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    event.preventDefault();
                    setTabexpand(6);
                  }}
                  color="primary"
                  className="!h-8 !w-8 rounded-full hover:!fill-cyan-200 "
                ></ExpandMoreIcon>
              )}
            </ThemeProvider>
          </Container>

          {tabexpand === 6 ? (
            <Typography
              variant="body2"
              className="!text-slate-900 !font-semibold !font-sans "
            >
              Absolutely. We can collaborate with your existing team to
              seamlessly integrate our services into your development process.
              Whether it's providing technical expertise, additional resources,
              or project management, we can work together to achieve your goals.
            </Typography>
          ) : null}
        </Container>

        <Box className="flex justify-center sm:justify-start">
          <Button
            variant="contained"
            className="w-1/2 !rounded-3xl bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300"
            onClick={() => navigate("/quote/1")}
          >
            Let Have A Meet
          </Button>
        </Box>
      </Box>

      <img
        alt="vector"
        src={saas}
        style={{ borderRadius: 50 }}
        className="flex w-11/12 md:w-1/2  p-2  "
      />
    </Box>
  );
}
