import { Parallax } from "react-scroll-parallax";
import { imageData } from "../../../../components/backgroundImages";
import { CustomButton } from "../../../../components/buttons/customButton/CustomButton";
import style from "./hero.module.scss"
import { useTranslation } from "react-i18next";

export const Hero = () => {

  const {t} = useTranslation()

  const images = imageData;
  const buttonStyle = "font-sans text-[2.6rem] border-cremeWhite border-[3px] rounded-[40px] w-[240px] h-[60px] text-cremeWhite uppercase -tracking-[4.2px]"

  return (
    <div
      style={{
        backgroundImage: `url(${images.heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[100vh] bg-black flex justify-center items-center"
    >
      <div className="flex px-2 justify-center items-center mx-auto w-[90%] max-w-[1800px] h-[800px]">
        {/* left */}
        <Parallax speed={-5} className="w-[60%] h-full relative">
          <h1
            style={{
              textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
            }}
            className="text-[1.8rem] font-medium text-creme absolute left-0 top-[120px] z-50"
          >
            Open Your Soul At The
          </h1>
          <h1
            style={{
              textShadow: "2px 2px 5px rgba(0,0,0,0.4)",
            }}
            className="text-creme uppercase w-[88%] font-extrabold text-[9.4rem] mt-[110px]"
          >
            Renaissurge
          </h1>
          <p
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
            }}
            className="text-cremeWhite uppercase font-semibold text-3xl -mt-[30px] w-[96%] tracking-wide"
          >
            {t('hero.desc')}
          </p>
        </Parallax>
        {/* right */}
        <Parallax speed={-5} className="h-full w-full flex flex-col justify-end items-end">
          <h1 className="text-[2.2rem] font-semibold uppercase text-white">
          {t('hero.btnTitle1')}
          </h1>
          <h1 className="text-[2.2rem] mr-10 text-nowrap font-semibold uppercase text-white -mt-3 mb-2">
          {t('hero.btnTitle2')}
          </h1>
          <div className="w-[86%] mb-[10px] flex justify-between">
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
        </Parallax>
      </div>
    </div>
  );
};