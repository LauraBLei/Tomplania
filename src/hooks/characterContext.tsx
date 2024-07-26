import { createContext, useContext, useState } from "react";
import { Character, characters } from "../gameData/character/characters";
import { ArmorType } from "../gameData/armorShop";
import { MonsterLoot } from "../gameData/Enemies/loot";
import { Item } from "../gameData/quests/questItems";
import { PotionType } from "../gameData/potionShop";
import { InventoryContext } from "./inventoryContext";

const xpThresholds = [100, 250, 450, 650, 900, 1300];

type characterContextType = {
  name: string;
  characterAttack: number;
  currentHP: number;
  character: Character;
  maxHP: number;
  gold: number;
  chest: ArmorType | null;
  gauntlet: ArmorType | null;
  boots: ArmorType | null;
  weapon: ArmorType | null;
  xp: number;
  MaxXP: number;
  lvl: number;

  setName: React.Dispatch<React.SetStateAction<string>>;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
  setCharacterAttack: React.Dispatch<React.SetStateAction<number>>;
  setCurrentHP: React.Dispatch<React.SetStateAction<number>>;
  setMaxHP: React.Dispatch<React.SetStateAction<number>>;
  setGold: React.Dispatch<React.SetStateAction<number>>;
  setChest: React.Dispatch<React.SetStateAction<ArmorType | null>>;
  setGauntlet: React.Dispatch<React.SetStateAction<ArmorType | null>>;
  setBoots: React.Dispatch<React.SetStateAction<ArmorType | null>>;
  setWeapon: React.Dispatch<React.SetStateAction<ArmorType | null>>;
  setXP: React.Dispatch<React.SetStateAction<number>>;
  setMaxXP: React.Dispatch<React.SetStateAction<number>>;
  setLvl: React.Dispatch<React.SetStateAction<number>>;
  sellItem: (item: ArmorType | MonsterLoot | Item | PotionType) => void;
  equipItem: (item: ArmorType) => void;
  unEquipItem: (item: ArmorType) => void;
  consumeItem: (item: PotionType) => void;

  GainXP: (amount: number) => void;
  LevelUp: () => void;
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
  const [gold, setGold] = useState(10000);
  const [chest, setChest] = useState<ArmorType | null>(null);
  const [gauntlet, setGauntlet] = useState<ArmorType | null>(null);
  const [boots, setBoots] = useState<ArmorType | null>(null);
  const [weapon, setWeapon] = useState<ArmorType | null>(null);
  const [xp, setXP] = useState(0);
  const [MaxXP, setMaxXP] = useState(100);
  const [lvl, setLvl] = useState(1);
  const { removeItem, addItem } = useContext(InventoryContext);
  // const [x, setX] = useState(new Character2("Knight", ))

  const sellItem = (
    item: ArmorType | MonsterLoot | Item | PotionType,
    quantity: number = 1
  ) => {
    setGold(gold + item.cost);
    removeItem(item, quantity);
  };

  const equipItem = (item: ArmorType, quantity: number = 1) => {
    console.log("equipping item", item);

    unEquipItem(item);

    if (item.type === "Gauntlet") {
      setGauntlet(item);
      setMaxHP(maxHP + item.hp);
    } else if (item.type === "Boot") {
      setBoots(item);
      setMaxHP(maxHP + item.hp);
    } else if (item.type === "Chest") {
      setChest(item);
      setMaxHP(maxHP + item.hp);
    } else if (item.type === "Weapon") {
      setWeapon(item);
      setCharacterAttack(characterAttack + item.attack);
    }

    removeItem(item, quantity);

    console.log("current weapon", weapon);
  };

  const consumeItem = (item: PotionType) => {
    const newHp = currentHP + item.heal;
    setCurrentHP(newHp <= maxHP ? newHp : maxHP);
    setCharacterAttack(characterAttack + item.attack);
    removeItem(item);
  };

  const unEquipItem = (item: ArmorType | null) => {
    console.log("Unequipping item", item);

    if (item === null) {
      return;
    }
    if (item.type === "Weapon") {
      setCharacterAttack(characterAttack + item.attack);
      setWeapon(null);
    } else if (item.type === "Gauntlet") {
      setMaxHP(maxHP - item.hp);
      setGauntlet(null);
    } else if (item.type === "Boot") {
      setMaxHP(maxHP - item.hp);
      setBoots(null);
    } else if (item.type === "Chest") {
      setMaxHP(maxHP - item.hp);
      setChest(null);
    }
    addItem(item);
  };

  const LevelUp = () => {
    const newLvl = lvl + 1;
    const newMaxXP = xpThresholds[newLvl - 1] || MaxXP;

    setLvl(newLvl);
    setMaxXP(newMaxXP);
    setXP(xp - MaxXP); // Reset XP to the overflow value
  };

  const GainXP = (amount: number) => {
    setXP(xp + amount);
    if (xp >= MaxXP) {
      LevelUp();
    }
  };

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
        setChest,
        chest,
        gauntlet,
        setGauntlet,
        boots,
        setBoots,
        weapon,
        setWeapon,
        xp,
        setXP,
        MaxXP,
        setMaxXP,
        equipItem,
        unEquipItem,
        sellItem,
        lvl,
        setLvl,
        GainXP,
        LevelUp,
        consumeItem,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
