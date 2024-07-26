import { createContext, useState } from "react";
import { LocationList } from "../gameData/locations";
import { NPCNames, Locations } from "../gameData/enum";
import { Quest } from "../gameData/quests/quests";
import { Media } from "../gameData/character/characters";
import { ArmorType } from "../gameData/armorShop";
import { PotionType } from "../gameData/potionShop";

type GameContextType = {
  location: Locations;
  fighting: boolean;
  PrevLocation: Locations;
  MonsterHP: number;
  NPC: NPCNames | null;
  activeQuest: Quest | null;
  bgImage: Media;
  selectedQuest: string;
  item: ArmorType | PotionType | null;

  setLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setFighting: React.Dispatch<React.SetStateAction<boolean>>;
  setPrevLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setMonsterHP: React.Dispatch<React.SetStateAction<number>>;
  setNPC: React.Dispatch<React.SetStateAction<NPCNames | null>>;
  setActiveQuest: React.Dispatch<React.SetStateAction<Quest | null>>;
  setBgImg: React.Dispatch<React.SetStateAction<Media>>;
  setSelectedQuest: React.Dispatch<React.SetStateAction<string>>;
  setItem: React.Dispatch<React.SetStateAction<ArmorType | PotionType | null>>;
};
export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const GameProvider = ({ children }: ContextProviderProps) => {
  const [location, setLocation] = useState(Locations.BlackVoid);
  const [fighting, setFighting] = useState(false);
  const [PrevLocation, setPrevLocation] = useState(Locations.BlackVoid);
  const [MonsterHP, setMonsterHP] = useState(100);
  const [NPC, setNPC] = useState<NPCNames | null>(null);
  const [activeQuest, setActiveQuest] = useState<Quest | null>(null);
  const [bgImage, setBgImg] = useState(LocationList[Locations.BlackVoid].media);
  const [selectedQuest, setSelectedQuest] = useState<string>("");
  const [item, setItem] = useState<ArmorType | PotionType | null>(null);

  return (
    <GameContext.Provider
      value={{
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
        activeQuest,
        setActiveQuest,
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
