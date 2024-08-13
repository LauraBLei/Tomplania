import { useContext } from "react";
import { CharacterContext } from "../hooks/characterContext";
import { GameContext } from "../hooks/gameContext";
import { MonstersList } from "../gameData/Enemies/enemies";
import { HpBarEnemy } from "../gameData/Enemies/hpBar";

import { HpBarCharacter } from "../gameData/character/hpBar";
import { ManaBar } from "../gameData/character/manaBar";

export const EnemyLocation = () => {
  const { MonsterHP } = useContext(GameContext);
  const { currentHP } = useContext(CharacterContext);

  return (
    <div className="w-full">
      {MonsterHP <= 0 && currentHP > 0 ? <EnemyDefeated /> : <Fighting />}
    </div>
  );
};

export const EnemyDefeated = () => {
  const { leave, controlMusic } = useContext(GameContext);

  return (
    <div>
      <div className=" mb-5 flex flex-col justify-center w-full items-center gap-4">
        <h2 className="Headline text-blue">Enemy Defeated</h2>
        <div className=" flex gap-10">
          <button
            className="button"
            onClick={() => {
              leave();
              controlMusic();
            }}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export const Fighting = () => {
  const { character, currentHP, lvl, setSkill } = useContext(CharacterContext);
  const { leave, handleRespawn } = useContext(GameContext);

  const skills = character.skills.filter((skills) => lvl >= skills.level);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-5 flex justify-center w-full">
        {currentHP === 0 ? (
          <div>
            <h2 className="Headline text-blue">You died!</h2>
            <button className="button" onClick={() => handleRespawn()}>
              Respawn
            </button>
          </div>
        ) : (
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-8 flex-wrap">
              {skills.map((skill) => (
                <button
                  className="max-w-[50px] md:max-w-[70px] lg:max-w-[100px]"
                  onClick={() => {
                    setSkill(skill);
                  }}
                >
                  <img src={skill.media.src} alt={skill.media.alt} />
                </button>
              ))}
            </div>
            <button
              className="button"
              onClick={() => {
                leave();
                // controlMusic();
              }}
            >
              Run
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const CombatImages = () => {
  const { character } = useContext(CharacterContext);
  const { enemy } = useContext(GameContext);

  const currentEnemy = MonstersList[enemy];

  return (
    <div className="flex w-full justify-evenly ">
      <div className="combatBox lg:ml-10">
        <div className="max-h-[400px] overflow-hidden">
          <img
            className="combatFrame border-green-600"
            src={character.media.src}
            alt={character.media.alt}
          />
        </div>
        <HpBarCharacter />
        <ManaBar />
      </div>
      <div className="combatBox lg:mr-10 ">
        <div className="max-h-[400px] overflow-hidden">
          <img
            className="combatFrame border-red-700"
            src={currentEnemy.media.src}
            alt={currentEnemy.media.alt}
          />
        </div>
        <div className="flex flex-col items-center">
          <HpBarEnemy />
          <h2 className="Headline text-blue rounded-lg bg-beige border-2 border-blue w-full text-center">
            Level: {currentEnemy.level}
          </h2>
        </div>
      </div>
    </div>
  );
};
