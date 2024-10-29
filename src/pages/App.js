import "../style/App.css";
import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import Loader from "../component/Loader";
const time = 200;
const Banner2 = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/banner")), time);
  });
});
const SectionChoosing = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/choosing-section")), time);
  });
});
const Mainservice = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/main-service")), time);
  });
});
const Navbar = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/nav")), time);
  });
});
const OurWork = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/our-work-section")), time);
  });
});
const Testmonial = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/testmonial")), time);
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
const Faq = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/Faq")), time);
  });
});
const SectionCare = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/CareSection")), time);
  });
});

function App() {
  return (
    <Box className="scroll-smooth overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Navbar></Navbar>
        <Box className="space-y-12 mb-5">
          <Banner2></Banner2>
          <SectionAbout></SectionAbout>
          <Mainservice></Mainservice>
          <SectionChoosing></SectionChoosing>
          <SectionCare></SectionCare>
          <Stats></Stats>
          <OurWork></OurWork>
          <Faq></Faq>
          <Testmonial></Testmonial>
          <DiscussSection></DiscussSection>
        </Box>
        <Footer></Footer>
      </Suspense>
    </Box>
  );
}

export default App;
