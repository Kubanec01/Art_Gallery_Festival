import { useState } from "react";
import { ArtGenresIcons } from "./artGenreIcons/ArtGenreIcons";
import { motion } from "framer-motion";

export const ArtGenres = () => {
  const [headerText, setHeaderText] = useState("Expected Art Genres");

  return (
    <div className="w-full h-[650px] bg-[#151515] flex justify-center items-center">
      {/* BODY */}
      <div className="mx-2 w-[90%] h-[90%]">
        {/* TEXT */}
        <div className="w-full mt-[70px]">
          <motion.h1
          key={headerText}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{duration: 0.6}}
            variants={{
              hidden: {opacity: 0.4, y: -12},
              visible: {opacity: 1, y: 0}
            }}
            className="text-center text-6xl text-customWhite"
          >
            {headerText}
          </motion.h1>
          <p className="text-center text-2xl text-shadowGrey mt-[14px]">
            From classic to contemporary, discover <br />
            art that resonates with very soul.
          </p>
        </div>
        {/* ICONS */}
        <div className="w-full mt-[80px] flex justify-center items-center gap-28">
          <ArtGenresIcons setHeaderText={setHeaderText} />
        </div>
      </div>
    </div>
  );
};