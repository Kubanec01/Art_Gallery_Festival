import { imageData } from "../../../../components/backgroundImages";

export const Hero = () => {
  const images = imageData;

  return (
    <div
      style={{
        backgroundImage: `url(${images.heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[100vh] flex justify-center items-center"
    >
      <div className="border border-red-600 mx-auto w-[90%] max-w-[1700px] h-[800px]">
        {/* left */}
        <div
        className="w-[60%] h-full border"
        >
          <h1
          className="text-white font-bold text-9xl mt-[120px]"
          >Renaissurge</h1>
          <p
          className="text-white text-2xl w-[85%] mt-[14px] tracking-wide"
          >
            Step into a world where the timeless beauty of the Renaissance meets
            the bold innovation of modern art. The 4th edition of our gallery
            exhibition invites you to experience masterpieces that transcend
            eras—blending classical techniques with contemporary vision.
            Discover the harmony between the old and the new, and immerse
            yourself in a curated collection that celebrates the enduring legacy
            of Renaissance artistry, reimagined for today’s world.
          </p>
        </div>
        {/* right */}
        <div></div>
      </div>
    </div>
  );
};
