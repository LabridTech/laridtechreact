import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Servicecard({ item }) {
  return (
    <Link
      underline="none"
      to={`/niche/${item.title} `}
      style={{ textDecoration: "none" }}
    >
      <Card className="!bg-black/5 w-80 p-5 !shadow-xl !ring-2 !backdrop-blur-md !ring-white/5 !rounded-3xl hover:border-indigo-950 hover:border-x-2 hover:border-t-2 hover:border-b-4">
        <CardMedia
          className="w-10 h-10 !fill-blue-100 "
          image={item.logo}
          title="green iguana"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingBlock: 1,
            paddingInline: 0,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="!text-slate-900 !font-semibold !font-sans"
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            className="!text-slate-900 !font-semibold !font-sans hover:!text-indigo-950"
          >
            {item.text}
          </Typography>
        </CardContent>
        <ArrowRightAltIcon></ArrowRightAltIcon>
      </Card>
    </Link>
  );
}
