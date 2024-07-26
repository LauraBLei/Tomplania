import { useContext } from "react";
import { GameContext } from "../../hooks/gameContext";
import { LocationList } from "../locations";
import { MonstersList } from "./enemies";

export const HpBarEnemy = () => {
  const context = useContext(GameContext);
  const prevLocation = LocationList[context.PrevLocation];

  const enemy = MonstersList[prevLocation.enemy[0]];

  const currentHP = context.MonsterHP;

  const maxHP = enemy.hp;

  const hpPercentage = (currentHP / maxHP) * 100;

  return (
    <div className="w-full">
      <div className="hp-bar relative flex justify-center">
        <div className="w-full">
          <div
            className="h-full bg-[#609F50] left-0"
            style={{ width: `${hpPercentage}%` }}
          ></div>
        </div>
        <h2 className="absolute font-Courier text-xl text-white text-center z-10">
          {currentHP}/{maxHP} HP
        </h2>
      </div>
    </div>
  );
};
