import { useRef } from "react";
import { artImagesData } from "../../../../../data/artImages";
import style from "./imageSlider.module.scss";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const ImageSlider = () => {
  const data = artImagesData;

  const listRef = useRef<HTMLDivElement>(null);

  const slideToRight = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 400;
    } else {
      console.error("Problem with useRef/ ImageSlider");
    }
  };

  const slideToLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 400;
    }
  };

  return (
    <>
      <div ref={listRef} id="list" className={style.galleryBody}>
        {data.map((i) => (
          <span key={i.id} className="h-full w-[360px] mr-[60px]">
            <img
              className="object-cover w-full h-full rounded-[10px]"
              src={i.image}
              alt={`${i.image} img`} // Corrected the alt text interpolation
            />
          </span>
        ))}
      </div>
      {/* BUTTONS */}
      <div className="fixed bottom-8 left-0 w-full flex justify-center items-center">
        <div
          style={{
            backdropFilter: "blur(2px)",
          }}
          className="w-[160px] h-[54px] bg-[#4948488f] rounded-[40px] flex items-center justify-between px-4"
        >
          <button
            onClick={slideToLeft}
            className={`${style.button} text-4xl text-[#ff8a30]`} // Corrected the className interpolation
          >
            <FaArrowAltCircleLeft />
          </button>
          <button
            onClick={slideToRight}
            className={`${style.button} text-4xl text-[#ff8a30]`} // Corrected the className interpolation
          >
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </>
  );
};
