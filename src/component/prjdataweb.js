import Typography from "@mui/material/Typography";
import { isMobile } from "../windowsize";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function PrjdataWeb({ heading, item }) {
  return (
    <div
      style={{
        width: "80%",
        height:  "300px",
        backgroundColor: "#14111e",
        paddingInline: "10%",
        paddingTop: "100px",
        display :'flex' ,
        flexDirection : 'column',
        alignItems : 'center'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#FFFFFF",
          marginBottom: 2,
          
        }}
        gutterBottom
      >
        {heading}
      </Typography>
      {item.map((value) => (
        <Typography
          variant="subtitle1"
          sx={{
            color: "#ffffff82",
            textAlign: "start",
            marginBottom: 2,
            display: "flex",
            alignItems: "center",
          }}
          gutterBottom
        >
          <FiberManualRecordIcon style={{ margin: 0, marginRight: 10 }} />
          {value}
        </Typography>
      ))}
    </div>
  );
}
