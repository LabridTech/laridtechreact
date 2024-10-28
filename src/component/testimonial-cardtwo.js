import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {  Avatar, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function TestmonialCardTwo ({item , flag }){
    return (
        <Card  className={`!bg-sky-800 w-80 h-72 p-5 !rounded-3xl hover:border-indigo-950 hover:border-2 ${flag === 1 ?  'skew-y-12 opacity-25 scale-75 translate-x-4' : flag === 2 ?'-skew-y-12 opacity-25 scale-75 -translate-x-4' : 'translate-y-12 ' }`}>
                
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