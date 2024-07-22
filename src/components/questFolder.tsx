import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";

export const QuestFolder = () => {
  const context = useContext(GameContext);

  const quest = context.activeQuest;

  const abandonQuest = () => {
    context.setActiveQuest(null);
  };

  return (
    <div>
      {quest === null ? (
        <div className="my-6">
          <h3 className="font-Courier font-bold text-3xl text-white">
            You have no active Quests
          </h3>
        </div>
      ) : (
        <div>
          <h1 className="font-Courier font-bold text-2xl text-white">
            {quest?.name}
          </h1>
          <div className="ml-5 flex flex-col gap-4 mt-2">
            <p className="font-Courier font-bold text-1xl text-white">
              {quest?.description}
            </p>
            <div className="flex items-center">
              <h3 className="font-Courier font-bold text-2xl text-white">
                Reward: {quest?.reward}
              </h3>
              <img
                className="w-[30px]"
                src="./assets/items/coins/gold.png"
                alt="Image og gold coins"
              />
            </div>
            <button onClick={() => abandonQuest()} className="bg-white button">
              Abandon Quest
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
