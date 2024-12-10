import { GenreIcons } from "../../../../data/genreIcons";

export const ArtGenresIcons = () => {
  const data = GenreIcons;

  return (
    <>
      {data.map((i) => {
        return (
          <div
            key={i.id}
            className="flex justify-center items-center aspect-square border-[#ffffffcd] border-[3px] rounded-2xl w-[140px]"
          >
            <span
            className="text-4xl text-[#ffffffcd]"
            >
                {i.icon}
            </span>
          </div>
        );
      })}
    </>
  );
};
