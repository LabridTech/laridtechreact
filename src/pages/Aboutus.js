import "../style/App.css";
import { Box } from "@mui/material";
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
const SectionProcess = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/Process-section")), time);
  });
});
const SectionVision = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/vision-section")), time);
  });
});
const DiscussSection = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/discuss-section")), time);
  });
});
const Footer = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/footer")), time);
  });
});
const Stats = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/stats")), time);
  });
});
const SectionAbout = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/About-section")), time);
  });
});
const SectionCare = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/CareSection")), time);
  });
});

function Aboutus() {
  return (
    <Suspense fallback={<Loader/>}>
    <Box className="flex flex-col">
      <Navbar></Navbar>
      <Box className="flex flex-col space-y-10">
        <Subbanner
          item={{
            pagetitle: "About us",
            title: "LabridTech",
            button: "Contact",
          }}
        ></Subbanner>
        <SectionAbout></SectionAbout>
        <SectionProcess></SectionProcess>
        <SectionVision></SectionVision>
        <SectionCare></SectionCare>
        <Stats></Stats>
        <DiscussSection></DiscussSection>
        <Footer></Footer>
      </Box>
    </Box>
    </Suspense>
  );
}

export default Aboutus;
