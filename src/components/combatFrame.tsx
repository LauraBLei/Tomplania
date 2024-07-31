import { Character } from "../gameData/character/characters";
import { Monster } from "../gameData/Enemies/enemies";

interface CombatFrameProps {
  frameType: string;
  entity: Monster | Character;
}
export const CombatFrame = ({ frameType, entity }: CombatFrameProps) => {
  return (
    <div className="flex flex-col max-w-[400px] mr-10">
      <img
        className={`combatFrame ${frameType}`}
        src={entity.media.src}
        alt={entity.media.alt}
      />
      {/* <HpBarEnemy /> */}
    </div>
  );
};
