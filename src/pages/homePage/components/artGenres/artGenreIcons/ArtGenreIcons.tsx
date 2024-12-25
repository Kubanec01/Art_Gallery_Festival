import { GenreIcons } from "../../../../../data/GenreIcons";
import style from "./artGenreIcons.module.scss";

type ArtGenresIconsProps = {
  setHeaderText: (text: string) => void;
};

export const ArtGenresIcons = ({setHeaderText}: ArtGenresIconsProps) => {
  const data = GenreIcons;

  return (
    <>
      {data.map((i) => {
        return (
          <div
          onMouseEnter={() => setHeaderText(i.name)}
          onMouseLeave={() => setHeaderText("Expected Art Genres")}
            key={i.id}
            className={`${style.iconBody} flex justify-center items-center aspect-square border-[#ffffff93] sm:border-[3px] border-[2px] rounded-[80px] xl:w-[140px] lg:w-[120px] sm:w-[100px] w-[78px]`}
          >
            <span className="xl:text-4xl sm:text-3xl text-xl text-[#ffffffcd]">{i.icon}</span>
          </div>
        );
      })}
    </>
  );
};
