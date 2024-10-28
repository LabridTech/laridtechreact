import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { isMobile } from "../windowsize";
import { Box } from "@mui/material";

export default function DiscussSection() {
 
  return (
  
      <Box
       className='flex flex-col drop-shadow-2xl !backdrop-blur-md !bg-black/10 back py-10 rounded-lg mx-4 md:mx-20'
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ color: "#000", textAlign: "center" }}
            gutterBottom
          >
            Let’s discuss the idea
          </Typography>

          <Box
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyItems: "center",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              flexDirection: isMobile() ? "column" : "row",
            }}
          >
            <TextField
              placeholder="Please enter text"
              label="Your email"
              sx={{
                background: "#ffffff",
                borderRadius: "20px",
                marginBlock: isMobile() ? 3 : 0,
                // Root class for the input field
                "& .MuiOutlinedInput-root": {
                  color: "#00000082",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00000082",
                    borderWidth: "2px",
                    borderRadius: "20px",
                  },
                },
                // Class for the label of the input field
                "& .MuiInputLabel-outlined": {
                  color: "#000",
                  fontWeight: "bold",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                marginInline: 2,
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "12px",
                borderRadius: "30px",
                paddingBlock: 1,
                paddingInline: 2,
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
      
  );
}
