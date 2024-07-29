import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { Quest } from "../gameData/objects/Quest";

export const QuestFolder = () => {
  // const { activeQuest, setActiveQuest } = useContext(GameContext);
  const { activeQuests } = useContext(GameContext);

  console.log(activeQuests);

  // const abandonQuest = () => {
  //   setActiveQuest(null);
  // };

  return (
    <div>
      {activeQuests.length === 0 ? (
        <div className="my-6">
          <h3 className="font-Courier font-bold text-3xl text-white">
            You have no active Quests
          </h3>
        </div>
      ) : (
        <>
          {activeQuests.map((quest) => {
            return <ShowQuestInfo activeQuest={quest} />;
          })}
        </>
      )}
    </div>
  );
};

interface ShowQuestInfoProps {
  activeQuest: Quest;
}

const ShowQuestInfo = ({ activeQuest }: ShowQuestInfoProps) => {
  const { removeQuest: abandonQuest } = useContext(GameContext);

  console.log(activeQuest);

  return (
    <details>
      <summary className="Headline">{activeQuest?.name}</summary>
      <div className="ml-5 flex flex-col gap-4 mt-2">
        <p className="Text">{activeQuest?.description}</p>
        <div className="flex items-center">
          <h3 className="Text">Reward: {activeQuest?.reward}</h3>
          <img
            className="w-[30px]"
            src="./assets/items/coins/gold.png"
            alt="Image og gold coins"
          />
        </div>
        <button
          onClick={() => abandonQuest(activeQuest)}
          className="bg-white button"
        >
          Abandon Quest
        </button>
      </div>
    </details>
  );
};
