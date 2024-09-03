import './App.css'
import { Grid2 , Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useWindowDimensions from './windowsize'
import { isMobile } from './windowsize';

export function Footer(){
  let { height, width } = useWindowDimensions();
  let k = 2 ;
  if (isMobile()) {
       k = 11 ;
     } 
 
    return (
    <Grid2 container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 4, md: 5 }} className='footer' sx={{ height : 50 + width * k/10}}>
         <Stack sx={{ marginLeft : 1 ,alignItems : 'flex-start' ,}}>
            <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 2 , }}>
              Company
            </Typography>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> About us </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Contact us </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Schedule Meeting </a>
                    
          </Stack> 

          <Stack sx={{ marginLeft : 1 , alignItems : 'flex-start'}}>
            <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 2 , }}>
              Service
            </Typography>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Branding </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Web development </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Digital marketing </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Mobile app </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> SEO </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> User testing </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Graphic Designing </a>
                    
          </Stack> 

          <Stack sx={{ marginLeft : 1 , alignItems : 'flex-start'}}>
            <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 2 , }}>
              Resourse
            </Typography>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Blogs </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Case Study </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Testimonials </a>
        
                    
          </Stack> 

          <Stack sx={{ marginLeft : 1 , alignItems : 'flex-start'}}>
            <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 2 , }}>
              Follow us
            </Typography>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Instagram </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Linkdin </a>
            <a href=' ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Facebook </a>
        
                    
          </Stack> 
        

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            
            sx={{ mr: 2 }}
          >
            <img alt='logo' src='/logo.png'/>
            
            <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow : 1  , color : 'white' }}
          >
            LABRIDTEACH
          </Typography>
          </IconButton>


    </Grid2>
    )
}