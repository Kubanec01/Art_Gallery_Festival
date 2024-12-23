import { Trans, useTranslation } from "react-i18next";
import image1 from "../../../../../../assets/angels-statue-img.jpg";
import style from "./festivalBands.module.scss";

export const FestivalBands = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1300px] mx-auto flex justify-end items-center mt-[140px]">
      {/* TEXT */}
      <div className="mr-[50px] -mt-[20px]">
        <h1 className="text-customWhite text-5xl font-medium">
          <Trans i18nKey={"festivalInfo.bandsInfo.title"} />
        </h1>
        <p className="text-customWhite text-lg w-[420px] mt-[10px]">
          {t("festivalInfo.bandsInfo.desc")}
        </p>
      </div>
      {/* IMG */}
      <div className="w-[460px] h-[560px] rounded-[5px] overflow-hidden">
        <img
          className={`${style.img} object-cover w-full h-full`}
          src={image1}
          alt=""
        />
      </div>
    </div>
  );
};
