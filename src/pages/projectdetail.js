import "../style/App.css";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { productinfo } from "../info/product-info";
import PrjdataWeb from "../component/prjdataweb";
import { lazy, Suspense } from "react";
import Loader from "../component/Loader";
const time = 200;
const Subbanner = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/subbanner")), time);
  });
});
const Navbar = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/nav")), time);
  });
});
const Footer = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../section/footer")), time);
  });
});

function ProjectDetail() {
  const { title } = useParams();

  return (
    <Suspense fallback={<Loader />}>
      <Box className="flex flex-col">
        <Navbar></Navbar>
        <Box className="flex flex-col space-y-4">
          <Subbanner
            item={{
              pagetitle: "Project Details",
              title: title,
              button: "Contact",
            }}
          ></Subbanner>

          {productinfo
            .filter((item) => (item.title === title ? item : null))
            .map((item) => {
              return (
                <>
                  <Box className="flex justify-center">
                    <img src={item.pic1} alt="Main"></img>
                  </Box>

                  <Box className="justify-center items-center my-4 space-y-10 flex flex-col">
                    <PrjdataWeb
                      title={"Problem Extracted"}
                      item={item.challange}
                      heading={"01. The Challange "}
                    />

                    {item.pic2 !== null ? (
                      <img
                        className={`${
                          item.catogery === "Mobile Development"
                            ? ""
                            : "w-4/5 rounded-3xl"
                        } `}
                        src={item.pic2}
                        alt="second pic"
                      />
                    ) : null}

                    <PrjdataWeb
                      title={"Problem Solved"}
                      item={item.solution}
                      heading={"02. The Solution "}
                    />

                    {item.pic3 !== null ? (
                      <img
                        className={`${
                          item.catogery === "Mobile Development"
                            ? ""
                            : "w-4/5 rounded-3xl"
                        } `}
                        src={item.pic3}
                        alt="Third pic"
                      />
                    ) : null}

                    <PrjdataWeb
                      title={"End Product"}
                      item={item.results}
                      heading={"03. The Results"}
                    />

                    {item.pic4 !== null ? (
                      <img
                        className={`${
                          item.catogery === "Mobile Development"
                            ? ""
                            : "w-4/5 rounded-3xl"
                        } `}
                        src={item.pic4}
                        alt="fourth pic"
                      />
                    ) : null}
                  </Box>
                </>
              );
            })}

          <Footer></Footer>
        </Box>
      </Box>
    </Suspense>
  );
}

export default ProjectDetail;
