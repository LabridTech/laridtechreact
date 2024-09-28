import Typography from "@mui/material/Typography";
import { isMobile } from "../windowsize";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function PrjdataMobile({ heading , item }) {
  return (

      <div
        style={{
          width: "80%",
          height: "400px" ,
          backgroundColor: "#14111e",
          paddingInline: "10%",
          paddingTop: "100px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#FFFFFF", marginBottom: 2 }}
          gutterBottom
        >
          {heading}
        </Typography>
        {item.map((value) => (
          <Typography
            variant="subtitle2"
            sx={{
              color: "#ffffff82",
              textAlign: "start",
              marginBottom: 2,
              display: "flex",
              alignItems: "center",
            }}
            gutterBottom
          >
            <FiberManualRecordIcon
              style={{ margin: 0, marginRight: 10, marginTop: 5 }}
            />
            {value}
          </Typography>
        ))}
      </div>

      
  
  );
}
