import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import '../style/App.css';
import { Productcard } from '../component/product-card';
import useWindowDimensions from '../windowsize'
import { isMobile } from '../windowsize';
import { productinfo } from '../info/product-info';
import { useNavigate } from "react-router-dom";


export function OurWork(){
  const navigate = useNavigate();
      let { height, width } = useWindowDimensions();
     let k = 5 ;
     if(width <1600){
      k = 10 ;
     }
     if(width < 1100){
      k =30
    }
     
    return (
       <div className='ourwork-section' style={{ height : isMobile() ? productinfo.length * 220  : 50 + width * k/10 , flexDirection : isMobile() ? 'column' :  'row' }} > 
        <div style={{
            marginLeft : '5%' , 
            display : 'flex',
            flexDirection : 'column' ,
            alignItems : 'flex-start',
            flexWrap : 'wrap' ,
            width : isMobile() ? '90%' : '50%'
         }} >
              <Typography gutterBottom variant="h5" component="div" sx={{color : '#fff'}}>
              Some pieces of our work
             </Typography>
             <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start' ,width : isMobile() ? '100%' :  '50%'}}>
                 At LabridTech, we take pride in delivering top-tier software solutions and brand management services that drive real results. Our portfolio showcases a diverse range of projects that reflect our commitment to innovation, quality, and customer satisfaction. From empowering startups with tailored digital solutions to helping established businesses achieve digital transformation, each project represents our passion for turning ideas into success stories. Explore our work and see how we can bring your vision to life.
            </Typography>
            <Button  sx={{ color: '#FFA800'  ,  borderRadius : '20px' , borderColor : '#FFA800'  , border : 1 , marginBlock : 2}} onClick={() => navigate('/project')}>
             Show More 
             </Button>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                justifyContent : 'center' ,
             
              }}>
                {
                  productinfo.filter((item)=> { return item.main ? item : null }).map((item)=>
                    
                    <Productcard item={{pic : item.pic1 , catogery : item.catogery , title : item.title}} ></Productcard>
                  
                    
                  )
                }
               
                

                

                </Grid>
        </div>   
    )
}
