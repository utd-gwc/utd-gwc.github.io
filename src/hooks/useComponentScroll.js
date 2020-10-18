import { useEffect, useRef } from "react";

export default function useComponentScroll(handleOnScroll) {
  // create element ref
  const innerRef = useRef(null);

  useEffect(() => {
    const div = innerRef.current;
    // subscribe event
    div.addEventListener("scroll", handleOnScroll);
    return () => {
      // unsubscribe event
      div.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return innerRef;
}
