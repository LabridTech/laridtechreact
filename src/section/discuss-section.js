import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function DiscussSection() {
  return (
    <Box className="flex flex-col drop-shadow-2xl items-center  !backdrop-blur-md !bg-black/10 back py-10 rounded-lg mx-4 md:mx-20">
      <Typography variant="h3" className="!w-11/12 text-center" gutterBottom>
        Let’s discuss the idea
      </Typography>

      <Box className="flex items-center space-x-4">
        <TextField
          placeholder="Please enter text"
          label="Your email"
          sx={{
            background: "#ffffff",
            borderRadius: "20px",
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#00000082",
              fontFamily: "sans-serif",
              fontWeight: "semibold",
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
        />{" "}
        <Button
          variant="contained"
          className="!rounded-3xl !px-4 bg-gradient-to-r from-blue-700 hover:to-blue-700 to-blue-300 "
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

// <TextField
//               placeholder="Please enter text"
//               label="Your email"
//               sx={{
//                 background: "#ffffff",
//                 borderRadius: "20px",
//                 marginBlock: isMobile() ? 3 : 0,
//                 // Root class for the input field
//                 "& .MuiOutlinedInput-root": {
//                   color: "#00000082",
//                   fontFamily: "Arial",
//                   fontWeight: "bold",
//                   // Class for the border around the input field
//                   "& .MuiOutlinedInput-notchedOutline": {
//                     borderColor: "#00000082",
//                     borderWidth: "2px",
//                     borderRadius: "20px",
//                   },
//                 },
//                 // Class for the label of the input field
//                 "& .MuiInputLabel-outlined": {
//                   color: "#000",
//                   fontWeight: "bold",
//                 },
//               }}
//             />
