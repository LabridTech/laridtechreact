import {  Avatar, IconButton, Stack } from "@mui/material";
import './App.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import useWindowDimensions from './windowsize'
import { isMobile } from './windowsize';

export function Testmonial(){
  let { height, width } = useWindowDimensions();
  let k = 2 ;
  if (isMobile()) {
       k = 25 ;
     } 
    return(
        <div className="testmonial-section"  style={{ height :  50 + width * k/10 , flexDirection :'column' }} >
            <div style={{
                justifyContent : 'flex-end' ,
                display : 'flex' ,
                width : '90%' ,
                
            }}>
                <IconButton sx={{ color : '#FFA800'  , 
                padding : 2 ,
                margin : 1,
                border : 1 ,
                borderRadius : '10px' ,
                borderColor : '#FFA800'}}>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>
                <IconButton sx={{color : '#FFA800' ,
                 padding : 2 ,
                margin : 1,
                border : 1 ,
                borderRadius : '10px' ,
                borderColor : '#FFA800'}}>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </IconButton>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                justifyContent : 'center'
              }}>
            <Card sx={{ maxWidth: 345 , backgroundColor : 'transparent' , border : 1 , borderColor : '#A1AEBF'  , padding : 2 , }}>
                
                <CardContent sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'flex-start' , paddingBlock : 1 , paddingInline : 0}}>
                   <div style={{marginBottom : 2 , display : 'flex'}}>
                    <Avatar ></Avatar>
                    <Stack sx={{ marginLeft : 1}}>
                    <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 0 , }}>
                       Branding
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0 , textAlign : 'start' }}>
                      Second
                    </Typography>
                   </Stack>
                   
                   </div> 
                  
                 <Typography variant="body1" sx={{ color: '#fff' , margin : 0 , textAlign : 'start' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                     species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
      
                </Card>


                <Card sx={{ maxWidth: 345 , backgroundColor : 'transparent' , border : 1 , borderColor : '#A1AEBF'  , padding : 2 , }}>
                
                <CardContent sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'flex-start' , paddingBlock : 1 , paddingInline : 0}}>
                   <div style={{marginBottom : 2 , display : 'flex'}}>
                    <Avatar ></Avatar>
                    <Stack sx={{ marginLeft : 1}}>
                    <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 0}}>
                       Branding
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0 , textAlign : 'start' }}>
                      Second
                    </Typography>
                   </Stack>
                   
                   </div> 
                  
                 <Typography variant="body1" sx={{ color: '#fff' , margin : 0 , textAlign : 'start' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                     species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
      
                </Card>

                <Card sx={{ maxWidth: 345 , backgroundColor : 'transparent' , border : 1 , borderColor : '#A1AEBF'  , padding : 2 , }}>
                
                <CardContent sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'flex-start' , paddingBlock : 1 , paddingInline : 0}}>
                   <div style={{marginBottom : 2 , display : 'flex'}}>
                    <Avatar ></Avatar>
                    <Stack sx={{ marginLeft : 1}}>
                    <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 0}}>
                       Branding
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0 , textAlign : 'start' }}>
                      Second
                    </Typography>
                   </Stack>
                   
                   </div> 
                  
                 <Typography variant="body1" sx={{ color: '#fff' , margin : 0 , textAlign : 'start' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                     species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
      
                </Card>


                <Card sx={{ maxWidth: 345 , backgroundColor : 'transparent' , border : 1 , borderColor : '#A1AEBF'  , padding : 2 , }}>
                
                <CardContent sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'flex-start' , paddingBlock : 1 , paddingInline : 0}}>
                   <div style={{marginBottom : 2 , display : 'flex'}}>
                    <Avatar ></Avatar>
                    <Stack sx={{ marginLeft : 1}}>
                    <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 0}}>
                       Branding
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0 , textAlign : 'start' }}>
                      Second
                    </Typography>
                   </Stack>
                   
                   </div> 
                  
                 <Typography variant="body1" sx={{ color: '#fff' , margin : 0 , textAlign : 'start' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                     species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
      
                </Card>

                
            </Grid>
        </div>
    )
}