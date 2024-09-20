import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { isMobile } from '../windowsize';
import Vector from '../img/backgroundimg.jpg'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import back from '../img/back3cut.mp4'
import back2 from '../img/back4cut.mp4'
import useWindowDimensions from '../windowsize';
import { useNavigate } from "react-router-dom";
import webposter from '../img/webposter.png';
import mobileposter from '../img/mobileposter.png';

export function Subbanner({item}){
  let { height, windowwidth } = useWindowDimensions();
  const navigate = useNavigate();

  return(
    <Card component="div" sx={{ width: windowwidth , flexGrow: 1  , height : 600 , border : 0 , marginBottom : 10}}>
    <CardCover sx={{ height : 700 , border : 0  , width : windowwidth}}> 
      <video
        autoPlay
        loop
        muted
        playsinline
        style={{width : windowwidth , }}
        poster= {isMobile() ? mobileposter : webposter}
      >
        {isMobile() ?  
        <source
        src={back2}
        type="video/mp4"
        
      /> :
      <source
          src={back}
          type="video/mp4"
          width={windowwidth}
        /> }
       
      </video>
    </CardCover>
    <CardContent sx={{ border : 0 , justifyContent : 'center' , alignContent : 'center' , alignItems : 'start' , marginLeft : '5%'}}>
      
           {
              item.pagetitle !== ' ' ? <Typography variant="h5" sx={{color : '#FFA800' , marginBottom : 2}} gutterBottom>
                 {item.pagetitle }
              </Typography> : null
             }
             {
              item.title !== ' ' ?    <Typography variant="h3" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
               {item.title}
              </Typography> : null
             }
             
             {
              item.text !== null ? <Typography variant="subtitle1" sx={{color : '#ffffffd9' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
                 {item.text}
              </Typography> :  null
             }
             
              {
                item.button !== null ?  <Button onClick={()=>navigate('/quote')} variant="contained" sx={{  backgroundColor : '#FFA800' , color : '#000' , fontWeight : 'bold'  , fontSize : '12px' ,  borderRadius : '30px' , paddingInline : 2 }}> {item.button} </Button> : <span></span>
              }

    </CardContent>
      </Card>
  )
}

export function Subbanner2({item}){
    return(
        
        <div style={{ background : `url(${Vector})` , backgroundAttachment: 'fixed' , paddingInline : '10%' ,  width : '80%' , backgroundColor : '#110F0F' , height : isMobile() ? '500px' : '400px' , backgroundRepeat : 'no-repeat' , backgroundPosition : 'center' , display : 'grid' , backgroundSize  : isMobile() ? 'fill' :  'cover' , placeItems : 'start' , alignItems : 'flex-start' , alignContent : 'center' }}> 
             {
              item.pagetitle !== ' ' ? <Typography variant="h5" sx={{color : '#FFA800' , marginBottom : 2}} gutterBottom>
                 {item.pagetitle }
              </Typography> : null
             }
             {
              item.title !== ' ' ?    <Typography variant="h3" sx={{color : '#FFFFFF' , marginBottom : 2}} gutterBottom>
               {item.title}
              </Typography> : null
             }
             
             {
              item.text !== null ? <Typography variant="subtitle1" sx={{color : '#ffffffd9' , textAlign : 'start' , marginBottom : 2}} gutterBottom>
                 {item.text}
              </Typography> :  null
             }
             
              {
                item.button !== null ?  <Button variant="contained" sx={{  backgroundColor : '#FFA800' , color : '#000' , fontWeight : 'bold'  , fontSize : '12px' ,  borderRadius : '30px' , paddingInline : 2 }}> {item.button} </Button> : <span></span>
              }
                
             
            
           
        </div>
    )
}