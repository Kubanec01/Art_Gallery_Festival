import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  let width = window.innerWidth;

  let [screenWidth, setScreenWidth] = useState<number>(width);

  useEffect(() => {
    const handleResize = () => setScreenWidth(width);

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    }
  }, []);

  return screenWidth
};
