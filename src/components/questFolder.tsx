import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { Quest } from "../gameData/objects/Quest";

export const QuestFolder = () => {
  const { activeQuests } = useContext(GameContext);

  return (
    <div>
      {activeQuests.length === 0 ? (
        <div className="my-6">
          <h3 className="TextDark">You have no active Quests</h3>
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

  return (
    <details>
      <summary className="Headline text-blue">{activeQuest?.name}</summary>
      <div className="ml-5 flex flex-col gap-4 mt-2">
        <p className="TextDark">{activeQuest?.description}</p>
        <div className="flex items-center gap-4">
          <h3 className="TextDark">Reward: </h3>

          <div className="flex items-center">
            <h3 className="TextDark">{activeQuest?.reward}</h3>
            <img
              className="w-[30px]"
              src="./assets/items/coins/gold.png"
              alt="Image og gold coins"
            />
          </div>
          <h3 className="TextDark"> {activeQuest?.reward} XP</h3>
        </div>
        <button onClick={() => abandonQuest(activeQuest)} className="button">
          Abandon Quest
        </button>
      </div>
    </details>
  );
};
