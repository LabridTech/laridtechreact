import '../style/App.css';
import Vector from '../img/Vector1.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { isMobile } from '../windowsize';
import useWindowDimensions from '../windowsize';
import { useNavigate } from "react-router-dom";


export function SectionChoosing(){
     const navigate = useNavigate();
     let { height, width } = useWindowDimensions();
     let k = 2;
     if(width <1600){
          k = 3 ;
         }
     if(width < 1100){
          k =6
        }    
     if(isMobile()){
          k = 15;
     }
    return(
        <div className="choose-section" style={{ flexDirection : isMobile() ?  'column' : 'row', height : 150 + width * k/5 , justifyContent  : isMobile() ? 'center' : 'space-between' , }}>
           <img alt='vector' src={Vector} style={{ width : isMobile() ? '100%' : '45%'  , height : '400px', display : 'flex'}} />
             <div style={{
                marginInline : '10%' , 
                display : 'flex',
                flexDirection : 'column' ,
                alignItems : 'flex-start',
                flexWrap : 'wrap'
             }} >
                  <Typography gutterBottom variant="h5" component="div" sx={{color : '#fff'}}>
                       Why choose us
                 </Typography>
    


  <Typography variant="h7" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
Budget-Friendly Solutions
 </Typography>

  <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
We believe that going digital shouldn’t come with an overwhelming price tag. That’s why we offer competitive and transparent pricing, making high-quality software services and brand management accessible to businesses with any budget. Whether you’re launching your startup or looking to expand, our affordable packages ensure that your investment yields the best results.
</Typography>
      
  <Typography variant="h7" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
Perfect for Startups and Small Businesses
   </Typography>

  <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
Starting out can be tough, and having the right support can make all the difference. LabridTech specializes in helping small businesses and startups build a strong online presence. From website development to digital branding, we provide tailored solutions designed to drive growth, increase visibility, and enhance customer engagement.
</Typography>
     
  <Typography variant="h7" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
Comprehensive Services
   </Typography>

  <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
We offer a wide range of services, from cutting-edge software solutions to strategic brand management. Whether you need a sleek website, digital marketing, or a comprehensive brand overhaul, our team of experts has the skills and experience to bring your vision to life.
 </Typography>
     
  <Typography variant="h7" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
Focused on Digital Transformation
   </Typography>

  <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
In today’s fast-paced world, businesses must adapt quickly to stay ahead. LabridTech is here to help you navigate the digital transformation process smoothly. We leverage the latest technologies to provide scalable, efficient solutions that optimize your operations and drive your business forward.
 </Typography>
     
  <Typography variant="h7" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
Customer-Centric Approach
   </Typography>

  <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
Your success is our top priority. At LabridTech, we work closely with you to understand your specific goals and challenges, ensuring that our solutions not only meet your needs but exceed your expectations. Our customer-first approach is what makes us a trusted partner in helping businesses succeed.


                </Typography>
                <Button  sx={{ color: '#FFA800'  ,  borderRadius : '20px' , borderColor : '#FFA800'  , border : 1 , marginBlock : 2}} onClick={() => navigate('/quote')}>
                Let’s connect 
                 </Button>
                </div>
           </div>
        
    )
}
