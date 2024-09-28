import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useWindowDimensions from "../windowsize";
import { isMobile } from "../windowsize";

export function DiscussSection() {
  let { height, width } = useWindowDimensions();
  let k = 5;

  if (isMobile()) {
    k = 35;
  }
  return (
    <div style={{ paddingInline: "10%", backgroundColor: "#14111e" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "#FFA800",
          height: isMobile() ? "500px" : "400px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "grid",
          backgroundSize: "cover",
          placeItems: "center",
          borderColor: "#A1AEBF",
          border: 1,
          borderRadius: "10px",
        }}
      >
        <div>
          <Typography
            variant="h3"
            sx={{ color: "#000", textAlign: "center" }}
            gutterBottom
          >
            Let’s discuss the idea
          </Typography>

          <div
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
          </div>
        </div>
      </div>
      <div style={{ justifyContent: "flex-end", display: "flex" }}>
        <Button
          sx={{
            color: "#FFA800",
            borderRadius: "20px",
            borderColor: "#FFA800",
            border: 1,
            margin: 2,
          }}
        >
          Go to top
        </Button>
      </div>
    </div>
  );
}
