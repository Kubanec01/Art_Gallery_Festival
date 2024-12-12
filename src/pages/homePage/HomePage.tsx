import { ArtGenres } from "./components/artGenres/ArtGenres";
import { FestivalInfo } from "./components/festivalInfo/FestivalInfo";
import { Hero } from "./components/heroSection/Hero";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ArtGenres />
      <FestivalInfo />
    </>
  );
};
