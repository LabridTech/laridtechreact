import '../style/App.css';
import { Footer } from '../section/footer';
import { Navbar } from '../section/nav';
import { Subbanner } from '../section/subbanner';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { isMobile } from '../windowsize';
import useWindowDimensions from '../windowsize';

function Aboutus() {
  let k = 0;
  let { height, width } = useWindowDimensions();
  if ( isMobile() ){
    k =25
  }
  if(width < 1100){
    k =2
  }
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Case Study' , 'Contact us']}></Navbar>
      <Subbanner item={{pagetitle : 'About us' , title : 'LabridTech' , button : 'Contact'}} ></Subbanner>
      <div style={{ width : '80%' , height : isMobile() ? 300 : 200 + width * k/10 , backgroundColor : '#14111e' , paddingInline : '10%' , paddingTop : "100px"}}>
          <Typography variant="h3" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
             About us
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            Labrid Tech is a technology solutions company specializing in web, app, and software development. We are passionate about crafting exceptional digital experiences and cutting-edge solutions tailored to your unique needs.  
            </Typography>
      </div>

      <div style={{ width : '80%' , height : isMobile() ? 630 : 350 + width * k/10  , backgroundColor :  '#14111e' , paddingInline : '10%'}}>
          <Typography variant="h3" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            Our Expertise
            </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            Our team of experienced developers and designers is proficient in a wide range of technologies and frameworks. We offer expertise in:
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Web Development (Frontend and Backend) </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Mobile App Development (iOS and Android) </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Software Development </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Data Scrapping Services </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   UI/UX Design </Typography>
      </div>
       <div style={{ width : '80%' , height : isMobile() ? 930 :  510 + width * k/10  , backgroundColor :  '#14111e' , paddingInline : '10%'}}>
          <Typography variant="h3" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            Service
            </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Custom Solutions: </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   We understand that every project is unique. We tailor our services to meet your specific requirements, ensuring a personalized approach to your tech needs. </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Quality Assurance: </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   We are committed to delivering top-notch, bug-free solutions. Rigorous testing and quality control are integral parts of our development process. </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Timely Delivery: </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   We value your time. Our team is dedicated to delivering projects on time and within budget. </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Transparent Communication:  </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   We believe in open and honest communication. You will have direct access to our team throughout the development process. </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>  Post-Launch Support: </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Our partnership doesn't end with project delivery. We offer ongoing support and maintenance to ensure your solutions remain cutting-edge. </Typography>
      </div>

      <div style={{ width : '80%' , height : isMobile() ? 950 : 550 + width * k/10  , backgroundColor :  '#14111e' , paddingInline : '10%'}}>
          <Typography variant="h3" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            How to Get Started
            </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>  Contact Us: </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>  <a style={{color : ' #ffffff82 ' , textDecoration : 'none'}} href='/quote'>   If you're interested in working with us or have any questions, feel free to get in touch . </a> </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>  Consultation:  </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   We will schedule a consultation to discuss your project requirements, goals, and budget. </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Proposal: </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Based on our discussion, we will provide you with a detailed proposal outlining the scope, timeline, and cost of your project. </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Development:  </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Once the proposal is accepted, our team will start working on your project, keeping you updated throughout the process. </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>  Delivery: </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   We will deliver your project on time and provide any necessary support to ensure a smooth launch. </Typography>
            <Typography variant="h5" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>  Post-Launch: </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 1}} gutterBottom>   Our team is available for ongoing support and maintenance to ensure your project's success. </Typography>
      </div>
      
       
      <div style={{ width : '80%' , height : '200px' , backgroundColor :  '#14111e' , paddingInline : '10%' , display : 'flex' , alignItems : 'center'}}>
      <Button  sx={{ color: '#FFA800'  ,  borderRadius : '20px' , borderColor : '#FFA800'  , border : 1 , marginBlock : 2}}>
              Go to Home
            </Button>
       </div>     

      <Footer></Footer>
            
    </div>
  );
}

export default Aboutus;