import { Trans, useTranslation } from "react-i18next";
import image1 from "../../../../../../assets/angels-statue-img.jpg";
import style from "./festivalBands.module.scss";

export const FestivalBands = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[90%] max-w-[1300px] mx-auto flex md:flex-row flex-col md:justify-end justify-center items-center lg:mt-[140px] mt-[80px]">
      {/* TEXT */}
      <div className="md:mr-[50px] md:-mt-[20px] mt-[20px] md:w-auto w-full">
        <h1 className="text-customWhite lg:text-5xl md:text-4xl text-2xl font-medium">
          <Trans i18nKey={"festivalInfo.bandsInfo.title"} />
        </h1>
        <p className="text-customWhite lg:text-lg lg:w-[420px] md:w-[360px] w-[95%] md:mt-[10px] mt-[6px]">
          {t("festivalInfo.bandsInfo.desc")}
        </p>
      </div>
      {/* IMG */}
      <div className="lg:w-[460px] md:w-auto w-full lg:h-[560px] md:h-[460px] h-[260px] overflow-hidden rounded-[5px] md:mt-0 mt-[20px]">
        <img
          className={`${style.img} object-cover w-full h-full`}
          src={image1}
          alt=""
        />
      </div>
    </div>
  );
};
