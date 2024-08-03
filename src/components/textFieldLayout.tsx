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
    <div className="flex flex-col items-center  w-full">
      <div className="outerBox">
        <div className="textBox">{children}</div>
      </div>
    </div>
  );
};
