import { createContext, useState } from "react";
import { Character, characters } from "../gameData/characters";
import { ArmorType } from "../gameData/armorShop";
import { MonsterLoot } from "../gameData/loot";
import { Item } from "../gameData/questItems";
import { PotionType } from "../gameData/potionShop";

type characterContextType = {
  name: string;
  characterAttack: number;
  currentHP: number;
  character: Character;
  maxHP: number;
  gold: number;
  Inventory: (ArmorType | MonsterLoot | Item | PotionType)[];
  chest: ArmorType | null;
  gauntlet: ArmorType | null;
  boots: ArmorType | null;
  weapon: ArmorType | null;

  setName: React.Dispatch<React.SetStateAction<string>>;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
  setCharacterAttack: React.Dispatch<React.SetStateAction<number>>;
  setCurrentHP: React.Dispatch<React.SetStateAction<number>>;
  setMaxHP: React.Dispatch<React.SetStateAction<number>>;
  setGold: React.Dispatch<React.SetStateAction<number>>;
  setInventory: React.Dispatch<
    React.SetStateAction<(ArmorType | MonsterLoot | Item | PotionType)[]>
  >;
  setChest: React.Dispatch<React.SetStateAction<ArmorType | null>>;
  setGauntlet: React.Dispatch<React.SetStateAction<ArmorType | null>>;
  setBoots: React.Dispatch<React.SetStateAction<ArmorType | null>>;
  setWeapon: React.Dispatch<React.SetStateAction<ArmorType | null>>;
};

export const CharacterContext = createContext<characterContextType>(
  {} as characterContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const CharacterProvider = ({ children }: ContextProviderProps) => {
  const [name, setName] = useState("Tompe");
  const [character, setCharacter] = useState(characters[0]);
  const [currentHP, setCurrentHP] = useState(100);
  const [characterAttack, setCharacterAttack] = useState(10);
  const [maxHP, setMaxHP] = useState(100);
  const [gold, setGold] = useState(20);
  const [Inventory, setInventory] = useState<
    (PotionType | ArmorType | MonsterLoot | Item)[]
  >([]);
  const [chest, setChest] = useState<ArmorType | null>(null);
  const [gauntlet, setGauntlet] = useState<ArmorType | null>(null);
  const [boots, setBoots] = useState<ArmorType | null>(null);
  const [weapon, setWeapon] = useState<ArmorType | null>(null);

  return (
    <CharacterContext.Provider
      value={{
        currentHP,
        setCurrentHP,
        characterAttack,
        setCharacterAttack,
        character,
        setCharacter,
        name,
        setName,
        maxHP,
        setMaxHP,
        gold,
        setGold,
        Inventory,
        setInventory,
        setChest,
        chest,
        gauntlet,
        setGauntlet,
        boots,
        setBoots,
        weapon,
        setWeapon,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
