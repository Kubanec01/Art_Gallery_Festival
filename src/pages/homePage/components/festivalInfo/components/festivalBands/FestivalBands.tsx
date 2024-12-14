import image1 from "../../../../../../assets/angels-statue-img.jpg";
import style from "./festivalBands.module.scss"

export const FestivalBands = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-end items-center mt-[140px]">
      {/* TEXT */}
      <div className="mr-[50px] -mt-[20px]">
        <h1 className="text-customWhite text-5xl font-medium">
          ,,A Symphony of <br />
          12 Bands: Live Music <br />
          Across the Festival”
        </h1>
        <p className="text-customWhite text-lg w-[420px] mt-[10px]">
          Immerse yourself in a captivating musical journey as 12 exceptional
          bands grace the stage, each offering their unique sound and energy.
          From vibrant rhythms to soulful melodies, the festival will come alive
          with music that resonates across every corner, drawing everyone into
          its enchanting embrace. Whether you're swaying to the beats under the
          open sky or discovering new favorite artists, every performance
          promises to leave a lasting impression.
        </p>
      </div>
      {/* IMG */}
      <div className="w-[460px] h-[560px] rounded-[5px] overflow-hidden">
        <img
          className={`${style.img} object-cover w-full h-full`}
          src={image1}
          alt=""
        />
      </div>
    </div>
  );
};

