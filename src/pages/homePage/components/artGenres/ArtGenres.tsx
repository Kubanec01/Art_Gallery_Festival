import { ArtGenresIcons } from "./ArtGenreIcons";

export const ArtGenres = () => {


  return (
    <div className="w-full h-[650px] bg-[#151515] mb-[200px] flex justify-center items-center">
      {/* BODY */}
      <div className="mx-2 w-[90%] h-[90%]">
        {/* TEXT */}
        <div className="w-full mt-[70px]">
          <h1 className="text-center text-6xl text-customWhite">Expected Art Genres</h1>
          <p className="text-center text-2xl text-shadowGrey mt-[14px]">
            From classic to contemporary, discover <br />
            art that resonates with very soul.
          </p>
        </div>
        {/* ICONS */}
        <div
        className="w-full mt-[80px] flex justify-center items-center gap-32"
        >
         < ArtGenresIcons />
        </div>
      </div>
    </div>
  );
};
