import "../style/App.css";
import { Footer } from "../section/footer";
import { Navbar } from "../section/nav";
import { Subbanner } from "../section/subbanner";
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";
import { useParams } from "react-router-dom";
import { productinfo } from "../info/product-info";
import { isMobile } from "../windowsize";
import useWindowDimensions from "../windowsize";
import PrjdataWeb from "../component/prjdataweb";
import PrjdataMobile from "../component/prjdataMobile";

function ProjectDetail() {
  const { title } = useParams();
  let { height, width } = useWindowDimensions();
  let imgsheight = 0;

  return (
    <div className="App">
      <Navbar
        navItems={["About us", "Service", "Case Study", "Contact us"]}
      ></Navbar>
      <Subbanner
        item={{ pagetitle: "Project Details", title: title, button: "Contact" }}
      ></Subbanner>

      {productinfo
        .filter((item) => (item.title === title ? item : null))
        .map((item) => {
          return (
            <>
              <div style={{ padding: "5%", backgroundColor: "#14111e" }}>
                <img
                  src={item.pic1}
                  alt="Main"
                  style={{
                    width: (width * 9) / 10,
                    height:
                      item.catogery === "Mobile Development"
                        ? (height * 9) / 10
                        : isMobile()
                        ? (height * 2) / 10
                        : (height * 9) / 10,
                    objectFit: "scale-down",
                    display: "inline",
                  }}
                ></img>
              </div>

              <Grid2
                container
                spacing={{ xs: 1, md: 3 }}
                columns={{ xs: 2, sm: 4, md: 5 }}
                className="footer"
                sx={{ marginBlock: 10 }}
              >
                {isMobile() ? (
                  <PrjdataMobile
                    item={item.challange}
                    heading={"01. The Challange"}
                  />
                ) : (
                  <PrjdataWeb
                    item={item.challange}
                    heading={"01. The Challange"}
                  />
                )}
                {item.pic2 !== null ? (
                  <img
                    style={{
                      width: isMobile() ? (width * 9) / 10 : (width * 4) / 10,
                      height:
                        item.catogery === "Mobile Development"
                          ? (height * 9) / 10
                          : isMobile()
                          ? (height * 2) / 10
                          : (height * 4) / 10,
                      marginBlock: 5,
                    }}
                    src={item.pic2}
                    alt="second pic"
                  />
                ) : null}
                {isMobile() ? (
                  <PrjdataMobile
                    item={item.solution}
                    heading={"02. The Solution"}
                  />
                ) : (
                  <PrjdataWeb
                    item={item.solution}
                    heading={"02. The Challange"}
                  />
                )}
                {item.pic3 !== null ? (
                  <img
                    style={{
                      width: isMobile() ? (width * 9) / 10 : (width * 4) / 10,
                      height:
                        item.catogery === "Mobile Development"
                          ? (height * 9) / 10
                          : isMobile()
                          ? (height * 2) / 10
                          : (height * 4) / 10,
                      marginBlock: 5,
                    }}
                    src={item.pic3}
                    alt="Third pic"
                  />
                ) : null}
                {isMobile() ? (
                  <PrjdataMobile
                    item={item.results}
                    heading={"03. The Results"}
                  />
                ) : (
                  <PrjdataWeb item={item.results} heading={"03. The Results"} />
                )}
                {item.pic4 !== null ? (
                  <img
                    style={{
                      width: isMobile() ? (width * 9) / 10 : (width * 4) / 10,
                      height:
                        item.catogery === "Mobile Development"
                          ? (height * 9) / 10
                          : isMobile()
                          ? (height * 2) / 10
                          : (height * 4) / 10,
                      marginBlock: 5,
                    }}
                    src={item.pic4}
                    alt="fourth pic"
                  />
                ) : null}
              </Grid2>
            </>
          );
        })}

      <Footer></Footer>
    </div>
  );
}

export default ProjectDetail;
