import { listOfCharacters } from "../gameData/character/characters";
import { useContext } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState } from "react";
import { CharacterContext } from "../hooks/characterContext";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    setCurrentSlide((prevSlide) => {
      console.log(prevSlide);

      return prevSlide === listOfCharacters.length - 1 ? 0 : prevSlide + 1;
    });
  };

  const handleBack = () => {
    setCurrentSlide((prevSlide) => {
      console.log(prevSlide);
      return prevSlide === 0 ? listOfCharacters.length - 1 : prevSlide - 1;
    });
  };

  const context = useContext(CharacterContext);

  return (
    <CarouselProvider
      naturalSlideWidth={800}
      naturalSlideHeight={1000}
      totalSlides={listOfCharacters.length}
      currentSlide={currentSlide}
    >
      <Slider className="w-[300px] lg:w-[500px]">
        {listOfCharacters.map((character, index) => (
          <Slide key={index} index={index} className="w-full h-full">
            <div className="flex flex-col items-center w-full gap-3 lg:gap-5 h-full">
              <div className="max-h-[200px] lg:max-h-[400px] overflow-hidden">
                <Image
                  hasMasterSpinner
                  className="h-full w-full "
                  src={character.media.src}
                  alt={character.media.alt}
                />
              </div>
              <p className="Headline">{character.job}</p>
              <p className=" Headline">Staring Health: {character.maxHealth}</p>
              <p className=" Headline">Starting Mana: {character.mana}</p>
              <button
                className="bg-white text-black px-5 text-2xl lg:text-3xl rounded"
                onClick={() => context.setCharacter(listOfCharacters[index])}
              >
                Choose
              </button>
            </div>
          </Slide>
        ))}
      </Slider>
      <div className="flex justify-between mt-4">
        <ButtonBack onClick={handleBack} className="Headline" disabled={false}>
          Back
        </ButtonBack>
        <ButtonNext onClick={handleNext} className="Headline" disabled={false}>
          Next
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};
