import "../style/App.css";
import Footer from "../section/footer";
import Navbar from "../section/nav";
import Subbanner from "../section/subbanner";
import Button from "@mui/material/Button";
import { Box, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import * as React from "react";

function Quote() {
  const { tab } = useParams();
  const [Tabcheck, setTabcheck] = React.useState(Number(tab));

  return (
    <Box className="flex flex-col">
      <Navbar></Navbar>
      <Box className="flex flex-col space-y-2">
        <Subbanner
          item={{ pagetitle: "Schedule Meeting", title: "Quote", button: null }}
        ></Subbanner>
        <Box className="flex flex-col space-y-4 my-4">
          {" "}
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
              Leave a Message
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
              Book a free Consultation
            </Button>
          </Container>
          <Box className="flex flex-col sm:flex-row items-center justify-evenly mx-10">
            <Box className="flex flex-col items-center w-11/12 md:w-1/3 space-y-2">
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
                  Have meet with us, Write to Us
                </Typography>
              </Container>
              <Typography
                variant="h4"
                className="!text-slate-900 !font-semibold !font-sans  "
              >
                We Would Be Happy To Meet You And Learn All About Your Business
              </Typography>
            </Box>

            <Box
              method="POST"
              action="https://formsubmit.co/labridtech@gmail.com"
              component="form"
              className="p-4 !backdrop-opacity-100 !rounded-3xl !bg-black/30 !shadow-2xl !ring-4 !backdrop-blur-3xl !ring-white/10 flex flex-col space-y-4 items-center  my-4 w-11/12 md:w-1/2 "
            >
              <TextField
                id="filled-basic"
                required
                label="Full Name"
                variant="filled"
                fullWidth
                style={{ color: "#fff" }}
              />
              <TextField
                id="filled-basic"
                required
                label="Email"
                variant="filled"
                fullWidth
                style={{ color: "#fff" }}
              />
              <TextField
                id="filled-basic"
                required
                label="Phone Number"
                variant="filled"
                fullWidth
                style={{ color: "#fff" }}
              />
              <TextField
                id="filled-basic"
                required
                label="Country"
                variant="filled"
                fullWidth
                style={{ color: "#fff" }}
              />
              <TextField
                id="filled-basic"
                required
                label="Project"
                variant="filled"
                fullWidth
                style={{ color: "#fff" }}
              />
              {Tabcheck === 1 && (
                <TextField
                  id="filled-basic"
                  required
                  InputLabelProps={{ shrink: true }}
                  label="Date"
                  type="date"
                  variant="filled"
                  fullWidth
                  style={{ color: "#fff" }}
                />
              )}
              {Tabcheck === 0 && (
                <TextField
                  id="filled-basic"
                  required
                  label="Leave Meesage"
                  variant="filled"
                  fullWidth
                  multiline
                  rows={4}
                  style={{ color: "#fff" }}
                />
              )}
              <Button
                type="Submit"
                className="bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300 !rounded-3xl !px-6 "
                variant="contained"
              >
                {" "}
                Send US{" "}
              </Button>
            </Box>
          </Box>
        </Box>

        <Footer></Footer>
      </Box>
    </Box>
  );
}

export default Quote;
