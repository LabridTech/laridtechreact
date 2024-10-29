import "../style/App.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Productcard from "../component/product-card";
import { Box, Container, Grid2 } from "@mui/material";
import Calltoaction from "../img/calltoaction.png";
import { productinfo } from "../info/product-info";
import * as React from "react";
import { lazy, Suspense } from "react";
import Loader from "../component/Loader";
const time = 200;
const Subbanner = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/subbanner")), time);
  });
});
const Navbar = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/nav")), time);
  });
});
const Footer = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/footer")), time);
  });
});

function Project() {
  return (
    <Suspense fallback={<Loader />}>
      <Box>
        <Navbar></Navbar>
        <Box className="space-y-4">
          <Subbanner
            item={{
              title: "Our Portfolio",
              text: "Showcasing our expertise in website development, mobile apps, SEO, and digital marketing to power your business growth.",
              button: "Build My Solution",
            }}
          ></Subbanner>

          <Box className="m-10 items-center flex flex-col space-y-10">
            <Box className="flex flex-col items-center">
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
                  Our Project
                </Typography>
              </Container>
              <Typography
                variant="h4"
                className="!text-slate-900 !font-semibold !font-sans  "
              >
                Web Development
              </Typography>
            </Box>

            <Grid2
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 2, sm: 4, md: 5 }}
            >
              {productinfo
                .filter((value) =>
                  value.catogery === "Web Development" ? value : null
                )
                .map((item) => (
                  <Productcard
                    item={{
                      pic: item.pic1,
                      catogery: item.catogery,
                      title: item.title,
                    }}
                    style={{ display: "none" }}
                  ></Productcard>
                ))}
            </Grid2>

            <Box className="flex flex-col items-center">
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
                  Our Project
                </Typography>
              </Container>
              <Typography
                variant="h4"
                className="!text-slate-900 !font-semibold !font-sans  "
              >
                Mobile Development
              </Typography>
            </Box>

            <Grid2
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 2, sm: 4, md: 5 }}
            >
              {productinfo
                .filter((value) =>
                  value.catogery === "Mobile Development" ? value : null
                )
                .map((item) => (
                  <Productcard
                    item={{
                      pic: item.pic1,
                      catogery: item.catogery,
                      title: item.title,
                    }}
                    style={{ display: "none" }}
                  ></Productcard>
                ))}
            </Grid2>

            <Box className="flex flex-col items-center">
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
                  Our Project
                </Typography>
              </Container>
              <Typography
                variant="h4"
                className="!text-slate-900 !font-semibold !font-sans  "
              >
                Graphic Designing
              </Typography>
            </Box>

            <Grid2
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 2, sm: 4, md: 5 }}
            >
              {productinfo
                .filter((value) =>
                  value.catogery === "Graphic Designing" ? value : null
                )
                .map((item) => (
                  <Productcard
                    item={{
                      pic: item.pic1,
                      catogery: item.catogery,
                      title: item.title,
                    }}
                    style={{ display: "none" }}
                  ></Productcard>
                ))}
            </Grid2>

            <Box className="flex flex-col items-center">
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
                  Our Project
                </Typography>
              </Container>
              <Typography
                variant="h4"
                className="!text-slate-900 !font-semibold !font-sans  "
              >
                Branding
              </Typography>
            </Box>

            <Grid2
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 2, sm: 4, md: 5 }}
            >
              {productinfo
                .filter((value) =>
                  value.catogery === "Branding" ? value : null
                )
                .map((item) => (
                  <Productcard
                    item={{
                      pic: item.pic1,
                      catogery: item.catogery,
                      title: item.title,
                    }}
                    style={{ display: "none" }}
                  ></Productcard>
                ))}
            </Grid2>

            <Box
              className={`flex flex-col w-11/12 md:w-4/5 items-center rounded-2xl bg-no-repeat p-4`}
              sx={{ backgroundImage: `url(${Calltoaction})` }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#000", textAlign: "center" }}
                gutterBottom
              >
                Enough talk, let’s get to work
              </Typography>
              <Button
                className="w-3/5 md:w-1/5 bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300 !rounded-3xl"
                variant="contained"
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
          <Footer></Footer>
        </Box>
      </Box>
    </Suspense>
  );
}

export default Project;
