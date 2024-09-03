import './App.css';
import { Banner } from './banner';
import { SectionChoosing } from './choosing-section';
import { Mainservice } from './main-service';
import { Navbar } from './nav';
import Button from '@mui/material/Button';
import { OurWork } from './our-work-section';
import { Testmonial } from './testmonial';
import {DiscussSection} from './discuss-section';
import {Footer} from './footer';

function App() {
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Resourse' , 'Contact us']}></Navbar>
      <Banner></Banner>
      <Mainservice></Mainservice>
      <SectionChoosing></SectionChoosing>
      <OurWork></OurWork>
      <Testmonial></Testmonial>
      <DiscussSection></DiscussSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
