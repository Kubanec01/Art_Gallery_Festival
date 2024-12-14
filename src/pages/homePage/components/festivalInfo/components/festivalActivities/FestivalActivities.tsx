import image1 from "../../../../../../assets/david-statue-img.jpg";

import style from "./festivalActivities.module.scss"

export const FestivalActivities = () => {
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
          ,,Two Days of <br />
          Unforgettable Art and <br />
          Activities Await”
        </h1>
        <p className="text-customWhite text-lg w-[420px] mt-[10px]">
          Prepare for a vibrant festival experience! Alongside the art gallery,
          you'll find exciting games, engaging competitions with awards,
          thrilling rides for children, sports events, and live performances by
          talented bands. Enjoy a variety of delicious food from local vendors,
          showcasing everything from gourmet treats to classic fair favorites.
          Explore interactive workshops where you can unleash your creativity,
          whether through painting, crafting, or even learning a few dance
          moves.
        </p>
      </div>
    </div>
  );
};

