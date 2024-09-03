import './App.css';
import { Footer } from './footer';
import { Navbar } from './nav';
import { Subbanner } from './subbanner';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid2, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';

function Quote() {
  return (
    <div className="App">
      
     
      <Navbar navItems={['About us' , 'Service' , 'Resourse' , 'Contact us']}></Navbar>
      <Subbanner item={{pagetitle : 'Schedule Meeting' , title : 'Quote' , button : null }} ></Subbanner>

      <Grid2 container spacing={{ xs: 0, md: 6 }} columns={{ xs: 1, sm: 1, md: 2 }} style={{ width : '100%' , height : '700px' , backgroundColor :  'rgb(17, 15, 15)' ,  paddingBlock : '10%' , display : 'flex' , justifyContent : 'Center'}}>
        <Stack >
        <TextField id="filled-basic" label="Full Name" variant="filled"  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" label="Country" variant="filled"  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" label="Project" variant="filled"  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" label="Filled" variant="filled"  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        </Stack>

        <Stack>
        <TextField id="filled-basic" label="Phone Number" variant="filled"  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" label="Email" variant="filled"  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        <TextField id="filled-basic" label="Project Description" variant="filled"  sx={{backgroundColor : '#18181c' , borderRadius : 2 , marginBottom : 2 , '& .MuiInputLabel-root ' : {color : '#fff'} }} style={{color : '#fff'}} />
        </Stack>

      </Grid2>
      

      <Footer></Footer>
            
    </div>
  );
}

export default Quote;