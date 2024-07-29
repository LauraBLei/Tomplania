import { useContext } from "react";
// import { useEffect } from "react";
import { CharacterContext } from "../hooks/characterContext";
import { GameContext } from "../hooks/gameContext";
import { MonstersList } from "../gameData/Enemies/enemies";
import { LocationList } from "../gameData/locations";
import { Locations } from "../gameData/Enums";
import { HpBarEnemy } from "../gameData/Enemies/hpBar";
// import { MonsterLootList } from "../gameData/Enemies/loot";
import { HpBarCharacter } from "../gameData/character/hpBar";
// import { InventoryContext } from "../hooks/inventoryContext";
// import { NewQuestItems } from "../gameData/quests/questItems";
// import { Item } from "../gameData/objects/Item";
// import { NewQuestItems, QuestItems } from "../gameData/quests/questItems";

export const EnemyLocation = () => {
  const { MonsterHP, PrevLocation } = useContext(GameContext);
  const { character, currentHP } = useContext(CharacterContext);

  const prevLocation = LocationList[PrevLocation];
  const enemy = MonstersList[prevLocation.enemy[0]];
  return (
    <div>
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

  return (
    <div>
      <div className=" mb-5 flex flex-col justify-center w-full items-center gap-4">
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
  const {
    characterAttack,
    gold,
    maxHP,
    setGold,
    setCurrentHP,
    currentHP,
    enemyDefeated,
  } = useContext(CharacterContext);
  const { PrevLocation, setLocation, setFighting, MonsterHP, setMonsterHP } =
    useContext(GameContext);
  const prevLocation = LocationList[PrevLocation];

  const enemy = MonstersList[prevLocation.enemy[0]];

  const HandleRespawn = () => {
    setLocation(Locations.tavernRoom);
    setGold(Math.floor(gold * 0.9));
    setFighting(false);
    setCurrentHP(maxHP);
  };

  return (
    <div className="flex flex-col items-center mt-[-100px] ">
      <div className="mt-28 mb-5 flex justify-center">
        {currentHP === 0 ? (
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
                const NewMonsterHP =
                  MonsterHP - characterAttack < 0
                    ? 0
                    : MonsterHP - characterAttack;
                const PlayerHP =
                  currentHP - enemy.attack < 0 ? 0 : currentHP - enemy.attack;
                setMonsterHP(NewMonsterHP);
                setCurrentHP(PlayerHP);
                if (NewMonsterHP <= 0) {
                  enemyDefeated(enemy);
                }
              }}
            >
              Attack
            </button>
            <button
              className="button"
              onClick={() => {
                setLocation(PrevLocation);
                setFighting(false);
              }}
            >
              Run
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// export const LootEnemy = () => {
//   const context = useContext(GameContext);
//   const prevLocation = LocationList[context.PrevLocation];
//   const enemy = MonstersList[prevLocation.enemy[0]];
//   const { addItem } = useContext(InventoryContext);

//   const loot = enemy.loot;
//   loot.map((item) => {

//     addItem(MonsterLootList[item])
//   });
// };
