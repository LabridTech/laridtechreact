import './App.css';
import { Footer } from './footer';
import { Navbar } from './nav';
import { Subbanner } from './subbanner';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { isMobile } from './windowsize';
import useWindowDimensions from './windowsize';

function Aboutus() {
  let k = 0;
  let { height, width } = useWindowDimensions();
  if ( isMobile() ){
    k =10
  }
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Resourse' , 'Contact us']}></Navbar>
      <Subbanner item={{pagetitle : 'About us' , title : 'LabridTech' , button : 'Contact'}} ></Subbanner>
      <div style={{ width : '80%' , height : 300 + width * k/10 , backgroundColor : 'rgb(17, 15, 15)' , paddingInline : '10%' , paddingTop : "100px"}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            Company
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.  
            </Typography>
      </div>

      <div style={{ width : '80%' , height : 250 + width * k/10  , backgroundColor :  'rgb(17, 15, 15)' , paddingInline : '10%'}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            Team
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.  
            </Typography>
      </div>
      <div style={{ width : '80%' , height : '200px' , backgroundColor :  'rgb(17, 15, 15)' , paddingInline : '10%'}}>
      <Button  sx={{ color: '#FFA800'  ,  borderRadius : '20px' , borderColor : '#FFA800'  , border : 1 , margin : 2}}>
              Go to Home
            </Button>
       </div>     

      <Footer></Footer>
            
    </div>
  );
}

export default Aboutus;