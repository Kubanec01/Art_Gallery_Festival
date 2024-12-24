import { Parallax } from "react-scroll-parallax";
import { imageData } from "../../../../components/backgroundImages";
import { CustomButton } from "../../../../components/buttons/customButton/CustomButton";
import style from "./hero.module.scss"
import { useTranslation } from "react-i18next";

export const Hero = () => {

  const {t} = useTranslation()

  const images = imageData;
  const buttonStyle = "font-sans 2xl:text-[2.6rem] md:text-[2rem] text-[1.7rem] border-cremeWhite border-[3px] rounded-[40px] 2xl:w-[240px] md:w-[210px] w-[160px] 2xl:h-[60px] md:h-[50px] h-[44px] text-cremeWhite uppercase -tracking-[4.2px]"

  return (
    <div
      style={{
        backgroundImage: `url(${images.heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full lg:px-10 px-2 h-[100vh] bg-black flex justify-center items-center"
    >
      <div className="mx-auto w-full max-w-[1720px]">
        {/* left */}
        <Parallax speed={-5} className="h-full">
          <h1
            style={{
              textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
            }}
            className="md:text-[1.8rem] text-[1.4rem] font-medium text-creme absolute left-0 xl:top-4 lg:top-2 md:top-1 -top-3 z-50"
          >
            Open Your Soul At The
          </h1>
          <h1
            style={{
              textShadow: "2px 2px 5px rgba(0,0,0,0.4)",
            }}
            className="text-creme uppercase font-extrabold 2xl:text-[9.4rem] xl:text-[8.4rem] lg:text-[7.4rem] md:text-[6.4rem] text-[3.2rem] md:mt-[110px]"
          >
            Renaissurge
          </h1>
          <p
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
            }}
            className="text-cremeWhite uppercase font-semibold 2xl:text-3xl lg:text-2xl md:text-xl lg:-mt-[30px] md:-mt-[26px] -mt-[10px] 2xl:w-[59%] xl:w-[68%] md:w-[88%] tracking-wide"
          >
            {t('hero.desc')}
          </p>
        </Parallax>
        {/* right */}
        <div className="h-full w-full flex flex-col 2xl:mt-0 xl:mt-8 mt-24 justify-end items-end">
          <h1 className="2xl:text-[2.2rem] lg:text-[2rem] md:text-[1.8rem] text-[1.5rem] font-semibold uppercase text-white">
          {t('hero.btnTitle1')}
          </h1>
          <h1 className="2xl:text-[2.2rem] lg:text-[2rem] md:text-[1.8rem] text-[1.3rem] md:mr-10 text-nowrap font-semibold uppercase text-white lg:-mt-3 -mt-2 mb-2">
          {t('hero.btnTitle2')}
          </h1>
          <div className="2xl:w-[586px] w-[526px] md:mb-[10px] flex md:flex-row flex-col justify-between md:gap-0 gap-4 items-end">
            <CustomButton
              className={`${style.orderBtn} ${buttonStyle}`}
              title="OꓤdƎr"
              href="#"
            />
            <CustomButton
              className={`${style.newsBtn} ${buttonStyle}`}
              title="nƎws/"
              href="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};