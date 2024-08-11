import { useContext } from "react";
import { GameContext } from "../../hooks/gameContext";
import { MonstersList } from "./enemies";

export const HpBarEnemy = () => {
  const { MonsterHP, enemy } = useContext(GameContext);

  const currentEnemy = MonstersList[enemy];

  const hpPercentage = (MonsterHP / currentEnemy.hp) * 100;

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
          {MonsterHP}/{currentEnemy.hp} HP
        </h2>
      </div>
    </div>
  );
};
