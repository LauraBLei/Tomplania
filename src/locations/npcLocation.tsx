import { useContext, useState } from "react";
import { GameContext } from "../hooks/gameContext";
import { NPCList } from "../gameData/NPC";
import { LocationList } from "../gameData/locations";
import { QuestList } from "../gameData/quests/quests";
import { QuestStages } from "../gameData/Enums";
import { CharacterContext } from "../hooks/characterContext";

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
    acceptedQuest,
    deliveredQuest,
    setAcceptedQuest,
    setDeliveredQuest,
  } = useContext(GameContext);
  const { lvl } = useContext(CharacterContext);
  const Quest = QuestList.filter((quest) => quest.name === selectedQuest)[0];
  const npc = NPCList.filter((npc) => npc.type == NPC)[0];
  const [page, setPage] = useState(0);
  const activeQuest = activeQuests.filter((quest) => quest.npc == npc.type)[0]; // TODO
  const Quests = QuestList.filter(
    (quest) => quest.npc === npc.type && quest.lvl <= lvl
  );

  const handleLeave = () => {
    setBgImg(LocationList[PrevLocation].media);
    setLocation(PrevLocation);
    setNPC(null);
    npc.hasVisited = true;
    setSelectedQuest("");
    setAcceptedQuest(false);
    setDeliveredQuest(false);
  };

  const handleAcceptQuest = () => {
    Quest.status = QuestStages.InProgress;
    startQuest(Quest);
    setSelectedQuest("");
    setAcceptedQuest(true);
  };

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
          <h3 className="Headline text-blue ">
            {selectedQuest} (Level: {Quest.lvl})
          </h3>
          <div className="flex flex-col items-center">
            <p className="TextDark">{Quest.description[page]}</p>
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
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <h3 className="Headline text-blue">Reward: {Quest.reward}</h3>
              <img
                className="w-[25px] lg:w-[50px]"
                src="./assets/items/coins/gold.png"
                alt="Image og gold coins"
              />
            </div>
            <div className="flex items-center">
              <h3 className="Headline text-blue">{Quest.xp} XP</h3>
            </div>
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
      ) : acceptedQuest ? (
        <AcceptedQuest />
      ) : deliveredQuest ? (
        <DeliveredQuest />
      ) : activeQuest?.status === QuestStages.InProgress &&
        activeQuest?.npc === npc.type ? (
        <QuestInProgress />
      ) : npc.hasVisited === false ? (
        <FirstVisit />
      ) : Quests.length === 0 ? (
        <NoAvailableQuests />
      ) : (
        <SecondVisit />
      )}
    </div>
  );
};

const QuestInProgress = () => {
  const { NPC, deliverQuest, activeQuests } = useContext(GameContext);
  const { name } = useContext(CharacterContext);
  const [page, setPage] = useState(0);

  const npc = NPCList.filter((npc) => npc.type == NPC)[0];
  const Quest = activeQuests.filter((quest) => quest.npc === npc.type)[0]; // TODO

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="TextDark">
        {npc.text.QuestInProgress[page].replaceAll("{name}", name)}
      </p>
      {page < npc.text.startText.length - 1 ? (
        <button
          className="button place-self-end"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      ) : (
        ""
      )}
      <button className="button" onClick={() => deliverQuest(Quest)}>
        Deliver Quest
      </button>
    </div>
  );
};

const FirstVisit = () => {
  const { setSelectedQuest, NPC } = useContext(GameContext);
  const { lvl, name } = useContext(CharacterContext);
  const [page, setPage] = useState(0);
  const npc = NPCList.filter((npc) => npc.type == NPC)[0];
  const Quests = QuestList.filter(
    (quest) => quest.npc === npc.type && quest.lvl <= lvl
  );
  npc.hasVisited = true;
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="TextDark">
        {npc.text.startText[page].replaceAll("{name}", name)}
      </p>
      {page < npc.text.startText.length - 1 ? (
        <button
          className="button place-self-end"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      ) : (
        ""
      )}
      <div className="flex gap-4 items-center flex-wrap">
        <h3 className="font-Courier text-xl lg:text-3xl">Quests:</h3>
        {Quests.map((Quest, i) => (
          <button
            key={i}
            className="button"
            onClick={() => {
              setSelectedQuest(Quest.name);
            }}
          >
            {Quest.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const SecondVisit = () => {
  const { setSelectedQuest, NPC } = useContext(GameContext);
  const { lvl, name } = useContext(CharacterContext);
  const [page, setPage] = useState(0);

  const npc = NPCList.filter((e) => e.type == NPC)[0];
  const Quests = QuestList.filter(
    (quest) => quest.npc === npc.type && quest.lvl <= lvl
  );

  const notCompletedQuests = Quests.filter(
    (quest) =>
      quest.status != QuestStages.Completed && npc.quests.includes(quest.name)
  );

  return (
    <div className="flex flex-col gap-6 mb-5">
      <p className="TextDark">
        {npc.text.hasVisitedText[page].replaceAll("{name}", name)}
      </p>
      {page < npc.text.startText.length - 1 ? (
        <button
          className="button place-self-end"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      ) : (
        ""
      )}
      <div className="flex gap-4 items-center flex-wrap">
        <h3 className="Headline text-blue">Quests:</h3>
        {notCompletedQuests.map((quest, i) => (
          <button
            key={i}
            className="button"
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

const AcceptedQuest = () => {
  const { NPC } = useContext(GameContext);
  const npc = NPCList.filter((npc) => npc.type == NPC)[0];
  const { name } = useContext(CharacterContext);
  const [page, setPage] = useState(0);

  return (
    <div>
      <p className="TextDark">
        {npc.text.QuestAccepted[page].replaceAll("{name}", name)}
      </p>
      {page < npc.text.startText.length - 1 ? (
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
  );
};

const DeliveredQuest = () => {
  const { NPC } = useContext(GameContext);
  const { name } = useContext(CharacterContext);
  const npc = NPCList.filter((npc) => npc.type == NPC)[0];
  const [page, setPage] = useState(0);

  return (
    <div>
      <p className="TextDark">
        {npc.text.QuestDelivered[page].replaceAll("{name}", name)}
      </p>
      {page < npc.text.startText.length - 1 ? (
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
  );
};

const NoAvailableQuests = () => {
  const { NPC } = useContext(GameContext);
  const { name } = useContext(CharacterContext);
  const [page, setPage] = useState(0);

  const npc = NPCList.filter((npc) => npc.type == NPC)[0];
  return (
    <div>
      <p className="TextDark">
        {npc.text.NoAvailableQuests[page].replaceAll("{name}", name)}
      </p>
      {page < npc.text.startText.length - 1 ? (
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
  );
};
