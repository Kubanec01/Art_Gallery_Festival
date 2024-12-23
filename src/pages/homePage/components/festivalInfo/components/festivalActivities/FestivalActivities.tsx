import { Trans, useTranslation } from "react-i18next";
import image1 from "../../../../../../assets/david-statue-img.jpg";

import style from "./festivalActivities.module.scss"

export const FestivalActivities = () => {

  const {t} = useTranslation()

  return (
    <div className="max-w-[1300px] mx-auto flex justify-start items-center mt-[150px]">
      {/* IMG */}
      <div className="w-[460px] h-[560px] overflow-hidden rounded-[5px]">
        <img
          className={`${style.img} object-cover w-full h-full`}
          src={image1}
          alt=""
        />
      </div>
      {/* TEXT */}
      <div className="ml-[50px] -mt-[20px]">
        <h1 className="text-customWhite text-5xl font-medium">
          <Trans
          i18nKey={'festivalInfo.activitiesInfo.title'}
          />
        </h1>
        <p className="text-customWhite text-lg w-[420px] mt-[10px]">
          {t('festivalInfo.activitiesInfo.desc')}
        </p>
      </div>
    </div>
  );
};

