import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Brandlogo from './img/Brandlogo.png';
import './App.css';
import { Servicecard } from './component/service-card';
import {serviceinfo} from './info/service-info'
import useWindowDimensions from './windowsize'
import { isMobile } from './windowsize';


export function Mainservice(){
     let { height, width } = useWindowDimensions();
     let k = 3 ;
     if (isMobile()) {
          k = 53 ;
        } 
    
    
    return (
        <div className='main-service' style={{ height :  200 + width * k/10 , flexDirection : isMobile() ? 'row' : 'column' , textAlign : isMobile() && 'center' , }}>
              <Typography variant="h3" sx={{color : '#FFFFFF' , marginBlock : 2}} gutterBottom>
                We Offer
             </Typography>
             <Typography variant="subtitle1" sx={{color : '#ffffff82' ,  marginBlock : 2}} gutterBottom>
             Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. 
             </Typography>
             <div>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                justifyContent : 'center'
              }}>
               
                {
                    serviceinfo.map(element => 
                         <Servicecard item={{logo : element.logo  , title : element.title  , text : element.description }}></Servicecard>
                    )
                }
              
              

          

                </Grid>
             </div>
        </div>
    )
}