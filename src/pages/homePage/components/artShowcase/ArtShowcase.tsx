import { Trans, useTranslation } from "react-i18next";
import image1 from "../../../../assets/art-bg-img.webp";
import { ImageSlider } from "./imageSlider/ImageSlider";

export const ArtShowcase = () => {

  const {t} = useTranslation()
  
  return (
    <div
      style={{
        backgroundImage: `url(${image1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full lg:h-[800px] z-10"
    >
      <span className="absolute inset-0 bg-[#000000e4] z-10" />

      <div className="z-50 mx-auto w-full max-w-[1900px] h-full relative flex lg:flex-row flex-col  items-center justify-center">
        {/* TEXT */}
        <div className="xl:w-[50%] lg:w-[55%] w-[90%] h-full lg:flex justify-end">
          <div className="lg:mt-[142px] md:mt-[80px] mt-[40px] xl:mr-[140px] lg:mr-[40px]">
            <h1 className="md:text-5xl text-3xl lg:text-left text-center text-cremeWhite md:font-medium">
              <Trans
              i18nKey={'artShowCase.title'}
              />
            </h1>
            <p className="lg:text-2xl md:text-xl text-cremeWhite500 lg:w-[460px] md:w-[74%] w-[94%] lg:mt-[8px] mt-[10px] lg:text-left text-center mx-auto">
              {t('artShowCase.desc')}
            </p>
          </div>
        </div>
        {/* IMGS */}
        <div className="xl:w-[50%] lg:w-[45%] md:w-[700px] w-[300px] lg:ml-0 md:ml-[300px] ml-[40px] h-full lg:mt-0 mt-[40px] lg:mb-0 mb-[60px] lg:flex justify-start items-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};
