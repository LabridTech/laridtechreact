import "../style/App.css";
import { Grid2, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { catogery } from "../info/catogery-info";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Grid2
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 2, sm: 4, md: 5 }}
      className="md:justify-evenly space-x-10 bg-black/40 rounded-t-3xl py-12 px-5 md:px-20"
    >
      <Stack sx={{ marginLeft: 1, alignItems: "flex-start" }}>
        <Typography
          gutterBottom
          variant="body1"
          className="!text-slate-900 !font-semibold !font-sans"
        >
          Company
        </Typography>
        <a
          href="/about"
          className="!text-slate-900 !font-light !font-sans"
        >
          
          About us
        </a>
        <a
          href="/quote "
         className="!text-slate-900 !font-light !font-sans"
        >
          
          Schedule Meeting
        </a>
      </Stack>

      <Stack sx={{ marginLeft: 1, alignItems: "flex-start" }}>
        <Typography
          gutterBottom
          variant="body1"
          className="!text-slate-900 !font-semibold !font-sans"
        >
          Service
        </Typography>
        {catogery.map((value) => (
          <a
            href={`/niche/${value}`}
            className="!text-slate-900 !font-light !font-sans"
          >
            
            {value}
          </a>
        ))}
      </Stack>

      <Stack sx={{ marginLeft: 1, alignItems: "flex-start" }}>
        <Typography
          gutterBottom
          variant="body1"
          className="!text-slate-900 !font-semibold !font-sans"
        >
          Resourse
        </Typography>
        <a
          href="/comingsoon"
         className="!text-slate-900 !font-light !font-sans"
        >
          
          Blogs
        </a>
        <a
          href="/project"
         className="!text-slate-900 !font-light !font-sans"
        >
          
          Case Study
        </a>
        <a
          href="/comingsoon"
         className="!text-slate-900 !font-light !font-sans"
        >
          
          Testimonials
        </a>
      </Stack>

      <Stack sx={{ marginLeft: 1, alignItems: "flex-start" }}>
        <Typography
          gutterBottom
          variant="body1"
          className="!text-slate-900 !font-semibold !font-sans"
        >
          Follow us
        </Typography>
        <a
          href="https://www.instagram.com/labridtech?igsh=MWJybXZ4YTFuaW02ag%3D%3D&utm_source=qr"
         className="!text-slate-900 !font-light !font-sans"
        >
          
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/company/100905377/admin/dashboard/"
         className="!text-slate-900 !font-light !font-sans"
        >
          
          Linkdin
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61552150005718"
         className="!text-slate-900 !font-light !font-sans"
        >
          
          Facebook
        </a>
      </Stack>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => {
          navigate("/");
        }}
        sx={{ mr: 2 }}
      >
        <img alt="logo" src="/logo.png" style={{ marginRight: 5 }} />

        <Typography
          variant="h6"
          component="div"
          className="!text-slate-900 !font-semibold !font-sans"
        >
          LABRIDTECH
        </Typography>
      </IconButton>
    </Grid2>
  );
}
