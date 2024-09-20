import {   IconButton,} from "@mui/material";
import '../style/App.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid2';
import { isMobile } from '../windowsize';
import { TestmonialCard } from "../component/testimonial-card";
import { testmonialinfo } from "../info/testimonial-info";
import * as React from 'react';



export function Testmonial(){
  const [showindex, setshowindex] = React.useState(1);
  const handleplusshow = ()=>{
    if(isMobile()){
      if(showindex  < testmonialinfo.length){
        setshowindex(showindex + 1);
      }
    }
    else{
      if(showindex + 2 < testmonialinfo.length){
        setshowindex(showindex + 1);
      }
    }
    
    console.log(showindex)
  }
  const handleminusshow = ()=>{
    if(showindex  > 1){
      setshowindex(showindex - 1);
    }
    console.log(showindex)
  }
 
    return(
        <div className="testmonial-section"  style={{ height :  '450px' , flexDirection :'column' }} >
          
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                justifyContent : 'center',
                
              }}>
                
               {
                isMobile() ?   
                testmonialinfo.filter((value) => value.index === showindex  ? value : null).map( (value) => <TestmonialCard item={value} ></TestmonialCard> )  :
                testmonialinfo.filter((value) => value.index === showindex || value.index === showindex +1 || value.index === showindex + 2 ? value : null).map( (value) => <TestmonialCard item={value} ></TestmonialCard> )
               }
                
                
            </Grid>

            <div style={{
                justifyContent : 'center' ,
                display : 'flex' ,
                width : '90%' ,
                
            }}>
                <IconButton 
                onClick={handleminusshow}
                sx={{ color : '#FFA800'  , 
                padding : 2 ,
                margin : 1,
                border : 1 ,
                borderRadius : '10px' ,
                borderColor : '#FFA800'}}
            
                >
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>
                <IconButton 
                onClick={handleplusshow}
                sx={{color : '#FFA800' ,
                 padding : 2 ,
                margin : 1,
                border : 1 ,
                borderRadius : '10px' ,
                borderColor : '#FFA800'}}>
                    <ArrowForwardIosIcon ></ArrowForwardIosIcon>
                </IconButton>
            </div>
        </div>
    )
}