import { useContext } from "react";
import { GameContext } from "../../hooks/gameContext";
import { LocationList } from "../locations";
import { MonstersList } from "./enemies";

export const HpBarEnemy = () => {
  const { MonsterHP, PrevLocation } = useContext(GameContext);
  const prevLocation = LocationList[PrevLocation];

  const enemy = MonstersList[prevLocation.enemy[0]];

  const hpPercentage = (MonsterHP / enemy.hp) * 100;

  return (
    <div className="w-full">
      <div className="hp-bar relative flex justify-center">
        <div className="w-full">
          <div
            className="h-full bg-[#609F50] left-0"
            style={{ width: `${hpPercentage}%` }}
          ></div>
        </div>
        <h2 className="absolute hp-bar-text text-center z-10">
          {MonsterHP}/{enemy.hp} HP
        </h2>
      </div>
    </div>
  );
};
