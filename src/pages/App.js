import '../style/App.css';
import { Banner } from '../section/banner';
import { SectionChoosing } from '../section/choosing-section';
import { Mainservice } from '../section/main-service';
import { Navbar } from '../section/nav';
import { OurWork } from '../section/our-work-section';
import { Testmonial } from '../section/testmonial';
import {DiscussSection} from '../section/discuss-section';
import {Footer} from '../section/footer';

function App() {
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Case Study' , 'Contact us']}></Navbar>
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
