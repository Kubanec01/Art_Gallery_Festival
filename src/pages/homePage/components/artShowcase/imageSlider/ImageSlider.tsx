import { useEffect, useRef, useState } from "react";
import { artImagesData } from "../../../../../data/artImages";
import style from "./imageSlider.module.scss";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useScreenWidth } from "../../../../../hooks/useScreenWidth";

export const ImageSlider = () => {
  const data = artImagesData;
  const screenWidth = useScreenWidth();

  const listRef = useRef<HTMLDivElement>(null);

  const slideToRight = () => {
    if (listRef.current && screenWidth > 786) {
      listRef.current.scrollLeft += 400;
    } else if (listRef.current && screenWidth < 786) {
      listRef.current.scrollLeft += 300;
    }
  };

  const slideToLeft = () => {
    if (listRef.current && screenWidth > 786) {
      listRef.current.scrollLeft -= 400;
    } else if (listRef.current && screenWidth < 786) {
      listRef.current.scrollLeft -= 310;
    }
  };

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const scrollBar = listRef.current;

    const scrollWidthWatcher = () => {
      if (scrollBar?.scrollLeft === 0) {
        setIsAtStart(true);
      } else {
        setIsAtStart(false);
      }

      if (
        scrollBar!.scrollLeft + scrollBar!.offsetWidth >=
        scrollBar!.scrollWidth
      ) {
        setIsAtEnd(true);
      } else {
        setIsAtEnd(false);
      }
    };

    scrollBar?.addEventListener("scroll", scrollWidthWatcher);

    return () => {
      scrollBar?.removeEventListener("scroll", scrollWidthWatcher);
    };
  }, [isAtStart, isAtEnd]);

  const leftBtnColor = isAtStart
    ? "text-[#cf722b73] pointer-events-none"
    : "text-[#cf722b]";
  const rightBtnColor = isAtEnd
    ? "text-[#cf722b73] pointer-events-none"
    : "text-[#cf722b]";

  return (
    <div className="overflow-hidden mt-2">
      <div ref={listRef} id="list" className={style.galleryBody}>
        {data.map((i) => (
          <span key={i.id} className="h-full md:w-[360px] w-[240px] mr-[60px]">
            <img
              className="object-cover w-full h-full rounded-[10px]"
              src={i.image}
              alt={`${i.image} img`}
            />
          </span>
        ))}
      </div>
      {/* BUTTONS */}
      <div className="bottom-8 left-0 w-full flex mt-2 items-center">
        <div
          style={{
            backdropFilter: "blur(2px)",
          }}
          className="w-[160px] h-[54px] rounded-[40px] flex items-center justify-between px-4"
        >
          <button
            onClick={slideToLeft}
            className={`${style.button} ${leftBtnColor} text-4xl`} // Corrected the className interpolation
          >
            <FaArrowAltCircleLeft />
          </button>
          <button
            onClick={slideToRight}
            className={`${style.button} ${rightBtnColor} text-4xl`} // Corrected the className interpolation
          >
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};
