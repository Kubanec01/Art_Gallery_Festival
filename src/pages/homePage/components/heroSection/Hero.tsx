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
      className="w-full h-[100vh] bg-black flex justify-center items-center"
    >
      <div className="border border-red-600 flex justify-center items-center mx-auto w-[90%] max-w-[1700px] h-[800px]">
        {/* left */}
        <div className="w-[60%] h-full border">
          <h1
            style={{
              backdropFilter: "blur(1.4px)",
            }}
            className="text-creme uppercase w-[88%] font-bold text-9xl mt-[120px]"
          >
            Renaissurge
          </h1>
          <p
            style={{
              textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
              backdropFilter: "blur(1.4px)",
            }}
            className="text-white font-sans text-2xl mt-[8px] w-[86%] tracking-wider"
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
        <div
        className="border h-full w-full flex justify-center items-end"
        >
          <div
          className="border w-[80%] mb-[80px]"
          >
            <button
            className="font-sans text-[3.2rem] uppercase font-medium -tracking-[4.2px]"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// ! do sekcie kde sa nachadzaju buttons sa prida este nejaky text nad to aby to pekne vyplnilo priestor a mozno sa nahradi bg-image za nieco svetlejsie popripade dame bg-img tmavsi