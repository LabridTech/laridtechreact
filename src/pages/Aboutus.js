import "../style/App.css";
import Footer  from "../section/footer";
import  Navbar  from "../section/nav";
import  Subbanner  from "../section/subbanner";
import  {Box}  from "@mui/material";
import SectionAbout  from "../section/About-section";
import  SectionProcess  from "../section/Process-section";
import  SectionVision  from "../section/vision-section";
import  SectionCare  from "../section/CareSection";
import  DiscussSection  from "../section/discuss-section";
import  Stats  from "../section/stats";

function Aboutus() {
  return (
    <Box className="flex flex-col">
      <Navbar
      ></Navbar>
       <Box className="flex flex-col space-y-10">
      <Subbanner
        item={{ pagetitle: "About us", title: "LabridTech", button: "Contact" }}
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
  );
}

export default Aboutus;
