import { Carousel } from "../components/carousel";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CharacterContext } from "../hooks/characterContext";

export const CharacterSelection = () => {
  const context = useContext(CharacterContext);
  const bgText = {
    backgroundImage: `url("./assets/bg-images/GameWorld.png")`,
  };

  return (
    <>
      <div
        className="relative flex justify-center items-center h-screen bg-no-repeat bg-cover text-white font-uncial"
        style={bgText}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="z-10 flex flex-col items-center gap-6 w-full">
          <h1 className="text-xl lg:text-8xl text-center">
            Choose Your Character
          </h1>
          <Carousel />
          <div className="flex flex-col gap-5 items-center lg:mt-5">
            <label htmlFor="" className="text-xl lg:text-5xl">
              Character Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full text-xl lg:text-2xl text-black px-3 py-2"
              onChange={(event) => context?.setName(event.target.value)}
              required
            />
            <Link to="/Game" className="text-3xl lg:text-6xl">
              {" "}
              Play
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
