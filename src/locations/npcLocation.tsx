import { useContext, useState } from "react";
import { GameContext } from "../hooks/gameContext";
import { NPCList } from "../gameData/NPC";
import { LocationList } from "../gameData/locations";
import { QuestList, QuestStages } from "../gameData/quests";
import { CharacterContext } from "../hooks/characterContext";
import { QuestItemNames } from "../gameData/questItems";

export const NPCLocation = () => {
  const context = useContext(GameContext);
  // const npc = NPCList.filter((e) => e.name == context.NPC)[0];
  const Quest = QuestList.filter((e) => e.name === context.selectedQuest)[0];
  const npc = NPCList.filter((e) => e.type == context.NPC)[0];

  // const ActiveQuest = context.activeQuest;
  const bgText = {
    backgroundImage: `url("./assets/bg-images/textbg.png")`,
  };

  const [page, setPage] = useState(0);

  const handleLeave = () => {
    context.setBgImg(LocationList[context.PrevLocation].media);
    context.setLocation(context.PrevLocation);
    context.setNPC(null);
    npc.hasVisited = true;
    context.setSelectedQuest("");
  };

  const handleAcceptQuest = () => {
    if (context.activeQuest === null) {
      Quest.status = QuestStages.InProgress;
      context.setActiveQuest(Quest);
      context.setSelectedQuest("");
    } else alert("You already have an unfinished quest!");
  };

  return (
    <div
      className="bg-no-repeat bg-cover w-full h-auto px-[60px] py-10 pt-[100px] flex flex-col items-center gap-6 absolute bottom-0 mb-[-350px]"
      style={bgText}
    >
      {}
      <div className="place-self-start flex gap-10">
        <button
          className="button"
          onClick={() => {
            handleLeave();
          }}
        >
          Leave
        </button>
        <h2 className="font-uncial text-3xl">
          {npc.hasVisited ? npc.name : npc.type}
        </h2>
      </div>
      {context.selectedQuest ? (
        <div className="flex flex-col justify-center items-center gap-6 mb-4">
          <h3 className="font-Courier font-bold text-3xl">
            {context.selectedQuest}
          </h3>
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
      ) : context.activeQuest?.status === QuestStages.InProgress ? (
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
  const context = useContext(GameContext);
  const { activeQuest } = useContext(GameContext);
  const CContext = useContext(CharacterContext);
  const npc = NPCList.filter((e) => e.name == context.NPC)[0];
  const QuestItem = context.activeQuest?.questItem;
  const hasAllItems = QuestItem?.every((item) =>
    CContext.Inventory.some((invItem) => invItem.name === item)
  );
  console.log("QuestItem:", QuestItem);

  const handleDeliverQuest = () => {
    if (hasAllItems) {
      const updatedInventory = CContext.Inventory.filter(
        (invItem) => !QuestItem?.includes(invItem.name as QuestItemNames)
      );
      CContext.setInventory(updatedInventory);
      if (activeQuest) {
        CContext.setGold(CContext.gold + activeQuest.reward);
        activeQuest.status = QuestStages.Completed;
      }
      context.setActiveQuest(null);
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
  const context = useContext(GameContext);
  const npc = NPCList.filter((e) => e.type == context.NPC)[0];
  npc.hasVisited = true;
  return (
    <div className="flex flex-col gap-6">
      <p className="font-Courier text-3xl">{npc.text.startText}</p>
      <div className="flex gap-4 items-center">
        <h3 className="font-Courier text-3xl">Quests:</h3>
        {npc.quests.map((questName, i) => (
          <button
            key={i}
            className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
            onClick={() => {
              context.setSelectedQuest(questName);
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
    (e) => e.status != QuestStages.Completed
  );
  console.log("List of quest:", notCompletedQuests);

  return (
    <div className="flex flex-col gap-6">
      <p className="font-Courier text-3xl">{npc.text.hasVisitedText}</p>
      <div className="flex gap-4 items-center">
        <h3 className="font-Courier text-3xl">Quests:</h3>
        {notCompletedQuests.map((e, i) => (
          <button
            key={i}
            className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
            onClick={() => {
              setSelectedQuest(e.name);
            }}
          >
            {e.name}
          </button>
        ))}
      </div>
    </div>
  );
};
