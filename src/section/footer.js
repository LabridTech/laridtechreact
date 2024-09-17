import '../style/App.css'
import { Grid2 , Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { isMobile } from '../windowsize';
import { catogery } from '../info/catogery-info';

export function Footer(){
   
    
    return (
    <Grid2 container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 4, md: 5 }} className='footer' sx={{ height : isMobile() ? '650px' : '450px'}}>
         <Stack sx={{ marginLeft : 1 ,alignItems : 'flex-start' ,}}>
            <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 2 , }}>
              Company
            </Typography>
            <a href='/about' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> About us </a>
            <a href='/quote ' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Schedule Meeting </a>
                    
          </Stack> 

          <Stack sx={{ marginLeft : 1 , alignItems : 'flex-start'}}>
            <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 2 , }}>
              Service
            </Typography>
            {catogery.map(value=><a href={`/niche/${value}`} style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> {value} </a>)}
            
          
          </Stack> 

          <Stack sx={{ marginLeft : 1 , alignItems : 'flex-start'}}>
            <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 2 , }}>
              Resourse
            </Typography>
            <a href='/comingsoon' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Blogs </a>
            <a href='/project' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Case Study </a>
            <a href='/comingsoon' style={{color : '#ffffff82' , textDecoration : 'none' , marginBottom : 10 ,}}> Testimonials </a>
        
                    
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