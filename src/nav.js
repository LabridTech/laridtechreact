import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { isMobile } from './windowsize';
import TemporaryDrawer from './drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { catogery } from './info/catogery-info';

function Menuitem({item , open , anchorEl , handleClose}){
 

  return (
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        disableScrollLock={ true }
      >
        {item.map((value) => <MenuItem onClick={handleClose}>{value}</MenuItem> )}
        
        
      </Menu>
  )
}


export function Navbar({navItems}){
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [catEl, setCatEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event , item) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [cat1El, setCat1El] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick2 = (event , item) => {
    setCat1El(event.currentTarget);
  };
  const handleClose2 = () => {
    setCat1El(null);
  };

 const open1 = Boolean(catEl);
  const handleClick1 = (event , item) => {
     setCatEl(event.currentTarget);
  };
  const handleClose1 = () => {
     setCatEl(null);
  };
  
  
  
    return(
        <div component="nav" className="nav" minheight='64' >
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => navigate('/')}
            sx={{ mr: 2 }}
          >
            <img alt='logo' src='/logo.png' style={{marginRight : 2}}/>
            
            <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow : 1  , color : 'white' }}
          >
            LABRIDTEACH
          </Typography>
          </IconButton>
          
          {isMobile() ? <>
             <IconButton onClick={handleClick} > <MenuIcon sx={{color : '#fff' , height : 50  ,width : 50}}    /> </IconButton> <Menuitem open={open} anchorEl={anchorEl}  handleClose ={handleClose} item={['About us' , 'Service' , 'Resourse' , 'Contact us']} /> </> :  
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              item === 'Contact us' ?  <Button key={item} sx={{ color: '#FFA800'  ,  borderRadius : '20px' , borderColor : '#FFA800'  , border : 1 , margin : 2}} onClick={() => navigate('/quote')} >
              {item}
            </Button> : item === 'About us' ?   
            <Button key={item} sx={{ color: '#fff' }} onClick={() => navigate('/about')} >
            {item}
            </Button>
            :
            <> 
              <Button key={item} sx={{ color: '#fff' }} onClick={ item === 'Service' ?  handleClick1 : handleClick2 } >
                {item}
                
              </Button>
              {<Menuitem open={open1} anchorEl={catEl}  handleClose ={handleClose1} item={ catogery  } />  }
              {<Menuitem open={open2} anchorEl={cat1El}  handleClose ={handleClose2} item={  ['Testominal' , 'Blog' , 'Faq' ] } />  } 
              </> 
            
            ))}
          </Box>
           }
      
      </div>
    )
}