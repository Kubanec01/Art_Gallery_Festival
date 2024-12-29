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
    <div className="w-[92%] lg:px-0 md:px-10 px-2 max-w-[1750px] mx-auto flex lg:flex-row flex-col justify-between lg:items-center">
      {/* TEXT */}
      <div className="lg:w-[30%] w-full 2xl:-mt-[220px] lg:-mt-[120px] mt-[120px]">
        <Parallax speed={-10} className="2xl:ml-[200px] xl:ml-[90px] lg:ml-[20px]">
          <img
            className="absolute object-cover 2xl:-top-3 md:-top-[5px] -top-[1px] 2xl:opacity-90 opacity-80 2xl:left-5 left-3 2xl:h-[160px] md:h-[124px] h-[100px] z-10"
            src={imageLine}
            alt="line-img"
          />
          <h1 className="2xl:text-5xl md:text-4xl text-3xl text-creme z-20 relative text-nowrap">
            <Trans i18nKey={"festivalDesc.ticketsSection.title"} />
          </h1>
          <p className="2xl:w-[380px] md:w-[320px] w-[280px] mt-[8px] 2xl:text-2xl md:text-xl text-lg text-shadowGrey300">
            {t("festivalDesc.ticketsSection.desc")}
          </p>
          <CustomButton
            className={`${style.btn1} text-cremeWhite 2xl:mt-[20px] md:mt-[14px] mt-[10px] 2xl:border-[2px] border-[1px] border-cremeWhite 2xl:text-2xl md:text-xl text-lg tracking-tighter font-sans 2xl:w-[150px] md:w-[120px] w-[100px] 2xl:h-[40px] h-[36px] rounded-[20px]`}
            title={t("festivalDesc.ticketsSection.btnText")}
            href="#"
          />
        </Parallax>
      </div>
      {/* IMG */}
      <Parallax speed={20} className="w-[40%] lg:flex hidden justify-center items-center">
        <img
          className="object-contain 2xl:ml-0 ml-8 w-[680px] opacity-95"
          src={image1}
          alt="angel-img"
        />
      </Parallax>
      {/* TEXT */}
      <div className="lg:w-[30%] w-full lg:block flex items-center justify-end lg:mt-[300px] md:mt-[100px] sm:mt-[140px] mt-[110px]">
        <Parallax speed={-5} className="2xl:-ml-[84px] xl:-ml-[44px] ml-[10px]">
          <img
            style={{
              rotate: "-60deg",
            }}
            className="absolute object-cover 2xl:-top-[74px] -top-[44px] 2xl:opacity-65 opacity-60 2xl:left-[190px] left-[150px] 2xl:h-[190px] h-[130px] z-10"
            src={imageArrow}
            alt="line-img"
          />
          <h1 className="2xl:text-5xl md:text-4xl text-3xl text-cremeWhite z-20 relative text-nowrap">
            <Trans i18nKey={"festivalDesc.infoSection.title"} />
          </h1>
          <p className="2xl:w-[330px] md:w-[300px] w-[280px] mt-[8px] 2xl:text-2xl md:text-xl text-lg text-shadowGrey300">
            {t("festivalDesc.infoSection.desc")}
          </p>
          <CustomButton
            className={`${style.btn2} text-cremeWhite 2xl:mt-[20px] md:mt-[14px] mt-[10px] 2xl:border-[2px] border-[1px] border-cremeWhite 2xl:text-2xl md:text-xl text-lg tracking-tighter font-sans 2xl:w-[160px] md:w-[130px] w-[110px] h-[42px] rounded-[20px]`}
            title={t("festivalDesc.infoSection.btnText")}
            href="#"
          />
        </Parallax>
      </div>
    </div>
  );
};
