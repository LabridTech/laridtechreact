import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import "../style/App.css";
import  Productcard  from "../component/product-card";
import { productinfo } from "../info/product-info";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export default function OurWork() {
  const navigate = useNavigate();

  return (
    <Box
      className="hidden lg:flex flex-col items-center space-y-5"
      component='div'
    >
     
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="!text-slate-900 !font-semibold !font-sans"
        >
          Some pieces of our work
        </Typography>
       
      
    
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className='px-16'
      >
        {productinfo
          .filter((item) => {
            return item.main ? item : null;
          })
          .map((item) => (
            <Productcard
              item={{
                pic: item.pic1,
                catogery: item.catogery,
                title: item.title,
              }}
            ></Productcard>
          ))}
      </Grid>
      <Button
          variant="outlined"
          onClick={() => navigate("/project")}
        >
          Show More
        </Button>
    </Box>
  );
}
