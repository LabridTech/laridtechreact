import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import user from "../img/ic-glass-users.svg";
import buy from "../img/ic-glass-buy.svg";
import time from "../img/time.png";
import Divider from "@mui/material/Divider";
import report from "../img/report.png";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Stats() {
  const [entered, setEntered] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView === true) {
      setEntered(true);
    }
  }, [inView]);

  return (
    <Container style={{ width : '100%'}} ref={ref} className="flex flex-col md:flex-row bg-white p-5 !drop-shadow-lg justify-evenly !rounded-lg py-5">
      {entered && (
        <>
          <Box className="flex flex-col items-center  justify-evenly">
            <img alt="icon" src={buy} className="hover:!rotate-45 " />
            <Typography
              variant="h3"
              sx={{ color: "#676668", padding: 1, textAlign: "center" }}
            >
              <span className="animate-[counter_3s_ease-out_forwards] [counter-set:_nummm_var(--nummm)] before:content-[counter(nummm)]">
                <span className="sr-only">47</span>
              </span>
            </Typography>
            <Typography
              className="!text-slate-900 !font-semibold !font-sans"
              variant="h6"
              sx
            >
              Completed  Projects
            </Typography>
          </Box>
          <Divider variant="middle" orientation="vertical" flexItem />
          <Box className="flex flex-col items-center  justify-evenly">
            <img alt="icon" src={user} className="hover:!rotate-45" />
            <Typography variant="h3" sx={{ color: "#676668", padding: 1 }}>
              <span className="animate-[counter_3s_ease-out_forwards] [counter-set:_numm_var(--numm)] before:content-[counter(numm)]">
                <span className="sr-only">45</span>
              </span>
            </Typography>
            <Typography
              className="!text-slate-900 !font-semibold !font-sans"
              variant="h6"
            >
              Happy  client
            </Typography>
          </Box>
          <Divider variant="middle" orientation="vertical" flexItem />
          <Box className="flex flex-col items-center  justify-evenly">
            <img alt="icon" src={time} className="hover:!rotate-45" />
            <Typography
              variant="h3"
              className="flex justify-center"
              sx={{ color: "#676668", padding: 1 }}
            >
              <span className="animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                <span className="sr-only">550</span>
              </span>
            </Typography>
            <Typography
              className="!text-slate-900 !font-semibold !font-sans"
              variant="h6"
            >
              Hour of  Work
            </Typography>
          </Box>
          <Divider variant="middle" orientation="vertical" flexItem />
          <Box className="flex flex-col items-center  justify-evenly">
            <img alt="icon" src={report} className="hover:!rotate-45" />
            <Typography variant="h3" sx={{ color: "#676668", padding: 1 }}>
              <span className="animate-[counter_3s_ease-out_forwards] [counter-set:_nummmm_var(--nummmm)] before:content-[counter(nummmm)]">
                <span className="sr-only">550</span>%
              </span>
            </Typography>
            <Typography
              className="!text-slate-900 !font-semibold !font-sans"
              variant="h6"
            >
              Clients Business
               Increased
            </Typography>
          </Box>
        </>
      )}
    </Container>
  );
}
