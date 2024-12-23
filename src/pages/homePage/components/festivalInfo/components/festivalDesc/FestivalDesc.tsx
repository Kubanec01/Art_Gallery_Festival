import { Parallax } from "react-scroll-parallax";
import image1 from "../../../../../../assets/bg-statue-img.png";
import { CustomButton } from "../../../../../../components/buttons/customButton/CustomButton";
import style from "./festivalDesc.module.scss";
import imageLine from "../../../../../../assets/text-line-img.png";
import imageArrow from "../../../../../../assets/text-arrow-img.png";
import { Trans, useTranslation } from "react-i18next";

export const FestivalDesc = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1750px] mx-auto mt-[-60px] flex justify-between items-center">
      {/* TEXT */}
      <div className="w-[30%]">
        <Parallax speed={-10} className="-mt-[220px] ml-[200px]">
          <img
            className="absolute object-cover -top-3 opacity-90 left-5 h-[160px] z-10"
            src={imageLine}
            alt="line-img"
          />
          <h1 className="text-5xl text-creme z-20 relative text-nowrap">
            <Trans i18nKey={"festivalDesc.ticketsSection.title"} />
          </h1>
          <p className="w-[380px] mt-[8px] text-2xl text-shadowGrey300">
            {t("festivalDesc.ticketsSection.desc")}
          </p>
          <CustomButton
            className={`${style.btn1} text-cremeWhite mt-[20px] border-[2px] border-cremeWhite text-2xl tracking-tighter font-sans  w-[150px] h-[40px] rounded-[20px]`}
            title={t("festivalDesc.ticketsSection.btnText")}
            href="#"
          />
        </Parallax>
      </div>
      {/* IMG */}
      <Parallax speed={20} className="w-[40%] flex justify-center items-center">
        <img
          className="object-contain w-[680px] opacity-95"
          src={image1}
          alt="angel-img"
        />
      </Parallax>
      {/* TEXT */}
      <div className="w-[30%]">
        <Parallax speed={-5} className="mt-[290px] -ml-[84px]">
          <img
            style={{
              rotate: "-60deg",
            }}
            className="absolute object-cover -top-[74px] opacity-65 left-[190px] h-[190px] z-10"
            src={imageArrow}
            alt="line-img"
          />
          <h1 className="text-5xl text-cremeWhite z-20 relative text-nowrap">
            <Trans i18nKey={"festivalDesc.infoSection.title"} />
          </h1>
          <p className="w-[330px] mt-[8px] text-2xl text-shadowGrey300">
            {t("festivalDesc.infoSection.desc")}
          </p>
          <CustomButton
            className={`${style.btn2} text-cremeWhite mt-[20px] border-[2px] border-cremeWhite text-2xl tracking-tighter font-sans  w-[160px] h-[42px] rounded-[20px]`}
            title={t("festivalDesc.infoSection.btnText")}
            href="#"
          />
        </Parallax>
      </div>
    </div>
  );
};
