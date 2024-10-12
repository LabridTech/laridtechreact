import "../style/App.css";
import Vector from "../img/Vector1.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { isMobile } from "../windowsize";
import useWindowDimensions from "../windowsize";
import { useNavigate } from "react-router-dom";
import { Container , Box } from "@mui/material";

export function SectionChoosing() {
  const navigate = useNavigate();
  let {  width } = useWindowDimensions();
  let k = 2;
  if (width < 1600) {
    k = 3;
  }
  if (width < 1100) {
    k = 6;
  }
  if (isMobile()) {
    k = 15;
  }
  return (
    <div
      className="choose-section"
      style={{
        flexDirection: isMobile() ? "column" : "row",
        height: 150 + (width * k) / 7,
        justifyContent: isMobile() ? "center" : "space-between",
      }}
    >
      <Box style={{
            width: isMobile() ? "100%" : "45%",
            height: "400px",
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center'
          }} >
        <img
          alt="vector"
          src={Vector}
          width= '100%'
        />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "#fff" }}
        >
          Why choose us ?
        </Typography>
      </Box>

      <div
        style={{
          marginInline: isMobile() ? "10%" : '5%',
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "wrap",
          width: isMobile() ? "100%" : "45%",
        }}
      >
        <Container style={{ padding: 0, paddingBlock: 5 }}>
          <Typography
            variant="h5"
            sx={{ color: "#fff", margin: 0, textAlign: "start" }}
          >
            Affordable Excellence
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#ffffff82", margin: 0, textAlign: "start" }}
          >
            Top-tier digital solutions without breaking the bank. We offer
            transparent, budget-friendly pricing to fit any business size.
          </Typography>
        </Container>
        <Container style={{ padding: 0, paddingBlock: 5 }}>
          <Typography
            variant="h5"
            sx={{ color: "#fff", margin: 0, textAlign: "start" }}
          >
            Startup Specialists
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#ffffff82", margin: 0, textAlign: "start" }}
          >
            From web development to branding, we help startups and small
            businesses grow, engage customers, and build a lasting online
            presence.
          </Typography>
        </Container>
        <Container style={{ padding: 0, paddingBlock: 5 }}>
          <Typography
            variant="h5"
            sx={{ color: "#fff", margin: 0, textAlign: "start" }}
          >
            End-to-End Services
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#ffffff82", margin: 0, textAlign: "start" }}
          >
            Need a website, marketing, or a brand revamp? We've got you covered
            with expert solutions that bring your vision to life.
          </Typography>
        </Container>
        <Container style={{ padding: 0, paddingBlock: 5 }}>
          <Typography
            variant="h5"
            sx={{ color: "#fff", margin: 0, textAlign: "start" }}
          >
            Digital Transformation Experts
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#ffffff82", margin: 0, textAlign: "start" }}
          >
            Stay ahead with scalable, tech-driven strategies that streamline
            your operations and fuel growth.
          </Typography>
        </Container>
        <Container style={{ padding: 0, paddingBlock: 5 }}>
          <Typography
            variant="h5"
            sx={{ color: "#fff", margin: 0, textAlign: "start" }}
          >
            Customer-First Focus
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#ffffff82", margin: 0, textAlign: "start" }}
          >
            Your success is our mission. We craft tailored solutions to exceed
            your goals and keep you ahead of the gam
          </Typography>
        </Container>
        <Button
          sx={{
            color: "#FFA800",
            borderRadius: "20px",
            borderColor: "#FFA800",
            border: 1,
            marginBlock: 2,
          }}
          onClick={() => navigate("/quote")}
        >
          Let’s connect
        </Button>
      </div>
    </div>
  );
}
