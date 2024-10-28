import "../style/App.css";
import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import Loader from "../component/Loader";
const Banner2 = lazy(() => import("../section/banner"));
const SectionChoosing = lazy(() => import("../section/choosing-section"));
const Mainservice = lazy(() => import("../section/main-service"));
const Navbar = lazy(() => import("../section/nav"));
const OurWork = lazy(() => import("../section/our-work-section"));
const Testmonial = lazy(() => import("../section/testmonial"));
const DiscussSection = lazy(() => import("../section/discuss-section"));
const Footer = lazy(() => import("../section/footer"));
const Stats = lazy(() => import("../section/stats"));
const SectionAbout = lazy(() => import("../section/About-section"));
const Faq = lazy(() => import("../section/Faq"));
const SectionCare = lazy(() => import("../section/CareSection"));

function App() {
  return (
    <Box className="scroll-smooth overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Navbar
          navItems={["About us", "Service", "Case Study", "Contact us"]}
        ></Navbar>

        <Box className="space-y-12 my-5">
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
