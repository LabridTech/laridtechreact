import '../style/App.css';
import { Footer } from '../section/footer';
import { Navbar } from '../section/nav';
import Typography from '@mui/material/Typography';


function Comingsoon() {
 
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Case Study' , 'Contact us']}></Navbar>
      <Typography variant="h1" sx={{color : '#FFFFFF' , margin : 5 , textAlign : 'center'}} gutterBottom>
            Coming Soon
      </Typography>

      

      <Footer></Footer>
            
    </div>
  );
}

export default Comingsoon;