import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Servicecard  from '../component/service-card';
import {serviceinfo} from '../info/service-info'
import { Box } from '@mui/material';


export default function Mainservice(){
    
    
    return (
        <Box className='flex flex-col justify-center items-center  transition-opacity' component='div' >
              <Typography variant="h3" sx={{color : '#0f172a' ,fontFamily : 'sans-serif' , fontWeight : 500 ,  marginBlock : 2}} gutterBottom>
                We Offer
             </Typography>
            
           
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                justifyContent : 'center'
              }}
              className="flex "
              >
               
                {
                    serviceinfo.map(element => 
                         <Servicecard key={element.title} item={{logo : element.logo  , title : element.title  , text : element.description }}></Servicecard>
                    )
                }
              
              

          

                </Grid>
             
        </Box>
    )
}