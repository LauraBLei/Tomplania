import { useContext, useState } from "react";
import { GameContext } from "../hooks/gameContext";
import { NPCList } from "../gameData/NPC";
import { LocationList } from "../gameData/locations";
import { QuestList } from "../gameData/quests/quests";
import { QuestStages } from "../gameData/Enums";
import { CharacterContext } from "../hooks/characterContext";
import { QuestItemNames } from "../gameData/quests/questItems";
import { InventoryContext } from "../hooks/inventoryContext";

export const NPCLocation = () => {
  // const context = useContext(GameContext);
  const {
    NPC,
    selectedQuest,
    setBgImg,
    setLocation,
    setNPC,
    PrevLocation,
    setSelectedQuest,
    activeQuests,
    startQuest,
  } = useContext(GameContext);
  const Quest = QuestList.filter((quest) => quest.name === selectedQuest)[0];
  const npc = NPCList.filter((npc) => npc.type == NPC)[0];
  const [page, setPage] = useState(0);
  const activeQuest = activeQuests.filter((quest) => quest.npc == npc.name)[0]; // TODO

  console.log("xxxxx", activeQuests);

  const handleLeave = () => {
    setBgImg(LocationList[PrevLocation].media);
    setLocation(PrevLocation);
    setNPC(null);
    npc.hasVisited = true;
    setSelectedQuest("");
  };

  const handleAcceptQuest = () => {
    if (activeQuests === null) {
      Quest.status = QuestStages.InProgress;
      startQuest(Quest);
      setSelectedQuest("");
    } else alert("You already have an unfinished quest!");
  };

  console.log(activeQuests);

  return (
    <div className="flex flex-col gap-5 max-w-xl">
      <div className="flex place-self-start w-full">
        <button
          className="button"
          onClick={() => {
            handleLeave();
          }}
        >
          Leave
        </button>
      </div>
      {selectedQuest ? (
        <div className="flex flex-col justify-center items-center gap-6 mb-4">
          <h3 className="font-Courier font-bold text-3xl">{selectedQuest}</h3>
          <div className="flex flex-col items-center">
            <p className="font-Courier text-2xl">{Quest.description[page]}</p>
            {page < Quest.description.length - 1 ? (
              <button
                className="button place-self-end"
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center">
            <h3 className="font-Courier font-bold text-3xl">
              Reward: {Quest.reward}
            </h3>
            <img
              className="w-[50px]"
              src="./assets/items/coins/gold.png"
              alt="Image og gold coins"
            />
          </div>
          <div className="flex gap-6">
            <button onClick={() => handleAcceptQuest()} className="button">
              Accept
            </button>
            <button
              onClick={() => {
                handleLeave();
              }}
              className="button"
            >
              Decline
            </button>
          </div>
        </div>
      ) : activeQuest?.status === QuestStages.InProgress &&
        activeQuest?.npc === npc.type ? (
        <QuestInProgress />
      ) : npc.hasVisited === false ? (
        <FirstVisit />
      ) : (
        <SecondVisit />
      )}
    </div>
  );
};

const QuestInProgress = () => {
  const { NPC, activeQuests, removeQuest } = useContext(GameContext);
  const { changeGold } = useContext(CharacterContext);
  const { inventory, removeItem } = useContext(InventoryContext);
  const npc = NPCList.filter((npc) => npc.type == NPC)[0];

  const handleDeliverQuest = () => {
    const activeQuest = activeQuests.filter(
      (quest) => quest.npc == npc.name
    )[0]; // TODO
    const QuestItem = activeQuest.questItem;
    const hasAllItems = QuestItem.every((questItem) =>
      Array.from(inventory).some(([item]) => item.name === questItem)
    );
    if (hasAllItems) {
      Array.from(inventory).forEach(([item]) =>
        QuestItem.includes(item.name as QuestItemNames)
          ? removeItem(item)
          : null
      );
      if (activeQuest) {
        changeGold(activeQuest.reward);
        activeQuest.status = QuestStages.Completed;
      }
      removeQuest(activeQuest);
    } else alert("You do not have all the items to complete the quest!");
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-Courier text-2xl">{npc.text.QuestInProgress}</p>
      <button className="button" onClick={() => handleDeliverQuest()}>
        Deliver Quest
      </button>
    </div>
  );
};

const FirstVisit = () => {
  const { setSelectedQuest, NPC } = useContext(GameContext);
  const npc = NPCList.filter((e) => e.type == NPC)[0];
  npc.hasVisited = true;
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="font-Courier text-3xl mb-4">{npc.text.startText}</p>
      <div className="flex gap-4 items-center">
        <h3 className="font-Courier text-3xl">Quests:</h3>
        {npc.quests.map((questName, i) => (
          <button
            key={i}
            className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
            onClick={() => {
              setSelectedQuest(questName);
            }}
          >
            {questName}
          </button>
        ))}
      </div>
    </div>
  );
};

const SecondVisit = () => {
  const { setSelectedQuest } = useContext(GameContext);
  const { NPC } = useContext(GameContext);
  const npc = NPCList.filter((e) => e.type == NPC)[0];
  const notCompletedQuests = QuestList.filter(
    (quest) =>
      quest.status != QuestStages.Completed && npc.quests.includes(quest.name)
  );
  console.log("List of quest:", notCompletedQuests);

  return (
    <div className="flex flex-col gap-6 mb-5">
      <p className="font-Courier text-3xl">{npc.text.hasVisitedText}</p>
      <div className="flex gap-4 items-center">
        <h3 className="font-Courier text-3xl">Quests:</h3>
        {notCompletedQuests.map((quest, i) => (
          <button
            key={i}
            className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
            onClick={() => {
              setSelectedQuest(quest.name);
            }}
          >
            {quest.name}
          </button>
        ))}
      </div>
    </div>
  );
};
