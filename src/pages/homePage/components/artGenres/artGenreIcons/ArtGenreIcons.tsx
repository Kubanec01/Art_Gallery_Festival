import { useState } from "react";
import { GenreIcons } from "../../../../../data/GenreIcons";
import { useHoverStatus } from "../../../../../hooks/useHoverStatus";
import style from "./artGenreIcons.module.scss";

// ! ked ukazes na icon tak sa title v sekcii zmeni podla nazvu danej icon, na to budes musiet pouzit useContext

export const ArtGenresIcons = () => {
  const data = GenreIcons;

  const { isActive, mouseEnter, mouseLeave } = useHoverStatus();



  return (
    <>
      {data.map((i) => {
        return (
            <div
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              key={i.id}
              className={`${style.iconBody} flex justify-center items-center aspect-square border-[#ffffffcd] border-[3px] rounded-2xl w-[140px]`}
            >
              <span className="text-4xl text-[#ffffffcd]">{i.icon}</span>
            </div>
        );
      })}
    </>
  );
};
