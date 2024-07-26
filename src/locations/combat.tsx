import { useContext } from "react";
import { useEffect } from "react";
import { CharacterContext } from "../hooks/characterContext";
import { GameContext } from "../hooks/gameContext";
import { MonstersList } from "../gameData/Enemies/enemies";
import { LocationList } from "../gameData/locations";
import { Locations } from "../gameData/enum";
import { HpBarEnemy } from "../gameData/Enemies/hpBar";
import { MonsterLootList } from "../gameData/Enemies/loot";
import { MonsterLoot } from "../gameData/Enemies/loot";
import { QuestItems } from "../gameData/quests/questItems";
import { HpBarCharacter } from "../gameData/character/hpBar";
import { InventoryContext } from "../hooks/inventoryContext";

export const EnemyLocation = () => {
  const { MonsterHP, PrevLocation } = useContext(GameContext);
  const { character, currentHP } = useContext(CharacterContext);

  const prevLocation = LocationList[PrevLocation];
  const enemy = MonstersList[prevLocation.enemy[0]];
  return (
    <div>
      <div></div>
      <div className="w-full flex mt-10">
        <div className="flex justify-between w-full relative z-10 mt-[-600px]">
          <div className="flex flex-col max-w-[400px] ml-10">
            <img
              className="border-double border-spacing-5 border-8 border-s-4 border-green-600"
              src={character.media.src}
              alt={character.media.alt}
            />
            <HpBarCharacter />
          </div>
          <div className="flex flex-col max-w-[400px] mr-10">
            <img
              className="border-double border-spacing-5 border-8 border-s-4 border-red-700"
              src={enemy.media.src}
              alt={enemy.media.alt}
            />
            <HpBarEnemy />
          </div>
        </div>
      </div>
      {MonsterHP <= 0 && currentHP > 0 ? <EnemyDefeated /> : <Fighting />}
    </div>
  );
};

export const EnemyDefeated = () => {
  const { PrevLocation, setLocation, setFighting } = useContext(GameContext);
  const { GainXP } = useContext(CharacterContext);
  const { addItem } = useContext(InventoryContext);
  const prevLocation = LocationList[PrevLocation];
  const enemy = MonstersList[prevLocation.enemy[0]];
  const loot = enemy.loot;

  useEffect(() => {
    GainXP(enemy.xp);
    const droppedItems = [];
    for (let i = 0; i < loot.length; i++) {
      const droppedItem = loot[i];

      if (droppedItem in MonsterLootList) {
        const monsterLootItem: MonsterLoot = MonsterLootList[droppedItem];
        if (Math.random() <= monsterLootItem.dropChance) {
          droppedItems.push(monsterLootItem);
        }
      } else if (droppedItem in QuestItems) {
        const questItem = QuestItems[droppedItem];
        const random = Math.random();
        if (random <= questItem.dropChance) {
          droppedItems.push(questItem);
        }
      }
    }
    addItem(droppedItems);
  }, []);

  return (
    <div>
      <img
        className="w-[1200px] z-10 relative"
        src="./assets/bg-images/TextField.png"
        alt="Decoration for text field"
      />
      <div className="bg-beige border-8 border-blue max-w-[800px] w-full mt-[-130px] z-0 ">
        <h2 className="font-uncial text-5xl">Enemy Defeated</h2>
        <div className=" flex gap-10">
          <button
            className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-4xl"
            onClick={() => {
              setLocation(PrevLocation);
              setFighting(false);
            }}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export const Fighting = () => {
  const CContext = useContext(CharacterContext);
  const context = useContext(GameContext);
  const characterAttack = CContext.characterAttack;
  const prevLocation = LocationList[context.PrevLocation];

  const enemy = MonstersList[prevLocation.enemy[0]];

  const HandleRespawn = () => {
    context.setLocation(Locations.tavernRoom);
    CContext.setGold(Math.floor(CContext.gold * 0.9));
    context.setFighting(false);
    CContext.setCurrentHP(CContext.maxHP);
  };

  return (
    <div className="flex flex-col items-center mt-[-100px] ">
      <img
        className="w-[1200px] z-10 relative"
        src="./assets/bg-images/TextField.png"
        alt="Decoration for text field"
      />
      <div className="bg-beige border-8 border-blue max-w-[800px] w-full mt-[-130px] z-0 ">
        <div className="mt-28 mb-5 flex justify-center">
          {CContext.currentHP === 0 ? (
            <div>
              <h2>You died!</h2>
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-4xl"
                onClick={HandleRespawn}
              >
                Respawn
              </button>
            </div>
          ) : (
            <div className=" flex gap-10">
              <button
                className="button"
                onClick={() => {
                  const MonsterHP = context.MonsterHP - characterAttack;
                  const PlayerHP = CContext.currentHP - enemy.attack;
                  context.setMonsterHP(MonsterHP < 0 ? 0 : MonsterHP);
                  CContext.setCurrentHP(PlayerHP < 0 ? 0 : PlayerHP);
                }}
              >
                Attack
              </button>
              <button
                className="button"
                onClick={() => {
                  context.setLocation(context.PrevLocation);
                  context.setFighting(false);
                }}
              >
                Run
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const LootEnemy = () => {
  const context = useContext(GameContext);
  const prevLocation = LocationList[context.PrevLocation];
  const enemy = MonstersList[prevLocation.enemy[0]];
  const { addItem } = useContext(InventoryContext);

  const loot = enemy.loot;
  loot.map((e) => addItem(MonsterLootList[e]));
};
