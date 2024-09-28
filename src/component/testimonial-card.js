import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {  Avatar, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';

export function TestmonialCard ({item}){
    return (
        <Card sx={{ maxWidth: 345 , backgroundColor : 'transparent' , border : 1 , borderColor : '#A1AEBF'  , padding : 2 , }}>
                
                {console.log(item)}
                <CardContent sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'flex-start' , paddingBlock : 1 , paddingInline : 0}}>
                   <div style={{marginBottom : 2 , display : 'flex'}}>
                    <Avatar src={item.img} ></Avatar>
                    <Stack sx={{ marginLeft : 1}}>
                    <Typography gutterBottom variant="body1"  sx={{color : '#fff' , marginBottom : 0 , }}>
                       {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff82' , margin : 0 , textAlign : 'start' }}>
                       {item.second}
                    </Typography>
                   </Stack>
                   
                   </div> 
                  
                 <Typography variant="body1" sx={{ color: '#fff' , margin : 0 , textAlign : 'start' }}>
                      {item.text}
                </Typography>
                </CardContent>
      
                </Card>
    )
}