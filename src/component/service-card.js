import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export function Servicecard({item}){
    return(
        <Link underline='none' to={`/niche/${item.title} ` } style={{textDecoration : 'none'}} >
        <Card sx={{ maxWidth: 345 , backgroundColor : 'transparent' , border : 1 , borderColor : '#A1AEBF'  , padding : 2 , }}  >
                <CardMedia
                    sx={{ height: 48 , width : 48 }}
                    image={item.logo}
                    title="green iguana"
                 />
                <CardContent sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'flex-start' , paddingBlock : 1 , paddingInline : 0}}>
                  <Typography gutterBottom variant="h5" component="div" sx={{color : '#fff'}}>
                        {item.title}
                 </Typography>
                 <Typography variant="body2" sx={{ color: '#fff' , margin : 0 , textAlign : 'start' }}>
                        {item.text}
                </Typography>
                </CardContent>
      
                </Card>
                </Link>      
    )
}