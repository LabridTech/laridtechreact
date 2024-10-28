import { useEffect, useRef, usestate } from "react";

const useFirstViewportEntry = (ref, observerOptions) => {
  const [entered, setEntered] = usestate(false);

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => setEntered(entry.isIntersecting),
      observerOptions
    )
  );

  console.log(observer)

  useEffect(() => {
    const element = ref.current;
    const ob = observer.current;
    
    // stop observing once the element has entered the view
    if (entered) {
      ob.disconnect();
      return;
    }
    if (element && !entered) ob.observe(element);

    return () => ob.disconnect();
  }, [entered, observer , ref]);

  return entered;
};
export default useFirstViewportEntry;