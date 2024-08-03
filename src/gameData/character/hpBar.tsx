import { useContext } from "react";
import { CharacterContext } from "../../hooks/characterContext";

export const HpBarCharacter = () => {
  const { currentHP, MaxHP } = useContext(CharacterContext);

  const hpPercentage = (currentHP / MaxHP) * 100;
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
          {currentHP}/{MaxHP} HP
        </h2>
      </div>
    </div>
  );
};
