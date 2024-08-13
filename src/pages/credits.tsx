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
      <div className="bg-black backdrop-blur-sm bg-opacity-15 max-w-[600px] max-h-[600px] p-4 overflow-y-auto px-11 py-6">
        <div className="w-full gap-8 h-full flex flex-col items-center text-center">
          <div className="flex flex-col gap-3 mb-48 mt-14">
            <p className="font-Courier text-3xl text-blue font-bold">A</p>
            <h1 className="font-Courier text-3xl lg:text-7xl text-blue font-bold">
              Lei Dev
            </h1>
            <p className="font-Courier text-3xl text-blue font-bold">
              Production
            </p>
          </div>
          <h2 className="Headline text-blue">The End</h2>
          <p className="TextDark">Thank you for playing my game!</p>
          <p className="TextDark">
            This Game was made to practice my React and Typescript.
          </p>
          <div className="flex flex-col gap-4">
            <h3 className="Headline text-blue">Special Thanks To:</h3>
            <div className="flex flex-col gap-4">
              <p className="TextDark">Lasse</p>
              <p className="TextDark">
                For invaluable guidance and support in overcoming coding
                challenges and for teaching React and TypeScript.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="Headline text-blue">Character Inspirations</h2>
            <div className="flex flex-col gap-6">
              <div>
                <p className="TextDark">Ella</p>
                <p className="TextDark">Inspiration for Ella</p>
              </div>
              <div>
                <p className="TextDark">Bård</p>
                <p className="TextDark">Inspiration for Bård The Pig</p>
              </div>
              <div>
                <p className="TextDark">Frederik(My nephew)</p>
                <p className="TextDark">
                  Inspiration for Frederik the young boy{" "}
                </p>
              </div>
              <div>
                <p className="TextDark">Lums</p>
                <p className="TextDark">Inspiration for Lums The Chocobo </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="Headline text-blue">NPC and Content Creation</h2>
            <div>
              <p className="TextDark">Ella</p>
              <p className="TextDark">
                For designing the NPC Eloween, crafting her quests, and creating
                the related enemies.
              </p>
            </div>
            <div>
              <p className="TextDark">Jannie & Frederik</p>
              <p className="TextDark">
                For developing the NPC Frederik and contributing ideas for his
                quests.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="Headline text-blue">Testers</h2>
            <div className="flex flex-wrap gap-20 items-center justify-center p-10">
              <p className="TextDark">Lums</p>
              <p className="TextDark">Ella</p>
              <p className="TextDark">Panchi</p>
              <p className="TextDark">Ranta</p>
              <p className="TextDark">Raiyan</p>
            </div>
            <p className="TextDark">
              Your feedback and testing were crucial in refining the game.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h2 className="Headline text-blue">Content Providers</h2>
            <div className="flex justify-between">
              <p className="TextDark">Icons:</p>
              <p className="TextDark">CraftPix</p>
            </div>
            <div className="flex justify-between">
              <p className="TextDark">AI Images:</p>
              <p className="TextDark">Pixlr</p>
            </div>
            <div className="flex justify-between">
              <p className="TextDark">Game Music:</p>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=PxUEWuDec4k"
                className="TextDark"
              >
                {" "}
                Youtube
              </a>
            </div>
            <div className="flex justify-between">
              <p className="TextDark">Combat Music:</p>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=USBucuZiarA&list=PLfP6i5T0-DkLiR-gmzeFGY1S-10Ur0wso"
                className="TextDark"
              >
                Youtube
              </a>
            </div>
            <div className="flex justify-between mb-6">
              <p className="TextDark">Final Boss Music:</p>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=USBucuZiarA&list=PLfP6i5T0-DkLiR-gmzeFGY1S-10Ur0wso"
                className="TextDark"
              >
                Youtube
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="Headline text-blue">Interested in Collaborating?</p>
            <p className="TextDark">
              If you're interested in working with me on future projects, feel
              free to reach out! I'm always excited to connect with new talent
              and explore creative opportunities together.
            </p>
            <div className="mb-5">
              <p className="TextDark">
                Reach me through my website{" "}
                <a
                  target="_blank"
                  className="TextDark underline"
                  href="https://leidev.net/"
                >
                  Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="rounded-md bg-blue TextDark text-white p-3"
        onClick={() => deleteCharacter()}
      >
        End Game
      </Link>
    </div>
  );
};

const deleteCharacter = () => {
  localStorage.removeItem("characterStats");
  localStorage.removeItem("Quests");
};
