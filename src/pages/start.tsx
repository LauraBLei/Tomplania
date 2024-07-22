import { Link } from "react-router-dom";

export const StartPage = () => {
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
        <div className="z-10 flex flex-col items-center gap-6">
          <h1 className="text-8xl">Tomplania</h1>
          <Link className="text-6xl" to="/Character">
            Play
          </Link>
          <Link className="text-6xl" to="/Settings">
            Settings
          </Link>
        </div>
      </div>
    </>
  );
};
