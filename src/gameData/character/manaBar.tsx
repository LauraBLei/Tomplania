import { CharacterContext } from "../../hooks/characterContext";
import { useContext } from "react";
export const ManaBar = () => {
  const { MaxMana, currentMana } = useContext(CharacterContext);

  const manaPercentage = (currentMana / MaxMana) * 100;
  return (
    <div className="w-full">
      <div className="hp-bar relative flex justify-center">
        <div className="w-full">
          <div
            className="h-full bg-[#845dba] left-0"
            style={{ width: `${manaPercentage}%` }}
          ></div>
        </div>
        <h2 className="absolute font-Courier text-xl text-white text-center z-10">
          {currentMana}/{MaxMana} Mana
        </h2>
      </div>
    </div>
  );
};
