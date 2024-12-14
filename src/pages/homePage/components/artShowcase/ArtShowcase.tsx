import image1 from "../../../../assets/art-bg-img.webp";
import { CustomButton } from "../../../../components/buttons/customButton/CustomButton";

export const ArtShowcase = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full mb-[200px] h-[800px] z-10"
    >
      <span className="absolute inset-0 bg-[#000000e5] z-10" />

      <div className="border z-50 max-w-[1500px] mx-auto h-full relative flex items-center justify-center">
        {/* TEXT */}
        <div className="w-[50%] h-full border">
            <div
            className="mt-[120px] ml-[160px]"
            >
          <h1 className="text-5xl text-cremeWhite">
            Renowned Artists and <br />
            Their Masterpieces
          </h1>
          <p className="text-xl text-creme w-[410px] mt-[8px]">
            The festival will showcase monumental works by some of the most
            celebrated names in the art world. Experience the grandeur of iconic
            masterpieces, each telling its own powerful story and reflecting the
            brilliance of renowned artists.
          </p>
          <CustomButton 
          href="#" 
          title="Buy Now" 
          className="text-white mt-[14px] text-xl font-sans border-[2px] tracking-tight rounded-[30px] px-[30px] py-[2px]" />
            </div>
        </div>
        {/* IMGS */}
        <div className="w-[50%] border border-red-600 h-full">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
