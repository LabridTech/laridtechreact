import './App.css';
import { Footer } from './footer';
import { Navbar } from './nav';
import { Subbanner } from './subbanner';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Productcard } from './component/product-card';
import Pic1 from './img/rect.png'
import { Grid2 } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {IconButton} from '@mui/material';
import Calltoaction from './img/calltoaction.png'
import { productinfo } from './info/product-info';
import { isMobile } from './windowsize';

function Project() {
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Resourse' , 'Contact us']}></Navbar>
      <Subbanner item={{  title : 'Our Portfolio' , text : 'Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros ' , button : 'Build My Solution'}} ></Subbanner>
       
      <div style={{   width : '90%' ,
                backgroundColor : '#000' , paddingInline : '5%'}}> 
      <div style={{
                justifyContent : 'flex-end' ,
                display : 'flex' ,
                width : '100%' ,
                backgroundColor : '#000' ,
                
            }}>
              
                <IconButton sx={{ color : '#FFA800'  , 
                padding : 2 ,
                margin : 1,
                border : 1 ,
                borderRadius : '10px' ,
                borderColor : '#FFA800'}}>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>
                <IconButton sx={{color : '#FFA800' ,
                 padding : 2 ,
                margin : 1,
                border : 1 ,
                borderRadius : '10px' ,
                borderColor : '#FFA800'}}>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </IconButton>
            </div>
            </div>    
      
      <Grid2 container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 4, md: 5 }} sx={{backgroundColor : '#000' ,paddingInline : '5%' , justifyContent : 'center'}} >
        {
          productinfo.map((item) =>  <Productcard item={{pic : item.pic1 , catogery : item.catogery , title : item.title}} style={{display : 'none'}} ></Productcard>
          )
        }
           
      </Grid2>
      

      <div style={{ padding : isMobile() ? '5%' : '20%' ,backgroundColor : '#000' }}>
        <div style={{ maxWidth : '1400px' ,  width : '100%' , background : `url(${Calltoaction})` , height : isMobile() ? '409px' : '209px' , backgroundRepeat : 'no-repeat' , backgroundPosition : 'center' , display : 'grid' , backgroundSize  : 'cover' , placeItems : 'center' , borderColor : "#A1AEBF", border: 1 , borderRadius : "10px"}}> 
            <div style={{ display : 'flex' , justifyContent : 'center' , flexDirection : 'column' , alignItems : 'center'}}>
             <Typography variant="h3" sx={{color : '#000' , textAlign : 'center'}} gutterBottom>
             Enough talk, let’s get to work
             </Typography>
             <Button variant="contained" sx={{ marginInline : 2 , backgroundColor : 'transparent' , color : '#FBFBFB85' , fontWeight : 'bold'  , fontSize : '12px' ,  borderRadius : '30px' , paddingBlock : 1 , paddingInline : 2 , border : 2 , borderColor : '#fbfbfb85' }}>Get in Touch</Button>
            </div>
           
        </div>
        
        
        </div>  

      

      <Footer></Footer>
            
    </div>
  );
}

export default Project;