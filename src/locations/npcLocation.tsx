import { useContext, useState } from "react";
import { GameContext } from "../hooks/gameContext";
import { NPCList } from "../gameData/NPC";
import { LocationList } from "../gameData/locations";
import { QuestList } from "../gameData/quests/quests";
import { QuestStages } from "../gameData/enum";
import { CharacterContext } from "../hooks/characterContext";
import { QuestItemNames } from "../gameData/quests/questItems";

export const NPCLocation = () => {
  const context = useContext(GameContext);
  // const npc = NPCList.filter((e) => e.name == context.NPC)[0];
  const Quest = QuestList.filter((e) => e.name === context.selectedQuest)[0];
  const npc = NPCList.filter((e) => e.type == context.NPC)[0];

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

  console.log(context.activeQuest);

  return (
    <div className="flex flex-col items-center mt-[-70px] ">
      <img
        className="w-[1200px] z-10 relative"
        src="./assets/bg-images/TextField.png"
        alt="Decoration for text field"
      />
      <div className="bg-beige border-8 px-5 border-blue max-w-[800px] w-full mt-[-130px] z-0 flex flex-col gap-4 items-center ">
        <div className="place-self-start  mt-28 ml-3 w-full">
          <button
            className="button"
            onClick={() => {
              handleLeave();
            }}
          >
            Leave
          </button>
        </div>
        <h2 className="font-uncial text-3xl text-center mb-3">
          {npc.hasVisited ? npc.name : npc.type}
        </h2>
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
        ) : context.activeQuest?.status === QuestStages.InProgress &&
          context.activeQuest.NPC === npc.type ? (
          <QuestInProgress />
        ) : npc.hasVisited === false ? (
          <FirstVisit />
        ) : (
          <SecondVisit />
        )}
      </div>
    </div>
  );
};

const QuestInProgress = () => {
  const context = useContext(GameContext);
  const { activeQuest } = useContext(GameContext);
  const CContext = useContext(CharacterContext);
  const npc = NPCList.filter((e) => e.type == context.NPC)[0];
  const QuestItem = context.activeQuest?.questItem;
  const hasAllItems = QuestItem?.every((item) =>
    CContext.Inventory.some((invItem) => invItem.name === item)
  );
  console.log("QuestItem:", QuestItem);
  console.log("NPC", npc);
  console.log("NPC context", context.NPC);

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
    <div className="flex flex-col gap-6 mb-5">
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
    <div className="flex flex-col gap-6 mb-5">
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
