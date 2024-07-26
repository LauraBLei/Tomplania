import { CharacterContext } from "../../hooks/characterContext";
import { useContext } from "react";

export const XpBar = () => {
  const { xp, MaxXP } = useContext(CharacterContext);

  const xpPercentage = (xp / MaxXP) * 100;
  return (
    <div className="w-full">
      <div className="hp-bar relative flex justify-center">
        <div className="w-full">
          <div
            className="h-full bg-[#50889F] left-0"
            style={{ width: `${xpPercentage}%` }}
          ></div>
        </div>
        <h2 className="absolute font-Courier text-xl text-white text-center z-10">
          {xp}/{MaxXP} XP
        </h2>
      </div>
    </div>
  );
};
