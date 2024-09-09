import '../style/App.css';
import { Footer } from '../section/footer';
import { Navbar } from '../section/nav';
import { Subbanner } from '../section/subbanner';
import Button from '@mui/material/Button';
import { Grid2, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { isMobile } from '../windowsize';


function Quote() {
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Case Study' , 'Contact us']}></Navbar>
      <Subbanner item={{pagetitle : 'Schedule Meeting' , title : 'Quote' , button : null }} ></Subbanner>

      <Grid2 method="POST" action="https://formsubmit.co/labridtech@gmail.com" component="form" container spacing={{ xs: 1, sm : 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 1 }} style={{ width : '90%' , marginInline : '5%'  , backgroundColor :  'rgb(17, 15, 15)' ,  paddingBlock : '10%' , display : 'flex' , justifyContent : 'Center' ,  }}>
        
        <TextField id="filled-basic" helperText="Please enter your name"  label="Full Name" variant="filled" fullWidth  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" helperText="Please enter your email"  label="Email" variant="filled" fullWidth sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" helperText="Please enter your phone number"  label="Phone Number" variant="filled" fullWidth  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" helperText="Please enter your country"  label="Country" variant="filled" fullWidth  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" helperText="Please enter your project name"  label="Project" variant="filled" fullWidth sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" helperText="Please enter your project name"  type='Date' label="Date" variant="filled" fullWidth  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" helperText="Please enter your project description"  label="Project Description" variant="filled" fullWidth sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <Button type='Submit' variant="contained" sx={{  backgroundColor : '#FFA800' , color : '#000' , fontWeight : 'bold'  , fontSize : '12px' ,  borderRadius : '30px' , marginInline : isMobile() ? '20%' :'40%' }}> Send US </Button>
        
      </Grid2>
      

      <Footer></Footer>
            
    </div>
  );
}

export default Quote;