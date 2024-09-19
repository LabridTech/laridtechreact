import '../style/App.css';
import { Footer } from '../section/footer';
import { Navbar } from '../section/nav';
import { Subbanner } from '../section/subbanner';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import {useParams} from 'react-router-dom';
import { productinfo } from '../info/product-info';
import { isMobile } from '../windowsize';
import { AspectRatio } from '@mui/icons-material';

function ProjectDetail() {
  const { title } =  useParams();
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Case Study' , 'Contact us']}></Navbar>
      <Subbanner item={{pagetitle : 'About us' , title : 'LabridTech' , button : 'Contact'}} ></Subbanner>

      {
        productinfo.filter((item) => item.title === title ? item : null ).map((item) =>{
          return(
        <>
          <div style={{ padding :  '10%' ,backgroundColor : '#14111e' }}>
        <div style={{   width : '100%' , background : `url(${item.pic1})` , height : '1000px' , backgroundRepeat : 'no-repeat' , backgroundPosition : 'center' , display : 'grid'  , placeItems : 'center' , borderColor : "#A1AEBF", border: 1 , borderRadius : "10px", backgroundSize : item.catogery === 'Mobile Development' ? 'contain' : 'cover'}}> 
            
             
            
           
        </div>
        
        </div>  

      <div style={{ width : '80%' , height : isMobile() ? '550px' :  '400px' , backgroundColor : '#14111e' , paddingInline : '10%' , paddingTop : "100px"}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            01. Description
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            {item.text}  
            </Typography>
      </div>

      <div style={{ width : '80%' , height : isMobile() ? '700px' : '400px' , backgroundColor :  '#14111e' , paddingInline : '10%'}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
          02. Features
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
             {item.feat}  
            </Typography>
      </div>

      <div style={{ width : '80%' , height : isMobile() ? '650px' : '400px' , backgroundColor :  '#14111e' , paddingInline : '10%'}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
          03. How It Works
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            {item.work}
            </Typography>
      </div>

      <div style={{ width : '80%' , height : isMobile() ? '650px' : '400px' , backgroundColor :  '#14111e' , paddingInline : '10%'}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
          04. Use Cases
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            {item.use}
            </Typography>
      </div>

      <div style={{ width : '80%' , height : isMobile() ? '650px' : '400px' , backgroundColor :  '#14111e' , paddingInline : '10%'}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
          05. Technologies Used
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            {item.tech}
            </Typography>
      </div>
    
       { item.pic2 == null && item.pic3 == null && item.pic4 == null ? null :
      <Grid2 container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 4, md: 5 }} className='footer' sx={{height : isMobile() ? '1900px' : '1200px'}}>
        {item.pic2 !== null ? <img style={{width : isMobile() ? '90%' : '550px' , height : '550px' , backgroundSize : item.catogery === 'Mobile Development' && 'contain'  }} src={item.pic2} alt='second pic' />  : null}
        {item.pic3 !== null ? <img style={{width : isMobile() ? '90%' :'550px' , height : '550px' , backgroundSize : item.catogery === 'Mobile Development' && 'contain' }} src={item.pic3} alt='Third pic' />  : null}
        {item.pic4 !== null ? <img style={{width : isMobile() ? '90%' : '550px' , height : '550px' , backgroundSize : item.catogery === 'Mobile Development' && 'contain' }} src={item.pic4} alt='fourth pic' />  : null}
        
      </Grid2>

       }
      </>
          )
        })
      }
      
      

      <Footer></Footer>
            
    </div>
  );
}

export default ProjectDetail;