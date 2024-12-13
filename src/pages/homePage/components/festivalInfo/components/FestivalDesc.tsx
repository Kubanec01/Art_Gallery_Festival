import image1 from "../../../../../assets/bg-statue-img.png";
import { CustomButton } from "../../../../../components/buttons/customButton/CustomButton";

export const FestivalDesc = () => {
  return (
    <div className="w-[90%] max-w-[1800px] mx-auto mt-[-60px] flex justify-between items-center">
      {/* TEXT */}
      <div className="w-[30%]">
        <div className="-mt-[220px] ml-[200px]">
          <h1 className="text-5xl text-creme text-nowrap">
            Enter the Realm <br />
            of Creativity
          </h1>
          <p className="w-[380px] mt-[8px] text-2xl text-shadowGrey300">
            Exclusive early-bird tickets go live on 14th November 2024, offering
            special prices for a limited time. Secure yours before they're gone!
          </p>
          <CustomButton
            className="text-cremeWhite mt-[20px] border-[2px] border-cremeWhite text-2xl tracking-tighter font-sans  w-[150px] h-[40px] rounded-[20px]"
            title="Buy Now"
            href="#"
          />
        </div>
      </div>
      {/* IMG */}
      <div className="w-[40%] flex justify-center items-center">
        <img
          className="object-contain w-[680px]"
          src={image1}
          alt="angel-img"
        />
      </div>
      {/* TEXT */}
      <div className="w-[30%]">
        <div className="mt-[290px] -ml-[84px]">
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
            className="text-cremeWhite mt-[20px] border-[2px] border-cremeWhite text-2xl tracking-tighter font-sans  w-[160px] h-[42px] rounded-[20px]"
            title="Read More"
            href="#"
          />
        </div>
      </div>
    </div>
  );
};

// ! buttons budu oranzovej farby, len treba vybrat tu spravnu farbu