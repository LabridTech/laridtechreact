import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { useNavigate } from "react-router-dom";

import { Avatar, Box } from "@mui/material";

import ban3 from '../img/ban3.jpeg';


export default function Banner2() {
  const navigate = useNavigate();

  return (
    <Card component="div" style={{border : '0px'  , clipPath: 'inset(0)'}} className="flex  h-lvh !rounded-none">
      <CardCover className="!rounded-none">
        <img className="!rounded-none brightness-75  animate-ping2 hue-rotate-30 "   alt="Banner" src={ban3}></img>
        {/* <video
          autoPlay
          loop
          muted
          playsinline
          poster={isMobile() ? mobileposter : webposter}
        >
          {isMobile() ? (
            <source src={back2} type="video/mp4" />
          ) : (
            <source src={back} type="video/mp4" />
          )}
        </video> */}
      </CardCover>
      <CardContent className="flex flex-col items-center  justify-center">
        <Box>
          <Typography
            variant="h3"
            sx={{ color: "#FFFFFF", textAlign: "center" }}
            gutterBottom
            className="animate-slidein500   "
          >
            Transforming Ideas into Innovative Solutions Where Vision Meets
            Technology

          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#ffffffd9", textAlign: "center" }}
            gutterBottom
             className="animate-slidein700 opacity-0"
          >
            Welcome to Labrid Tech, where we craft digital excellence for a
            smarter tomorrow
          </Typography>
          <Box className="flex items-center space-x-4 justify-center ">
            <Button
              className="!rounded-3xl bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300 "
              onClick={() => navigate("/quote/1")}
              variant="contained"
            >
              <Avatar className="mx-2 !bg-black !text-xs"> You </Avatar> Book a
              call
            </Button>

            <Button
              className="!text-white !rounded-3xl !border-2"
              onClick={() => navigate("/about")}
              variant="outlined"
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export function Banner() {
 

  return (
    <div
      
    >
      <div>
        <Typography variant="h3" sx={{ color: "#FFFFFF" }} gutterBottom>
          Transforming Ideas into Innovative Solutions Where Vision Meets
          Technology
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#ffffffd9" }}
          gutterBottom
        >
          Welcome to Labrid Tech, where we craft digital excellence for a
          smarter tomorrow
        </Typography>
        <div
          style={{
            alignItems: "center",
            alignContent: "center",
            justifyItems: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            placeholder="Please enter text"
            label="Email"
            sx={{
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                color: "#ffffff82",
                fontFamily: "Arial",
                fontWeight: "bold",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2e2e2e",
                  borderWidth: "2px",
                  borderRadius: "20px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "#ffffff82",
                fontWeight: "bold",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              marginInline: 2,
              backgroundColor: "#FFA800",
              color: "#000",
              fontWeight: "bold",
              fontSize: "12px",
              borderRadius: "30px",
              paddingInline: 2,
            }}
          >
            Attract
          </Button>
        </div>
      </div>
    </div>
  );
}
