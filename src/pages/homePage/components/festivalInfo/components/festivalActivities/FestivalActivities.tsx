import { Trans, useTranslation } from "react-i18next";
import image1 from "../../../../../../assets/david-statue-img.jpg";

import style from "./festivalActivities.module.scss"

export const FestivalActivities = () => {

  const {t} = useTranslation()

  return (
    <div className="w-[90%] max-w-[1300px] mx-auto flex md:flex-row flex-col md:justify-start justify-center items-center lg:mt-[150px] mt-[180px]">
      {/* IMG */}
      <div className="lg:w-[460px] md:w-auto w-full lg:h-[560px] md:h-[460px] h-[260px] overflow-hidden rounded-[5px]">
        <img
          className={`${style.img} object-cover w-full h-full`}
          src={image1}
          alt=""
        />
      </div>
      {/* TEXT */}
      <div className="md:ml-[50px] md:-mt-[20px] mt-[20px] md:w-auto w-full">
        <h1 className="text-customWhite lg:text-5xl md:text-4xl text-2xl font-medium text-nowrap">
          <Trans
          i18nKey={'festivalInfo.activitiesInfo.title'}
          />
        </h1>
        <p className="text-customWhite lg:text-lg lg:w-[420px] md:w-[360px] w-[95%] md:mt-[10px] mt-[6px]">
          {t('festivalInfo.activitiesInfo.desc')}
        </p>
      </div>
    </div>
  );
};

