import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { CharacterContext } from "../hooks/characterContext";
import { LocationList } from "../gameData/locations";
import { MonstersList } from "../gameData/enemies";

export const HpBarEnemy = () => {
  const context = useContext(GameContext);
  const prevLocation = LocationList[context.PrevLocation];

  const enemy = MonstersList[prevLocation.enemy[0]];

  const currentHP = context.MonsterHP;

  const maxHP = enemy.hp;

  const hpPercentage = (currentHP / maxHP) * 100;

  return (
    <div>
      <div className="hp-bar h-auto">
        <div
          className="h-full bg-green-500"
          style={{ width: `${hpPercentage}%` }}
        ></div>
      </div>
      <div className="bg-black w-full">
        <h2 className="font-uncial text-2xl text-white text-center">
          {currentHP}/{maxHP}
        </h2>
      </div>
    </div>
  );
};

export const HpBarCharacter = () => {
  const CContext = useContext(CharacterContext);

  const currentHP = CContext.currentHP;

  const maxHP = CContext.maxHP;

  const hpPercentage = (currentHP / maxHP) * 100;
  return (
    <div className="w-full">
      <div className="hp-bar">
        <div
          className="h-full bg-green-500"
          style={{ width: `${hpPercentage}%` }}
        ></div>
      </div>
      <div>
        <h2 className="font-uncial text-2xl text-white text-center bg-black">
          {currentHP}/{maxHP}
        </h2>
      </div>
    </div>
  );
};
