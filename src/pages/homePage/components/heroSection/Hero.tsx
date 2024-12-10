import { imageData } from "../../../../components/backgroundImages";
import { CustomButton } from "../../../../components/buttons/customButton/CustomButton";

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
      <div className="flex px-2 justify-center items-center mx-auto w-[90%] max-w-[1800px] h-[800px]">
        {/* left */}
        <div className="w-[60%] h-full relative">
          <h1
            style={{
              textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
            }}
            className="text-[1.8rem] font-medium text-creme absolute left-0 top-[120px] z-50"
          >
            Open Your Soul At The
          </h1>
          <h1
            style={{
              textShadow: "2px 2px 5px rgba(0,0,0,0.4)",
            }}
            className="text-creme uppercase w-[88%] font-extrabold text-[9.4rem] mt-[110px]"
          >
            Renaissurge
          </h1>
          <p
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
            }}
            className="text-cremeWhite uppercase font-semibold text-3xl -mt-[30px] w-[96%] tracking-wide"
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
        <div className="h-full w-full flex flex-col justify-end items-end">
          <h1 className="text-[2.2rem] font-semibold uppercase text-white">
            Grab your free ticket
          </h1>
          <h1 className="text-[2.2rem] mr-10 text-nowrap font-semibold uppercase text-white -mt-3 mb-2">
            Or find out more about the even
          </h1>
          <div className="w-[86%] mb-[10px] flex justify-between">
            <CustomButton
              className="font-sans text-[2.6rem] border-cremeWhite border-[3px] rounded-[40px] w-[240px] h-[60px] text-cremeWhite uppercase -tracking-[4.2px]"
              title="OꓤdƎr"
              href="#"
            />
            <CustomButton
              className="font-sans text-[2.6rem] border-cremeWhite border-[3px] rounded-[40px] w-[240px] h-[60px] text-cremeWhite uppercase -tracking-[4.2px]"
              title="nƎws/"
              href="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ! do sekcie kde sa nachadzaju buttons sa prida este nejaky text nad to aby to pekne vyplnilo priestor a mozno sa nahradi bg-image za nieco svetlejsie popripade dame bg-img tmavsi
