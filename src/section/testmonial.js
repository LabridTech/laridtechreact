import { Box } from "@mui/material";
import "../style/App.css";
import Grid from "@mui/material/Grid2";
import { isMobile } from "../windowsize";
import TestmonialCard from "../component/testimonial-card";
import { testmonialinfo } from "../info/testimonial-info";
import * as React from "react";
import { useSwipeable } from "react-swipeable";

export default function Testmonial() {
  const [showindex, setshowindex] = React.useState(1);
  const handleplusshow = () => {
    if (showindex < testmonialinfo.length) {
      setshowindex(showindex + 1);
    }
  };
  const setindex = (index) => {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();

    setshowindex(index);
  };
  const handleminusshow = () => {
    if (showindex > 1) {
      setshowindex(showindex - 1);
    }
    console.log(showindex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleminusshow,
    onSwipedRight: handleplusshow,
  });

  return (
    <Box
      {...handlers}
      className="flex flex-col !h-full items-center space-y-16"
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className="justify-center"
      >
        {isMobile()
          ? testmonialinfo
              .filter((value) => (value.index === showindex ? value : null))
              .map((value) => <TestmonialCard item={value}></TestmonialCard>)
          : testmonialinfo
              .filter((value) => (value.index === showindex ? value : null))
              .map((value) => {
                return (
                  <>
                    <TestmonialCard
                      key={value.index}
                      flag={1}
                      item={value}
                    ></TestmonialCard>
                    <TestmonialCard
                      key={value.index}
                      item={testmonialinfo[showindex % 4]}
                    ></TestmonialCard>
                    <TestmonialCard
                      key={value.index}
                      flag={2}
                      item={testmonialinfo[(showindex + 1) % 4]}
                    ></TestmonialCard>
                  </>
                );
              })}
      </Grid>

      <Box className="flex justify-center w-1/4 !bg-slate-200 rounded-full space-x-1 p-2">
        {testmonialinfo.map((item, index) => {
          return (
            <span
              onClick={() => {
                setindex(index + 1);
              }}
              class="relative flex h-3 w-3"
            >
              <span class=" absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              {item.index === showindex ? (
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              ) : null}
            </span>
          );
        })}
      </Box>
    </Box>
  );
}

{
  /* <div style={{
                justifyContent : 'center' ,
                display : 'flex' ,
                width : '100%' ,
                
            }}>
                <IconButton 
                onClick={handleminusshow}
                sx={{ color : '#FFA800'  , 
                padding : 2 ,
                margin : 1,
                border : 1 ,
                borderRadius : '10px' ,
                borderColor : '#FFA800'}}
            
                >
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>
                <IconButton 
                onClick={handleplusshow}
                sx={{color : '#FFA800' ,
                 padding : 2 ,
                margin : 1,
                border : 1 ,
                borderRadius : '10px' ,
                borderColor : '#FFA800'}}>
                    <ArrowForwardIosIcon ></ArrowForwardIosIcon>
                </IconButton>
            </div> */
}
