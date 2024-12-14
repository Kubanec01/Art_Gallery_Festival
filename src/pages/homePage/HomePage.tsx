import { ArtGenres } from "./components/artGenres/ArtGenres";
import { ArtShowcase } from "./components/artShowcase/ArtShowcase";
import { FestivalInfo } from "./components/festivalInfo/FestivalInfo";
import { FestivalLogo } from "./components/festivalLogo/FestivalLogo";
import { Hero } from "./components/heroSection/Hero";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ArtGenres />
      <FestivalInfo />
      <FestivalLogo />
      <ArtShowcase />
    </>
  );
};
