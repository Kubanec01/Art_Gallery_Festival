import image1 from "../../../../assets/bg-statue-img.png";
import { CustomButton } from "../../../../components/buttons/customButton/CustomButton";

export const FestivalDesc = () => {
  return (
    <div className="w-[90%] border border-black mx-auto mt-[100px] flex justify-between items-center">
      {/* TEXT */}
      <div className="">
        <h1>
          Enter the Realm <br />
          of Creativity
        </h1>
        <p className="w-[120px]">
          Exclusive early-bird tickets go live on 14th November 2024, offering
          special prices for a limited time. Secure yours before they're gone!
        </p>
        <CustomButton title="Buy Now" href="#" />
      </div>
      {/* IMG */}
      <div className="border">
        <img
          className="object-contain w-[680px]"
          src={image1}
          alt="angel-img"
        />
      </div>
      {/* TEXT */}
      <div className="">
        <h1>
          Unveiling the 4th <br />
          Edition: News & <br />
          Updates
        </h1>
        <p className="w-[120px]">
          Stay informed with the latest announcements, exclusive insights, and
          key updates about the 4th edition of the festival.
        </p>
        <CustomButton title="Read More" href="#" />
      </div>
    </div>
  );
};
