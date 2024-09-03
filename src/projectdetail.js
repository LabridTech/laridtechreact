import './App.css';
import { Footer } from './footer';
import { Navbar } from './nav';
import { Subbanner } from './subbanner';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import rect from './img/rect.png'
import { Grid2 } from '@mui/material';
import {useParams} from 'react-router-dom';
import { productinfo } from './info/product-info';
import { isMobile } from './windowsize';

function ProjectDetail() {
  const { title } =  useParams();
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Resourse' , 'Contact us']}></Navbar>
      <Subbanner item={{pagetitle : 'About us' , title : 'LabridTech' , button : 'Contact'}} ></Subbanner>

      {
        productinfo.filter((item) => item.title === title ? item : null ).map((item) =>{
          return(
        <>
          <div style={{ padding :  '10%' ,backgroundColor : '#000' }}>
        <div style={{   width : '100%' , background : `url(${item.pic1})` , height : '1000px' , backgroundRepeat : 'no-repeat' , backgroundPosition : 'center' , display : 'grid'  , placeItems : 'center' , borderColor : "#A1AEBF", border: 1 , borderRadius : "10px", backgroundSize : item.catogery === 'Mobile Development' ? 'contain' : 'cover'}}> 
            
             
            
           
        </div>
        
        </div>  

      <div style={{ width : '80%' , height : '400px' , backgroundColor : 'rgb(17, 15, 15)' , paddingInline : '10%' , paddingTop : "100px"}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
            01. The Challenge
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            {item.challenge}  
            </Typography>
      </div>

      <div style={{ width : '80%' , height : '400px' , backgroundColor :  'rgb(17, 15, 15)' , paddingInline : '10%'}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
          02. The Solution 
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
             {item.solution}  
            </Typography>
      </div>

      <div style={{ width : '80%' , height : '400px' , backgroundColor :  'rgb(17, 15, 15)' , paddingInline : '10%'}}>
          <Typography variant="h4" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
          03. The Result
            </Typography>
            <Typography variant="subtitle1" sx={{color : '#ffffff82' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
            {item.result}
            </Typography>
      </div>
      {console.log(item.pic2)}
       { item.pic2 == null && item.pic3 == null && item.pic4 == null ? null :
      <Grid2 container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 4, md: 5 }} className='footer' sx={{height : isMobile() ? '1900px' : '1000px'}}>
        {item.pic2 !== null ? <img style={{width : isMobile() ? '90%' : '550px' , height : '550px' , backgroundSize : item.catogery === 'Mobile Development' && 'contain' }} src={item.pic2} alt='second pic' />  : null}
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