import React, { Suspense, useEffect, useState } from "react";
import Loader from "../component/Loader.js";
import { useInView } from "react-intersection-observer";

const RenderOnViewportEntry = ({ children }) => {
  const [entered, setEntered] = useState(false);
  const { ref, inView , entry } = useInView();

  useEffect(() => {
    if (inView === true) {
      setEntered(true);
    }
  }, [inView]);
 
  console.log(entry)
  return (
    <div ref={ref}>
      {entered === true && <Suspense fallback={<Loader />}>{children}</Suspense>}
    </div>
  );
};

export default RenderOnViewportEntry;
