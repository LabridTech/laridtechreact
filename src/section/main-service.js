import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import '../style/App.css';
import { Servicecard } from '../component/service-card';
import {serviceinfo} from '../info/service-info'
import useWindowDimensions from '../windowsize'
import { isMobile } from '../windowsize';


export function Mainservice(){
     let {  width } = useWindowDimensions();
     let k = 2 ;
     if(width <1600){
      k = 3 ;
     }
     if(width <1300){
      k = 5 ;
     }
     if(width < 1100){
      k =7
    }
     if (isMobile()) {
          k = 53 ;
        } 
    
    
    return (
        <div className='main-service' style={{ height : isMobile() ? serviceinfo.length * 280 + 200 :  200 + width * k/5 , flexDirection : isMobile() ? 'row' : 'column' , textAlign : isMobile() && 'center' , flexWrap : isMobile() ? 'wrap' : 'nowrap'   }}>
              <Typography variant="h3" sx={{color : '#FFFFFF' , marginBlock : 2}} gutterBottom>
                We Offer
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