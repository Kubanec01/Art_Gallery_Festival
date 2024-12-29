import { useState } from "react";
import { ArtGenresIcons } from "./artGenreIcons/ArtGenreIcons";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

export const ArtGenres = () => {

  const {t} = useTranslation()


  const [headerText, setHeaderText] = useState(t('artGenres.title'));

  return (
    <div
    id="art-styles"
    style={{
      scrollMargin: "200px"
    }}
    className="w-full bg-[#151515] flex justify-center items-center xl:mb-0 lg:-mb-[70px] -mb-[120px]">
      {/* BODY */}
      <div className="mx-2 w-[90%] h-[90%]">
        {/* TEXT */}
        <div className="w-full mt-[100px]">
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
            className="text-center lg:text-6xl md:text-5xl text-3xl text-nowrap text-customWhite"
          >
            {headerText}
          </motion.h1>
          <p className="text-center lg:text-2xl md:text-xl text-shadowGrey md:mt-[14px] mt-[2px]">
            <Trans
            i18nKey={'artGenres.desc'}
            />
          </p>
        </div>
        {/* ICONS */}
        <div className="w-full sm:mt-[80px] mt-[40px] flex flex-wrap justify-center items-center lg:gap-28 md:gap-24 gap-10">
          <ArtGenresIcons setHeaderText={setHeaderText} />
        </div>
      </div>
    </div>
  );
};