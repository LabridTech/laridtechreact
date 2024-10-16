import { Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import user from "../img/ic-glass-users.svg";
import buy from "../img/ic-glass-buy.svg";
import time from "../img/time.png";
import back from '../img/background.png'
import backver from '../img/backgroundv.png'
import { isMobile } from '../windowsize';

export function Stats() {
  return (
    <Grid2
      container
      spacing={3}
      component="div"
      sx={{
        alignItems: "center",
        justifyContent: "space-evenly",
        height: isMobile() ? 600 : 400,
        marginBlock: 10,
        imageRendering : '-webkit-optimize-contrast',
        width : '100%' ,
        backgroundImage : isMobile() ? `url(${backver})` : `url(${back})`,
        backgroundSize :  isMobile() ?  'fill' :  'cover' ,
        backgroundRepeat : 'no-repeat',
        backgroundAttachment :  'fixed'
      }}
    >
      <Grid2
        xs={12}
        sm={6}
        md={3}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 10,
          backgroundColor: "#221b39",
          padding: 5,
        }}
      >
        <img
          alt="icon"
          src={buy}
          style={{
            borderRadius: 30,
            backgroundColor: "#4e3e83",
            padding: 15,
            
          }}
        />
        <Typography variant="h5" style={{ color: "#676668", padding: 1 }}>
          47
        </Typography>
        <Typography variant="subtitle1" color="white" sx>
          Completed <br/> Projects
        </Typography>
      </Grid2>

      <Grid2
        xs={12}
        sm={6}
        md={3}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 10,
          backgroundColor: "#221b39",
          padding: 5,
        }}
      >
        <img
          alt="icon"
          src={user}
          style={{
            borderRadius: 30,
            backgroundColor: "#4e3e83",
            padding: 15,
          }}
        />
        <Typography variant="h5" style={{ color: "#676668", padding: 1 }}>
          43
        </Typography>
        <Typography variant="subtitle1" color="white">
          Happy <br/> client
        </Typography>
      </Grid2>

      <Grid2
        xs={12}
        sm={6}
        md={3}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 10,
          backgroundColor: "#221b39",
          padding: 5,
        }}
      >
        <img
          alt="icon"
          src={time}
          style={{
            borderRadius: 30,
            backgroundColor: "#4e3e83",
            padding: 15,
            
          }}
        />
        <Typography variant="h5" style={{ color: "#676668", padding: 1 }}>
          550
        </Typography>
        <Typography variant="subtitle1" color="white">
          Hour of <br/> Work
        </Typography>
      </Grid2>
    </Grid2>
  );
}
