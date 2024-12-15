import image1 from "../../../../assets/art-bg-img.webp";
import { CustomButton } from "../../../../components/buttons/customButton/CustomButton";
import { ImageSlider } from "./imageSlider/ImageSlider";

export const ArtShowcase = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full h-[800px] z-10"
    >
      <span className="absolute inset-0 bg-[#000000f1] z-10" />

      <div className="z-50 mx-auto max-w-[1900px] h-full relative flex items-center justify-center">
        {/* TEXT */}
        <div className="w-[50%] h-full flex justify-end">
          <div className="mt-[142px] mr-[140px]">
            <h1 className="text-5xl text-cremeWhite font-medium">
              Renowned Artists and <br />
              Their Masterpieces
            </h1>
            <p className="text-2xl text-cremeWhite500 w-[460px] mt-[8px]">
              The festival will showcase monumental works by some of the most
              celebrated names in the art world. Experience the grandeur of
              iconic masterpieces, each telling its own powerful story and
              reflecting the brilliance of renowned artists.
            </p>
          </div>
        </div>
        {/* IMGS */}
        <div className="w-[50%] h-full flex justify-start items-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};
