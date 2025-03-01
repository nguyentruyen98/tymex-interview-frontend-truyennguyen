import { useEffect, useRef } from "react";

function useIsFirstRender() {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);
  return firstRender.current;
}

export default useIsFirstRender;
