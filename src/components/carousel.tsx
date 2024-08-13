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
      return prevSlide === listOfCharacters.length - 1 ? 0 : prevSlide + 1;
    });
  };

  const handleBack = () => {
    setCurrentSlide((prevSlide) => {
      return prevSlide === 0 ? listOfCharacters.length - 1 : prevSlide - 1;
    });
  };

  const { setCharacter, setMaxHP, setMaxMana, setCurrentMana, setCurrentHP } =
    useContext(CharacterContext);

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
              <p className=" Headline">
                Starting Health: {character.maxHealth}
              </p>
              <p className=" Headline">Starting Mana: {character.mana}</p>
              <button
                className="chooseButton"
                onClick={() => {
                  alert(
                    "You have chosen The " +
                      character.job +
                      " as your character!"
                  );
                  setCharacter(listOfCharacters[index]);
                  setMaxMana(character.mana);
                  setMaxHP(character.maxHealth);
                  setCurrentHP(character.maxHealth);
                  setCurrentMana(character.mana);
                }}
              >
                Choose
              </button>
            </div>
          </Slide>
        ))}
      </Slider>
      <div className="flex justify-between mt-4">
        <ButtonBack onClick={handleBack} disabled={false}>
          <img
            className="arrow"
            src="./assets/bg-images/leftArrow.png"
            alt="Left arrow"
          />
        </ButtonBack>
        <ButtonNext onClick={handleNext} className="Headline" disabled={false}>
          <img
            className="arrow"
            src="./assets/bg-images/rightArrow.png"
            alt="Right arrow"
          />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};
