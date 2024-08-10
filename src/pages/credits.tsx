import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { Link } from "react-router-dom";

export const CreditPage = () => {
  const { bgImage } = useContext(GameContext);
  const bgImageStyle = {
    backgroundImage: `url(${bgImage.src})`,
  };

  return (
    <div
      style={bgImageStyle}
      className="h-screen bg-no-repeat bg-cover flex flex-col items-center justify-center gap-6"
    >
      <div className="bg-black bg-opacity-65 max-w-[600px] max-h-[600px] p-4 overflow-y-auto">
        <div className="w-full h-full flex flex-col items-center text-center gap-4">
          <h2 className="Headline">The End</h2>
          <p className="TextLight">Thank you for playing my game!</p>
          <p className="TextLight">
            This Game was made to practice my React and Typescript.
          </p>
          <h3 className="Headline">Special Thanks To:</h3>
          <p className="TextLight">
            Lasse : For helping me learn React and Typescript
          </p>
          <p className="TextLight">
            Ella : For making the NPC Eloween, and her quests!
          </p>
          <p className="TextLight">
            Craftpix.net : For an amazing selection of icons for free!
          </p>
        </div>
      </div>
      <Link to="/" className="rounded-md bg-blue TextLight text-white p-3">
        End Game
      </Link>
    </div>
  );
};
