import './App.css';
import Vector from './img/Vector1.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { isMobile } from './windowsize';
import useWindowDimensions from './windowsize';


export function SectionChoosing(){
     let { height, width } = useWindowDimensions();
     let k = 3;
     if(isMobile()){
          k = 15;
     }
    return(
        <div className="choose-section" style={{ flexDirection : isMobile() ?  'column' : 'row', height : 50 + width * k/10 , justifyContent  : isMobile() ? 'center' : 'space-between' , }}>
           <img alt='vector' src={Vector} style={{ width : isMobile() ? '100%' : '50%'  , height : '400px', display : 'flex'}} />
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
                 <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0  , textAlign : 'start'}}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                     species, ranging across all continents except Antarctica
                </Typography>
                <Button  sx={{ color: '#FFA800'  ,  borderRadius : '20px' , borderColor : '#FFA800'  , border : 1 , marginBlock : 2}}>
                Let’s connect 
                 </Button>
                </div>
           </div>
        
    )
}