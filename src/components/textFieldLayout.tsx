import { useContext } from "react";
import { NPCList } from "../gameData/NPC";
import { GameContext } from "../hooks/gameContext";

interface TextFieldLayoutProps {
  children: React.ReactNode;
}

export const TextFieldLayout = ({ children }: TextFieldLayoutProps) => {
  const { NPC } = useContext(GameContext);

  const npc = NPCList.filter((npc) => npc.type == NPC)[0];

  return (
    <div className="flex flex-col items-center mt-[-70px] w-full">
      <img
        className="textDecoration"
        src="./assets/bg-images/TextField.png"
        alt="Decoration for text field"
      />
      {NPC && (
        <h2 className="absolute z-20 font-Courier font-bold text-3xl text-black text-center ml-[-100px] mt-[85px] ">
          {npc.hasVisited ? npc.name : npc.type}
        </h2>
      )}

      <div className="outerBox">
        <div className="textBox">{children}</div>
      </div>
    </div>
  );
};
