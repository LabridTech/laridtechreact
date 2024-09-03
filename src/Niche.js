import './App.css';
import { Footer } from './footer';
import { Navbar } from './nav';
import { Subbanner } from './subbanner';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Productcard } from './component/product-card';
import { Servicecard } from './component/service-card';
import { serviceinfo } from './info/service-info';
import { Grid2 } from '@mui/material';
import { productinfo } from './info/product-info';
import useWindowDimensions from './windowsize'
import { isMobile } from './windowsize';
import {useParams} from 'react-router-dom';

function Niche() {
  const { title } =  useParams();
  let { height, width } = useWindowDimensions();
  let count = 0 ;
  let k =  productinfo.filter((item)=> { return item.catogery === title ? item : null }).length / 5 ;
  if (isMobile()) {
       k = productinfo.filter((item)=> { return item.catogery === title ? item : null }).length ;
     } 
 
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Resourse' , 'Contact us']}></Navbar>
      <Subbanner item={{pagetitle : 'Branding' , title : 'Find your niche' , text : 'Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros ' , button : 'Build My Solution'}} ></Subbanner>
      <div style={{ width : '80%' , height :  isMobile() ? 500 : 100  , backgroundColor : 'rgb(17, 15, 15)' , paddingInline : '10%' , paddingTop : "100px"}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            Process
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.  
            </Typography>
      </div>

      <div style={{ width : '80%' , height : isMobile() ? 100 + k * 600  :  550 + k * 800 , backgroundColor : 'rgb(17, 15, 15)' , display : 'flex' , justifyContent : 'center' , flexDirection : 'column' , alignItems : 'start' , paddingInline : '10%' , paddingTop : "100px"}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            Similar Works
            </Typography>
            <Grid2 container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 4, md: 5 }} >
            {
                  productinfo.filter((item)=> { return item.catogery === title ? item : null }).map((item)=>
                    <Productcard item={{pic : item.pic1 , catogery : item.catogery , title : item.title}} ></Productcard>
                  )
              }
            
            </Grid2>
            
      </div>

      <div style={{ width : '80%' , height : isMobile() ? 900 : 400   , backgroundColor : 'rgb(17, 15, 15)' , paddingInline : '10%' , paddingTop : "100px" ,display : 'flex' , justifyContent : 'center' , flexDirection : 'column' , alignItems : 'start' ,}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            Some other services
            </Typography>
            <Grid2 container columnSpacing={{xs: 1, sm : 1, md: 2 }} spacing={{ xs: 1, sm : 2, md: 5 }} columns={{ xs: 3, sm: 4, md: 5 }} >
              {
                serviceinfo.filter( (item)=> item.title !== title ? item : null).filter( (item)=> { count++ ;  return count<4  ? item : null  } ).map( (item)=> <Servicecard item={{logo : item.logo , title : item.title  , text : item.description}}></Servicecard> )
              }
            
            </Grid2>
      </div>

      <div style={{ width : '80%' , height : '200px' , backgroundColor :  'rgb(17, 15, 15)' , paddingInline : '10%'}}>
      <Button  sx={{ color: '#FFA800'  ,  borderRadius : '20px' , borderColor : '#FFA800'  , border : 1 , margin : 0}}>
              Go to Home
            </Button>
       </div>    

      <Footer></Footer>
            
    </div>
  );
}

export default Niche;