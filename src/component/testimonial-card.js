import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function TestmonialCard({ item, flag }) {
  return (
    <Card
      className={`!isolate !aspect-video !backdrop-opacity-20 !rounded-3xl !bg-black/5 !shadow-2xl !ring-2 !backdrop-blur-md !ring-white/5 w-96 h-72 p-5  ${
        flag === 1
          ? "skew-y-12 opacity-25 scale-75 translate-y-6 translate-x-4"
          : flag === 2
          ? "-skew-y-12 opacity-25 scale-75 -translate-x-4"
          : "translate-y-12 hover:border-indigo-950 hover:border-2 "
      }`}
    >
      <CardContent
        style={{ padding: 1 }}
        className="flex flex-col items-center text-center space-y-4"
      >
        <Rating
          name="read-only"
          value={4}
          readOnly
          style={{ color: "black" }}
        />
        <Typography
          variant="body1"
          className="!text-slate-900 !font-semibold !font-sans"
        >
          {item.text}
        </Typography>
        <Box style={{ marginBottom: 2, display: "flex" }}>
          <Avatar src={item.img}></Avatar>
          <Stack sx={{ marginLeft: 1 }}>
            <Typography
              gutterBottom
              variant="body1"
              className="!text-slate-900 !font-semibold !font-sans"
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              className="!text-slate-900 !font-light !font-sans"
            >
              {item.second}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
