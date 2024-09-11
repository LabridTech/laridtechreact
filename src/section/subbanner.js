import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { isMobile } from '../windowsize';
import Vector from '../img/backgroundimg.jpeg'

export function Subbanner({item}){
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