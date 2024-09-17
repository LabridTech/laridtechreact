import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useWindowDimensions from '../windowsize'
import { isMobile } from '../windowsize';
import back from '../img/back3.mp4'
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';



export function Banner2(){
  let { height, windowwidth } = useWindowDimensions();
  return(
    <Card component="div" sx={{ width: windowwidth , flexGrow: 1  , height : 600 , border : 0 , marginBottom : 10}}>
        <CardCover sx={{ height : 700 , border : 0 }}> 
          <video
            autoPlay
            loop
            muted
           
          >
            <source
              src={back}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ border : 0 , justifyContent : 'center' , alignContent : 'center' , alignItems : 'center'}}>
        <div >
             <Typography variant="h3" sx={{color : '#FFFFFF'}} gutterBottom>
                 Transforming Ideas into Innovative Solutions
                 Where Vision Meets Technology
             </Typography>
             <Typography variant="subtitle1" sx={{color : '#ffffffd9' , textAlign : 'center'}} gutterBottom>
               Welcome to Labrid Tech, 
               where we craft digital excellence for a smarter tomorrow
             </Typography>
             <div style={{
                alignItems : 'center',
                alignContent : 'center' ,
                justifyItems : 'center' , 
                display : 'flex' ,
                flexWrap : 'wrap' ,
                justifyContent : 'center'
             }}>
                <TextField placeholder="Please enter text" label="Email"  sx={{
        // Root class for the input field
        "& .MuiOutlinedInput-root": {
          color: "#ffffff82",
          fontFamily: "Arial",
          fontWeight: "bold",
          // Class for the border around the input field
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2e2e2e",
            borderWidth: "2px",
            borderRadius : "20px"
          },
        },
        // Class for the label of the input field
        "& .MuiInputLabel-outlined": {
          color: "#ffffff82",
          fontWeight: "bold",
        },
      }} />
                <Button variant="contained" sx={{ marginInline : 2 , backgroundColor : '#FFA800' , color : '#000' , fontWeight : 'bold'  , fontSize : '12px' ,  borderRadius : '30px' , paddingInline : 2 , marginTop : 2 }}>Attract</Button>
             </div>
            </div>
           
        
        </CardContent>
      </Card>
  )
}


export function Banner(){
  let { height, width } = useWindowDimensions();
     let k = 3 ;
     if (isMobile()) {
      k = 20 ;
    } 
    
    return(
       
        <div style={{ textAlign : 'center' , paddingInline : isMobile() && '0.5%' ,background : `url(${back})` , width : '100%' , backgroundColor : '#110F0F' , height : 100 + width * k/10 , backgroundAttachment: 'fixed' , backgroundRepeat : 'no-repeat' , backgroundPosition : 'center' , display : 'grid' , backgroundSize  : isMobile() ? 'fill' :  'cover' , placeItems : 'center' }}> 
         
            <div>
             <Typography variant="h3" sx={{color : '#FFFFFF'}} gutterBottom>
                 Transforming Ideas into Innovative Solutions
                 Where Vision Meets Technology
             </Typography>
             <Typography variant="subtitle1" sx={{color : '#ffffffd9'}} gutterBottom>
               Welcome to Labrid Tech, 
               where we craft digital excellence for a smarter tomorrow
             </Typography>
             <div style={{
                alignItems : 'center',
                alignContent : 'center' ,
                justifyItems : 'center' , 
                display : 'flex' ,
                flexWrap : 'wrap' ,
                justifyContent : 'center'
             }}>
                <TextField placeholder="Please enter text" label="Email"  sx={{
        // Root class for the input field
        "& .MuiOutlinedInput-root": {
          color: "#ffffff82",
          fontFamily: "Arial",
          fontWeight: "bold",
          // Class for the border around the input field
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2e2e2e",
            borderWidth: "2px",
            borderRadius : "20px"
          },
        },
        // Class for the label of the input field
        "& .MuiInputLabel-outlined": {
          color: "#ffffff82",
          fontWeight: "bold",
        },
      }} />
                <Button variant="contained" sx={{ marginInline : 2 , backgroundColor : '#FFA800' , color : '#000' , fontWeight : 'bold'  , fontSize : '12px' ,  borderRadius : '30px' , paddingInline : 2 }}>Attract</Button>
             </div>
            </div>
           
        </div>
    )
}