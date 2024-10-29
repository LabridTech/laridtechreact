import "../style/App.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import  Productcard  from "../component/product-card";
import  Servicecard  from "../component/service-card";
import  {serviceinfo}  from "../info/service-info";
import  {Box, Container, Grid2 } from "@mui/material";
import  {productinfo}  from "../info/product-info";
import { useParams } from "react-router-dom";
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

function Niche() {
  const { title } = useParams();
  let count = 0;


  return (
    <Suspense fallback={<Loader/>}>
    <Box className="flex flex-col ">
      <Navbar
        navItems={["About us", "Service", "Case Study", "Contact us"]}
      ></Navbar>
      <Subbanner
        item={{
          pagetitle: title,
          title: "Find your niche",
          text: "Discover your perfect market fit with tailored insights to help you define and thrive in your niche. ",
          button: "Build My Solution",
        }}
      ></Subbanner>
      {productinfo.filter((item) => {
        return item.catogery === title ? item : null;
      }).length === 0 ? (
        <Box>
          <Typography
            variant="h5"
            style={{
              color: "#fff",
            }}
          >
            Website under maintainance
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: "#ffffff82",
            }}
          >
            contents coming soon
          </Typography>
        </Box>
      ) : (
        <Box className='flex flex-col space-y-10 px-6 my-6'>
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
                Our Process
              </Typography>
            </Container>
            <Typography
              variant="h4"
              className="!text-slate-900 !font-semibold !font-sans  "
            >
              {title + " RoadMap"}
            </Typography>

            <Typography variant="subtitle1" className="w-1/2" gutterBottom>
              {serviceinfo
                .filter((item) => {
                  return item.title === title ? item : null;
                })
                .map((item) => item.process)}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" gutterBottom>
              Similar Works
            </Typography>
            <Grid2
              container
              spacing={{ xs: 1, md: 3 }}
              columns={{ xs: 2, sm: 4, md: 5 }}
            >
              {productinfo
                .filter((item) => {
                  return item.catogery === title ? item : null;
                })
                .map((item) => (
                  <Productcard
                    item={{
                      pic: item.pic1,
                      catogery: item.catogery,
                      title: item.title,
                    }}
                  ></Productcard>
                ))}
            </Grid2>
          </Box>

          <Box>
            <Typography variant="h4" gutterBottom>
              Some other services
            </Typography>
            <Grid2
              container
              columnSpacing={{ xs: 1, sm: 1, md: 2 }}
              spacing={{ xs: 1, sm: 2, md: 5 }}
              columns={{ xs: 3, sm: 4, md: 5 }}
            >
              {serviceinfo
                .filter((item) => (item.title !== title ? item : null))
                .filter((item) => {
                  count++;
                  return count < 4 ? item : null;
                })
                .map((item) => (
                  <Servicecard
                    item={{
                      logo: item.logo,
                      title: item.title,
                      text: item.description,
                    }}
                  ></Servicecard>
                ))}
            </Grid2>
          </Box>

          <Box>
            <Button variant="outlined" >Go to Home</Button>
          </Box>
        </Box>
      )}
      <Footer></Footer>
    </Box>
    </Suspense>
  );
}

export default Niche;
