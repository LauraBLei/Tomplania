import { createContext, useContext, useState } from "react";
import { Character, listOfCharacters } from "../gameData/character/characters";
import { InventoryContext } from "./inventoryContext";
import { Item } from "../gameData/objects/Item";
import { Monster } from "../gameData/Enemies/enemies";
import { MonsterLootList } from "../gameData/Enemies/loot";
import { NewQuestItems } from "../gameData/quests/questItems";
import { Skill } from "../gameData/character/skills";

const xpThresholds = [100, 300, 600, 1000, 1500, 2100];

type characterContextType = {
  name: string;
  characterAttack: number;
  character: Character;
  gold: number;
  chest: Item | null;
  headPiece: Item | null;
  weapon: Item | null;
  xp: number;
  MaxXP: number;
  lvl: number;
  currentMana: number;
  currentHP: number;
  MaxHP: number;
  MaxMana: number;
  skill: Skill | null;

  setName: React.Dispatch<React.SetStateAction<string>>;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
  setCharacterAttack: React.Dispatch<React.SetStateAction<number>>;
  setGold: React.Dispatch<React.SetStateAction<number>>;
  setChest: React.Dispatch<React.SetStateAction<Item | null>>;
  setHeadPiece: React.Dispatch<React.SetStateAction<Item | null>>;
  setWeapon: React.Dispatch<React.SetStateAction<Item | null>>;
  setXP: React.Dispatch<React.SetStateAction<number>>;
  setMaxXP: React.Dispatch<React.SetStateAction<number>>;
  setLvl: React.Dispatch<React.SetStateAction<number>>;
  setCurrentHP: React.Dispatch<React.SetStateAction<number>>;
  setCurrentMana: React.Dispatch<React.SetStateAction<number>>;
  setMaxHP: React.Dispatch<React.SetStateAction<number>>;
  setMaxMana: React.Dispatch<React.SetStateAction<number>>;
  setSkill: React.Dispatch<React.SetStateAction<Skill | null>>;

  sellItem: (item: Item) => void;
  equipItem: (item: Item) => void;
  unEquipItem: (item: Item) => void;
  consumeItem: (item: Item) => void;
  changeGold: (amount: number) => void;
  GainXP: (amount: number) => void;
  enemyDefeated: (enemy: Monster) => void;
};

export const CharacterContext = createContext<characterContextType>(
  {} as characterContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const CharacterProvider = ({ children }: ContextProviderProps) => {
  const [name, setName] = useState("Tompe");
  const [character, setCharacter] = useState(listOfCharacters[0]);
  const [characterAttack, setCharacterAttack] = useState(10);
  const [gold, setGold] = useState(10);
  const [chest, setChest] = useState<Item | null>(null);
  const [headPiece, setHeadPiece] = useState<Item | null>(null);
  const [weapon, setWeapon] = useState<Item | null>(null);
  const [xp, setXP] = useState(0);
  const [MaxXP, setMaxXP] = useState(50);
  const [lvl, setLvl] = useState(1);
  const [currentHP, setCurrentHP] = useState(character.maxHealth);
  const [maxHP, setMaxHP] = useState(character.maxHealth);
  const [currentMana, setCurrentMana] = useState(character.mana);
  const [MaxMana, setMaxMana] = useState(character.mana);
  const [skill, setSkill] = useState<Skill | null>(null);

  const { removeItem, addItem } = useContext(InventoryContext);

  const sellItem = (item: Item, quantity: number = 1) => {
    if (item.cost) {
      changeGold(-item.cost);
      removeItem(item, quantity);
    }
  };

  const changeGold = (amount: number) => {
    setGold(gold + amount);
  };

  const equipItem = (item: Item) => {
    const hpBoost = item.hp ? item.hp : 0;
    const attackBoost = item.attack ? item.attack : 0;
    const manaBoost = item.mana ? item.mana : 0;
    switch (item.type) {
      case "Head":
        unEquipItem(headPiece);
        setHeadPiece(item);
        break;
      case "Chest":
        unEquipItem(chest);
        setChest(item);
        break;
      case "Weapon":
        unEquipItem(weapon);
        setWeapon(item);
        break;
      default:
        console.error("Item type not found: ", item);
    }
    setMaxHP(maxHP + hpBoost);
    setCharacterAttack(characterAttack + attackBoost);
    setMaxMana(MaxMana + manaBoost);
    removeItem(item);
  };

  const consumeItem = (item: Item) => {
    // Check that the properties exists, and if not use a default value (0)
    const attackBoost = item.attack ? item.attack : 0;
    const MaxHpBoost = item.hp ? item.hp : 0;
    const heal = item.heal ? item.heal : 0;
    const mana = item.mana ? item.mana : 0;

    const newHp = currentHP + heal;
    const newMaxHp = maxHP + MaxHpBoost;

    setMaxHP(newMaxHp);
    setCurrentHP(newHp >= newMaxHp ? newMaxHp : newHp);
    setCharacterAttack(characterAttack + attackBoost);
    setCurrentMana(currentMana + mana);
    removeItem(item);
  };

  const unEquipItem = (item: Item | null) => {
    // If no item is equipped, just return
    if (item === null) {
      return;
    }

    const hpBoost = item.hp ? item.hp : 0;
    const attackBoost = item.attack ? item.attack : 0;
    const mana = item.mana ? item.mana : 0;

    switch (item.type) {
      case "Head":
        setHeadPiece(null);
        break;
      case "Chest":
        setChest(null);
        break;
      case "Weapon":
        setWeapon(null);
        break;
      default:
        console.error("Could not find item type: ", item);
    }
    setCharacterAttack(characterAttack - attackBoost);
    setMaxHP(maxHP - hpBoost);
    setMaxMana(MaxMana - mana);
    addItem(item);
  };

  const GainXP = (amount: number) => {
    const newXp = xp + amount;
    if (lvl < 6) {
      setXP(newXp);

      if (newXp >= MaxXP) {
        const newLvl = lvl + 1;
        const overFlowXp = newXp - MaxXP;
        const newMaxHp = maxHP + 10;
        const newMaxMana = MaxMana + 5;

        const newMaxXP = xpThresholds[newLvl - 1] || MaxXP;

        setLvl(newLvl);
        setMaxXP(newMaxXP);
        setMaxHP(newMaxHp);
        setMaxMana(newMaxMana);
        setXP(overFlowXp); // Reset XP to the overflow value
      }
    } else {
      setXP(Math.min(newXp, MaxXP));
    }
  };

  const enemyDefeated = (enemy: Monster) => {
    GainXP(enemy.xp);

    for (let i = 0; i < enemy.loot.length; i++) {
      const droppedItems = enemy.loot[i];
      const monsterLootItem = [...MonsterLootList, ...NewQuestItems].find(
        (item) => item.name == droppedItems
      );

      if (!monsterLootItem || !monsterLootItem.dropChance) {
        continue;
      }

      const dropRoll = Math.random();

      if (dropRoll <= monsterLootItem.dropChance) {
        addItem(monsterLootItem);
      }
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        changeGold,
        characterAttack,
        setCharacterAttack,
        character,
        setCharacter,
        name,
        setName,
        gold,
        setGold,
        setChest,
        chest,
        headPiece,
        setHeadPiece,
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
        consumeItem,
        enemyDefeated,
        setCurrentHP,
        setCurrentMana,
        currentMana,
        currentHP,
        MaxHP: maxHP,
        setMaxHP,
        MaxMana,
        setMaxMana,
        skill,
        setSkill,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
