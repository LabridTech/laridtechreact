import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import { useNavigate } from "react-router-dom";
import "../style/App.css";

export default function Productcard({ item }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/prjdetail/${item.title}`)}
      className="!bg-black/5 w-80 p-5 !rounded-3xl hover:border-indigo-950 !shadow-2xl !ring-2 !backdrop-blur-md !ring-white/5  hover:border-x-2 hover:border-t-2 hover:border-b-4"
    >
      <CardMedia
        sx={{
          height: "250px",
          width: "100%",
          borderRadius: "20px",
          backgroundSize: item.catogery === "Mobile Development" && "contain",
        }}
        image={item.pic}
        title="green iguana"
        className="image-hover"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          paddingBlock: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#1A365D",
            margin: 0,
            textAlign: "start",
            backgroundColor: "#FFA800",
            marginBottom: 2,
            padding: 1,
            borderRadius: 2,
          }}
        >
          {item.catogery}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "#fff", marginBottom: 2 }}
        >
          {item.title}
        </Typography>
        <IconButton sx={{ padding: 0 }}>
          <Typography
            variant="body2"
            sx={{
              color: "#728095",
              margin: 0,
              textAlign: "start",
              marginRight: 1,
            }}
          >
            Read more
          </Typography>
          <ArrowCircleRightSharpIcon
            sx={{ color: "#728095" }}
          ></ArrowCircleRightSharpIcon>
        </IconButton>
      </CardContent>
    </Card>
  );
}
