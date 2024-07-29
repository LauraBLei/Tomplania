import { createContext, useContext, useState } from "react";
import { LocationList } from "../gameData/locations";
import { NPCNames, Locations, QuestStages } from "../gameData/Enums";
import { Media } from "../gameData/character/characters";
import { Item } from "../gameData/objects/Item";
import { Quest } from "../gameData/objects/Quest";
import { InventoryContext } from "./inventoryContext";
import { QuestItemNames } from "../gameData/quests/questItems";
import { CharacterContext } from "./characterContext";

type GameContextType = {
  location: Locations;
  fighting: boolean;
  PrevLocation: Locations;
  MonsterHP: number;
  NPC: NPCNames | null;
  // activeQuest: Quest | null;
  bgImage: Media;
  selectedQuest: string;
  item: Item | null;
  activeQuests: Quest[];

  setLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setFighting: React.Dispatch<React.SetStateAction<boolean>>;
  setPrevLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setMonsterHP: React.Dispatch<React.SetStateAction<number>>;
  setNPC: React.Dispatch<React.SetStateAction<NPCNames | null>>;
  // setActiveQuest: React.Dispatch<React.SetStateAction<Quest | null>>;
  setBgImg: React.Dispatch<React.SetStateAction<Media>>;
  setSelectedQuest: React.Dispatch<React.SetStateAction<string>>;
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
  startQuest: (quest: Quest) => void;
  removeQuest: (quest: Quest) => void;
  deliverQuest: (quest: Quest) => void;
};
export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const GameProvider = ({ children }: ContextProviderProps) => {
  const { inventory, removeItem } = useContext(InventoryContext);
  const { changeGold } = useContext(CharacterContext);
  const [location, setLocation] = useState(Locations.BlackVoid);
  const [fighting, setFighting] = useState(false);
  const [PrevLocation, setPrevLocation] = useState(Locations.BlackVoid);
  const [MonsterHP, setMonsterHP] = useState(100);
  const [NPC, setNPC] = useState<NPCNames | null>(null);
  // const [activeQuest, setActiveQuest] = useState<Quest | null>(null);
  const [activeQuests, setActiveQuests] = useState<Quest[]>([]);
  const [bgImage, setBgImg] = useState(LocationList[Locations.BlackVoid].media);
  const [selectedQuest, setSelectedQuest] = useState<string>("");
  const [item, setItem] = useState<Item | null>(null);

  const startQuest = (quest: Quest) => {
    setActiveQuests([...activeQuests, quest]);
  };

  const removeQuest = (quest: Quest) => {
    activeQuests.filter;
    setActiveQuests(activeQuests.filter((q) => q.name != quest.name));
  };

  const deliverQuest = (quest: Quest) => {
    const hasAllItems = quest.questItem.every((questItem) =>
      Array.from(inventory).some(([item]) => item.name === questItem)
    );
    if (hasAllItems) {
      Array.from(inventory).forEach(([item]) =>
        quest.questItem.includes(item.name as QuestItemNames)
          ? removeItem(item)
          : null
      );
      if (quest) {
        changeGold(quest.reward);
        quest.status = QuestStages.Completed;
      }
      removeQuest(quest);
    } else alert("You do not have all the items to complete the quest!");
  };

  return (
    <GameContext.Provider
      value={{
        deliverQuest,
        activeQuests,
        startQuest: startQuest,
        removeQuest: removeQuest,
        location,
        setLocation,
        fighting,
        setFighting,
        PrevLocation,
        setPrevLocation,
        MonsterHP,
        setMonsterHP,
        NPC,
        setNPC,
        // setActiveQuest,
        bgImage,
        setBgImg,
        selectedQuest,
        setSelectedQuest,
        item,
        setItem,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
