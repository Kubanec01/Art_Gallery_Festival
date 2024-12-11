import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const scrollPosition = () => {
      if (window.scrollY === 0){
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    };

    addEventListener("scroll", scrollPosition);

    return () => {
      removeEventListener("scroll", scrollPosition);
    };
  }, [isAtTop]);

  return isAtTop;
};
