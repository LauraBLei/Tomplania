import { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../hooks/gameContext";

export const StartPage = () => {
  const bgText = {
    backgroundImage: `url("./assets/bg-images/GameWorld.png")`,
  };
  const saveFile = localStorage.getItem("characterStats");
  const { startSavedGame } = useContext(GameContext);
  return (
    <>
      <div
        className="relative flex justify-center items-center h-screen bg-no-repeat bg-cover text-white font-uncial"
        style={bgText}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="z-10 flex flex-col items-center gap-6">
          <h1 className="text-6xl lg:text-8xl">Tomplania</h1>
          {saveFile && (
            <Link
              to="/Game"
              className="text-3xl lg:text-6xl"
              onClick={() => startSavedGame()}
            >
              Continue
            </Link>
          )}
          <Link className="text-3xl lg:text-6xl" to="/Character">
            Play
          </Link>
        </div>
      </div>
    </>
  );
};
