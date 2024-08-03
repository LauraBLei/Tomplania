import { createContext, useContext, useState } from "react";
import { LocationList } from "../gameData/locations";
import { NPCNames, Locations, QuestStages } from "../gameData/Enums";
import { Media } from "../gameData/character/characters";
import { Item } from "../gameData/objects/Item";
import { Quest } from "../gameData/objects/Quest";
import { InventoryContext } from "./inventoryContext";
import { QuestItemNames } from "../gameData/quests/questItems";
import { CharacterContext } from "./characterContext";
import { Monster } from "../gameData/Enemies/enemies";
import { Skill } from "../gameData/character/skills";

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
  acceptedQuest: boolean;
  deliveredQuest: boolean;
  selectedItem: Item | Skill | null;

  setLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setFighting: React.Dispatch<React.SetStateAction<boolean>>;
  setPrevLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setMonsterHP: React.Dispatch<React.SetStateAction<number>>;
  setNPC: React.Dispatch<React.SetStateAction<NPCNames | null>>;
  setBgImg: React.Dispatch<React.SetStateAction<Media>>;
  setSelectedQuest: React.Dispatch<React.SetStateAction<string>>;
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
  setAcceptedQuest: React.Dispatch<React.SetStateAction<boolean>>;
  setDeliveredQuest: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItem: React.Dispatch<React.SetStateAction<Item | Skill | null>>;

  startQuest: (quest: Quest) => void;
  removeQuest: (quest: Quest) => void;
  deliverQuest: (quest: Quest) => void;
  handlePurchase: (item: Item) => void;

  fight: (damage: number, mana: number, attack: number, enemy: Monster) => void;
  leave: () => void;
  handleRespawn: () => void;
  changeLocation: (
    newLocation?: Locations,
    newBgImg?: Media,
    isFighting?: boolean,
    newNpc?: NPCNames
  ) => void;
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
  const [activeQuests, setActiveQuests] = useState<Quest[]>([]);
  const [bgImage, setBgImg] = useState(LocationList[Locations.BlackVoid].media);
  const [selectedQuest, setSelectedQuest] = useState<string>("");
  const [item, setItem] = useState<Item | null>(null);
  const [acceptedQuest, setAcceptedQuest] = useState(false);
  const [deliveredQuest, setDeliveredQuest] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const {
    setCurrentHP,
    setCurrentMana,
    currentMana,
    MaxMana,
    setGold,
    gold,
    MaxHP,
    GainXP,
    enemyDefeated,
    character,
  } = useContext(CharacterContext);

  const { addItem } = useContext(InventoryContext);

  const startQuest = (quest: Quest) => {
    setActiveQuests([...activeQuests, quest]);
  };

  const changeLocation = (
    newLocation?: Locations,
    newBgImg?: Media,
    isFighting?: boolean,
    newNpc?: NPCNames
  ) => {
    setPrevLocation(location);
    if (newLocation) setLocation(newLocation);
    if (newBgImg) setBgImg(newBgImg);
    if (isFighting != null) setFighting(isFighting);
    if (newNpc) setNPC(newNpc);
  };

  const fight = (
    damage: number,
    mana: number,
    attack: number,
    enemy: Monster
  ) => {
    const newMonsterHP = Math.max(MonsterHP - attack, 0);
    setCurrentMana(currentMana - mana);
    setCurrentHP((prevHP) => Math.max(prevHP - damage, 0));
    setMonsterHP(newMonsterHP);
    if (newMonsterHP === 0) {
      enemyDefeated(enemy);
    }
  };

  const handleRespawn = () => {
    const bgImage = LocationList[Locations.tavernRoom].media;
    changeLocation(Locations.tavernRoom, bgImage, false);
    setGold(Math.floor(gold * 0.9));
    setCurrentHP(MaxHP);
    setCurrentMana(MaxMana);
  };

  const leave = () => {
    setLocation(PrevLocation);
    setFighting(false);
    setCurrentMana(MaxMana);
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
        GainXP(quest.xp);
        quest.status = QuestStages.Completed;
      }
      removeQuest(quest);
      setDeliveredQuest(true);
    } else alert("You do not have all the items to complete the quest!");
  };

  const handlePurchase = (item: Item) => {
    if (!item.cost) {
      console.error("Item has no cost attribute: ", item);
      return;
    }
    if (item.cost > gold) {
      alert("You do not have enough gold to purchase this item!");
      return;
    }
    if (item.job && item.job !== character.job) {
      alert("You cannot buy an item that does not belong to your class!");
      return;
    }
    if (confirm("are you sure you wanna buy this?") == true) {
      setGold(gold - item.cost);
      addItem(item);
    }
  };

  return (
    <GameContext.Provider
      value={{
        changeLocation,
        deliverQuest,
        activeQuests,
        startQuest,
        removeQuest,
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
        bgImage,
        setBgImg,
        selectedQuest,
        setSelectedQuest,
        item,
        setItem,
        fight,
        leave,
        handleRespawn,
        acceptedQuest,
        setAcceptedQuest,
        deliveredQuest,
        setDeliveredQuest,
        setSelectedItem,
        selectedItem,
        handlePurchase,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
