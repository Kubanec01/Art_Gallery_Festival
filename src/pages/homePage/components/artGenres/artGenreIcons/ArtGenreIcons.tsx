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
            className={`${style.iconBody} flex justify-center items-center aspect-square border-[#ffffff93] border-[3px] rounded-[80px] w-[140px]`}
          >
            <span className="text-4xl text-[#ffffffcd]">{i.icon}</span>
          </div>
        );
      })}
    </>
  );
};
