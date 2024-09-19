import '../style/App.css';
import { Footer } from '../section/footer';
import { Navbar } from '../section/nav';
import { Subbanner } from '../section/subbanner';
import Button from '@mui/material/Button';
import { Grid2,  } from '@mui/material';
import TextField from '@mui/material/TextField';
import { isMobile } from '../windowsize';
import * as React from 'react';


function Quote() {

  const [valueTextField, SetTextField] = React.useState();

    const rest = () => {
        SetTextField('');
    }
  
   return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Case Study' , 'Contact us']}></Navbar>
      <Subbanner item={{pagetitle : 'Schedule Meeting' , title : 'Quote' , button : null }} ></Subbanner>

      <Grid2 method="POST" action="https://formsubmit.co/labridtech@gmail.com" component="form" container spacing={{ xs: 1, sm : 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 1 }} style={{ width : '90%' , marginInline : '5%'  , backgroundColor :  '#14111e' ,  paddingBlock : '10%' , display : 'flex' , justifyContent : 'Center' ,  }}>
        
        <TextField id="filled-basic" required  label="Full Name" variant="filled" fullWidth  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" required label="Email" variant="filled" fullWidth sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" required  label="Phone Number" variant="filled" fullWidth  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" required  label="Country" variant="filled" fullWidth  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" required  label="Project" variant="filled" fullWidth sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" required  InputLabelProps={{ shrink: true }} label="Date" value={valueTextField} type='date'  variant="filled" fullWidth  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" required  label="Project Description" variant="filled" fullWidth sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <Button type='Submit' variant="contained" sx={{  backgroundColor : '#FFA800' , color : '#000' , fontWeight : 'bold'  , fontSize : '12px' ,  borderRadius : '30px' , marginInline : isMobile() ? '20%' :'40%', paddingInline: !isMobile() ? 10 : 4 , paddingBlock :  1 }}> Send US </Button>
        
      </Grid2>
      

      <Footer></Footer>
            
    </div>
  );
}

export default Quote;