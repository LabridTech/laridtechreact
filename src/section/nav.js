import * as React from 'react';
import '../style/App.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { isMobile } from '../windowsize';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { catogery } from '../info/catogery-info';

function Menuitem({item , open , anchorEl , handleClose}){
  const navigate = useNavigate();

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
        {item.map((value) => <MenuItem onClick={() => navigate(`/niche/${value}`)}>{value}</MenuItem> )}
        
        
      </Menu>
  )
}

function Menuitemconst({ open , anchorEl , handleClose , handleClick1 , open1 , catEl , handleClose1}){
  const navigate = useNavigate();

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
       <MenuItem onClick={() => navigate('/about')}>About us</MenuItem> 
       <MenuItem onClick={handleClick1}>Service</MenuItem>
       {<Menuitem open={open1} anchorEl={catEl}  handleClose ={handleClose1} item={ catogery  } />  } 
       <MenuItem onClick={() => navigate('/project')}>Case Study</MenuItem>
       <MenuItem onClick={() => navigate('/quote')}>Contact us</MenuItem>
        
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
            <img alt='logo' src='/logo.png' style={{marginRight : 2, height : isMobile() ? '50px' : '80px' , width : isMobile() ? '50px' : '80px'}}/>
            
            <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow : 1  , color : 'white' }}
          >
            LABRIDTECH
          </Typography>
          </IconButton>
          
          {isMobile() ? <>
             <IconButton onClick={handleClick} > <MenuIcon sx={{color : '#fff' , height : 50  ,width : 50}}    /> </IconButton> <Menuitemconst open={open} anchorEl={anchorEl}  handleClose ={handleClose} handleClick1={handleClick1} handleClose1={handleClose1} open1={open1} catEl={catEl} /> </> :  
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              item === 'Contact us' ?  <Button key={item} sx={{ color: '#FFA800'  ,  borderRadius : '20px' , borderColor : '#FFA800'  , border : 1 , margin : 2}} onClick={() => navigate('/quote')} >
              {item}
            </Button> : item === 'About us' ?   
            <Button key={item} sx={{ color: '#fff' }} onClick={() => navigate('/about')} >
            {item}
            </Button>
            : item === 'Service' ?
            <> 
              <Button key={item} sx={{ color: '#fff' }} onClick={   handleClick1  } >
                {item}
              </Button>
              {<Menuitem open={open1} anchorEl={catEl}  handleClose ={handleClose1} item={ catogery  } />  }
              </>
              :
              <> 
              <Button key={item} sx={{ color: '#fff' }} onClick={ () => navigate('/project') } >
                {item}
                
              </Button>
      
              </>

            
            ))}
          </Box>
           }
      
      </div>
    )
}