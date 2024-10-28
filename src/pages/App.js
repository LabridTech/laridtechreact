import "../style/App.css";
import { Box } from "@mui/material";
import { lazy ,Suspense } from "react";
import Loader from "../component/Loader";
const Banner2 = lazy(()=> import("../section/banner"));
const SectionChoosing = lazy(()=> import("../section/choosing-section"));
const Mainservice = lazy(()=> import("../section/main-service"));
const Navbar = lazy(()=> import("../section/nav"));
const OurWork = lazy(()=> import("../section/our-work-section"));
const Testmonial = lazy(()=> import("../section/testmonial"));
const DiscussSection = lazy(()=> import("../section/discuss-section"));
const Footer = lazy(()=> import("../section/footer"));
const Stats = lazy(()=> import("../section/stats"));
const SectionAbout = lazy(() => import("../section/About-section"));
const Faq = lazy(() => import("../section/Faq"));
const SectionCare = lazy(() => import("../section/CareSection"));


function App() {
  return (
    <Box className="scroll-smooth ">
      
      <Suspense fallback={<Loader/>}>
      <Navbar
        navItems={["About us", "Service", "Case Study", "Contact us"]}
      ></Navbar>
      </Suspense>
      
      <Box className='space-y-12 my-5'>
      <Suspense fallback={<Loader/>}>  
      <Banner2></Banner2>
      </Suspense>
      <Suspense fallback={<Loader/>}>
      <SectionAbout></SectionAbout>
      </Suspense>
      <Suspense fallback={<Loader/>}>
      <Mainservice></Mainservice>
      </Suspense>
      <Suspense fallback={<Loader/>}>
      <SectionChoosing></SectionChoosing>
      </Suspense>
      <Suspense fallback={<Loader/>}>
      <SectionCare></SectionCare>
      </Suspense>
      <Suspense fallback={<Loader/>}>
      <Stats></Stats>
      </Suspense>
      <Suspense fallback={<Loader/>}>
      <OurWork></OurWork>
      </Suspense>
      <Suspense fallback={<Loader/>}>
      <Faq></Faq>
      </Suspense>
      <Suspense fallback={<Loader/>}>
      <Testmonial></Testmonial>
      </Suspense>
      <Suspense fallback={<Loader/>}>
      <DiscussSection></DiscussSection>
      </Suspense>
      </Box>
      <Suspense fallback={<Loader/>}>
      <Footer></Footer>
      </Suspense>
    </Box>
  );
}

export default App;
