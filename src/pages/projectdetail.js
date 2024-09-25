import '../style/App.css';
import { Footer } from '../section/footer';
import { Navbar } from '../section/nav';
import { Subbanner } from '../section/subbanner';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import {useParams} from 'react-router-dom';
import { productinfo } from '../info/product-info';
import { isMobile } from '../windowsize';
import useWindowDimensions from '../windowsize';


function ProjectDetail() {
  const { title } =  useParams();
  let { height, width } = useWindowDimensions();
  let imgsheight = 0;

  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Case Study' , 'Contact us']}></Navbar>
      <Subbanner item={{pagetitle : 'About us' , title : 'LabridTech' , button : 'Contact'}} ></Subbanner>

      {
        productinfo.filter((item) => item.title === title ? item : null ).map((item) =>{
          return(
        <>
          <div style={{ padding :  '5%' ,backgroundColor : '#14111e' }}>
        <div style={{   width : width * 9/10 , background : `url(${item.pic1})` , height  : isMobile() ? item.catogery ===  'Mobile Development' ? height * 9/10 : height * 2/10 :  height * 13/10  , backgroundRepeat : 'no-repeat' , backgroundPosition : 'center' , display : 'grid'  , placeItems : 'center' , borderColor : "#A1AEBF", border: 1 , borderRadius : "10px",}}> 
            
             
            
           
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
      <Grid2 container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 4, md: 5 }} className='footer' sx={{marginBlock : 10}} >
        {item.pic2 !== null ? <img style={{width : isMobile() ? width * 9/10 :   width * 4/10 , height : item.catogery ===  'Mobile Development' ? height * 9/10 : isMobile() ?  height * 2/10 :   height * 4/10 , marginBlock : 5 ,   }} src={item.pic2} alt='second pic' />  : null}
        {item.pic3 !== null ? <img style={{width : isMobile() ? width * 9/10  : width * 4/10 , height : item.catogery ===  'Mobile Development' ? height * 9/10 : isMobile() ? height * 2/10 :  height * 4/10 , marginBlock : 5 ,  }} src={item.pic3} alt='Third pic' />  : null}
        {item.pic4 !== null ? <img style={{width : isMobile() ? width * 9/10  : width * 4/10 , height : item.catogery ===  'Mobile Development' ? height * 9/10 : isMobile() ? height * 2/10 :  height * 4/10 , marginBlock : 5 ,  }} src={item.pic4} alt='fourth pic' />  : null}
        
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