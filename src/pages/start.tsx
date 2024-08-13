import { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../hooks/gameContext";
import { MusicControl } from "../components/musicControl";

export const StartPage = () => {
  const bgText = {
    backgroundImage: `url("./assets/bg-images/GameWorld.png")`,
  };
  const saveFile = localStorage.getItem("characterStats");
  const { startSavedGame, newGame } = useContext(GameContext);

  return (
    <>
      <div
        className="relative flex flex-col  h-screen bg-no-repeat bg-cover text-white font-uncial"
        style={bgText}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="place-self-end z-20 m-4">
          <details>
            <summary className="list-none">
              <img
                className="icon"
                src="./assets/bg-images/music.png"
                alt="Music Icon"
              />
            </summary>
            <div className="InformationUI overflow-y-auto w-full bg-beige px-9 py-4 border-8 border-blue h-auto max-h-[600px]">
              <MusicControl />
            </div>
          </details>
        </div>
        <div className="z-10 flex flex-col items-center gap-6 h-full justify-center">
          <h1 className="text-6xl lg:text-8xl">Tomplania</h1>
          {saveFile && (
            <Link
              to="/Game"
              className="menuButtons"
              onClick={() => startSavedGame()}
            >
              Continue
            </Link>
          )}
          <Link
            className="menuButtons"
            to="/Character"
            onClick={() => newGame()}
          >
            New Game
          </Link>
        </div>
      </div>
    </>
  );
};
