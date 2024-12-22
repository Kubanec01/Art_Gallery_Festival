import { Parallax } from "react-scroll-parallax";
import image1 from "../../../../../../assets/bg-statue-img.png";
import { CustomButton } from "../../../../../../components/buttons/customButton/CustomButton";
import style from "./festivalDesc.module.scss"


export const FestivalDesc = () => {
  return (
    <div className="max-w-[1750px] mx-auto mt-[-60px] flex justify-between items-center">
      {/* TEXT */}
      <div className="w-[30%]">
        <Parallax speed={-10} className="-mt-[220px] ml-[200px]">
          <h1 className="text-5xl text-creme text-nowrap">
            Enter the Realm <br />
            of Creativity
          </h1>
          <p className="w-[380px] mt-[8px] text-2xl text-shadowGrey300">
            Exclusive early-bird tickets go live on 14th November 2024, offering
            special prices for a limited time. Secure yours before they're gone!
          </p>
          <CustomButton
            className={`${style.btn1} text-cremeWhite mt-[20px] border-[2px] border-cremeWhite text-2xl tracking-tighter font-sans  w-[150px] h-[40px] rounded-[20px]`}
            title="Buy Now"
            href="#"
          />
        </Parallax>
      </div>
      {/* IMG */}
      <Parallax speed={20} className="w-[40%] flex justify-center items-center">
        <img
          className="object-contain w-[680px] opacity-95"
          src={image1}
          alt="angel-img"
        />
      </Parallax>
      {/* TEXT */}
      <div className="w-[30%]">
        <Parallax speed={-5} className="mt-[290px] -ml-[84px]">
          <h1 className="text-5xl text-cremeWhite text-nowrap">
            Unveiling the 4th <br />
            Edition: News & <br />
            Updates
          </h1>
          <p className="w-[330px] mt-[8px] text-2xl text-shadowGrey300">
            Stay informed with the latest announcements, exclusive insights, and
            key updates about the 4th edition of the festival.
          </p>
          <CustomButton
            className={`${style.btn2} text-cremeWhite mt-[20px] border-[2px] border-cremeWhite text-2xl tracking-tighter font-sans  w-[160px] h-[42px] rounded-[20px]`}
            title="Read More"
            href="#"
          />
        </Parallax>
      </div>
    </div>
  );
};

