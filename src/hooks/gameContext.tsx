import { createContext, useContext, useState } from "react";
import { LocationList } from "../gameData/locations";
import { NPCNames, Locations, QuestStages } from "../gameData/Enums";
import { Media } from "../gameData/character/characters";
import { Item } from "../gameData/objects/Item";
import { Quest } from "../gameData/objects/Quest";
import { InventoryContext } from "./inventoryContext";
import { CharacterContext } from "./characterContext";
import { Monster, MonsterNames } from "../gameData/Enemies/enemies";
import { QuestList } from "../gameData/quests/quests";

type GameContextType = {
  location: Locations;
  fighting: boolean;
  PrevLocation: Locations;
  MonsterHP: number;
  NPC: NPCNames | null;
  bgImage: Media;
  selectedQuest: string;
  item: Item | null;
  activeQuests: Quest[];
  acceptedQuest: boolean;
  deliveredQuest: boolean;
  enemy: MonsterNames;

  setLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setEnemy: React.Dispatch<React.SetStateAction<MonsterNames>>;
  setFighting: React.Dispatch<React.SetStateAction<boolean>>;
  setPrevLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setMonsterHP: React.Dispatch<React.SetStateAction<number>>;
  setNPC: React.Dispatch<React.SetStateAction<NPCNames | null>>;
  setBgImg: React.Dispatch<React.SetStateAction<Media>>;
  setSelectedQuest: React.Dispatch<React.SetStateAction<string>>;
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
  setAcceptedQuest: React.Dispatch<React.SetStateAction<boolean>>;
  setDeliveredQuest: React.Dispatch<React.SetStateAction<boolean>>;

  startQuest: (quest: Quest) => void;
  removeQuest: (quest: Quest) => void;
  deliverQuest: (quest: Quest) => void;
  handlePurchase: (item: Item) => void;
  saveGame: () => void;
  startSavedGame: () => void;

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
  const { inventory, removeItem, setInventory } = useContext(InventoryContext);
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
  const [enemy, setEnemy] = useState(MonsterNames.AbyssalSeahorse);

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
    currentHP,
    lvl,
    setMaxHP,
    setMaxMana,
    setMaxXP,
    xp,
    MaxXP,
    setCharacter,
    setXP,
    setLvl,
    setSkill,
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
    if (currentMana < mana) {
      alert("You do not have enough Mana");
      return;
    }
    const newMonsterHP = Math.max(MonsterHP - attack, 0);
    const newCurrentHp = Math.max(currentHP - damage, 0);
    setCurrentMana((prevMana) => Math.max(prevMana - mana, 0));
    setCurrentHP(newCurrentHp);
    setMonsterHP(newMonsterHP);
    if (newMonsterHP === 0) {
      enemyDefeated(enemy);
      setSkill(null);
    }
    if (newCurrentHp === 0) {
      setSkill(null);
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
    const inventoryCopy = new Map(inventory); // Create a copy of the inventory to modify

    // Check if the inventory has all required items in the correct quantities
    const hasAllItems = quest.questItem.every((questItem) => {
      const itemInInventory = Array.from(inventoryCopy).find(
        ([item]) => item.name === questItem
      );
      if (itemInInventory) {
        const [item, count] = itemInInventory;
        if (count > 0) {
          inventoryCopy.set(item, count - 1); // Decrease count in the copied inventory
          return true;
        }
      }
      return false;
    });

    if (hasAllItems) {
      // Update the original inventory by removing the required items
      quest.questItem.forEach((questItem) => {
        const itemInInventory = Array.from(inventory).find(
          ([item]) => item.name === questItem
        );
        if (itemInInventory) {
          const [item, count] = itemInInventory;
          if (count > 1) {
            removeItem(item, 1); // Remove only one of the required item
          } else {
            removeItem(item); // Remove the item completely if it's the last one
          }
        }
      });

      // Process the quest completion
      changeGold(quest.reward);
      GainXP(quest.xp);
      quest.status = QuestStages.Completed;
      removeQuest(quest);
      setDeliveredQuest(true);
    } else {
      alert("You do not have all the items to complete the quest!");
    }
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

  const saveGame = () => {
    const userConfirmed = confirm("Are you sure you wanna save?");

    if (userConfirmed) {
      const serializedInventory = Array.from(inventory.entries());
      const characterStats = {
        character: character,
        MaxHP: MaxHP,
        hp: currentHP,
        MaxMana: MaxMana,
        mana: currentMana,
        MaxXP: MaxXP,
        xp: xp,
        gold: gold,
        Level: lvl,
        QuestLog: activeQuests,
        inventory: serializedInventory,
      };

      localStorage.setItem("characterStats", JSON.stringify(characterStats));
      localStorage.setItem("Quests", JSON.stringify(QuestList));
    }
  };

  const startSavedGame = () => {
    const fromLocal = localStorage.getItem("characterStats");
    if (fromLocal) {
      const stats = JSON.parse(fromLocal);
      const deserializedInventory = new Map<Item, number>(
        stats.inventory.map((entry: [Item, number]) => [entry[0], entry[1]])
      );
      setCharacter(stats.character);
      setMaxHP(stats.MaxHP);
      setCurrentHP(stats.hp);
      setMaxMana(stats.MaxMana);
      setCurrentMana(stats.mana);
      setMaxXP(stats.MaxXP);
      setXP(stats.xp);
      setGold(stats.gold);
      setLvl(stats.Level);
      setActiveQuests(stats.QuestLog);
      setInventory(deserializedInventory);
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
        handlePurchase,
        enemy,
        setEnemy,
        saveGame,
        startSavedGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
