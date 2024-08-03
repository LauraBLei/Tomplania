import { useContext } from "react";
import { CharacterContext } from "../hooks/characterContext";
import { GameContext } from "../hooks/gameContext";
import { MonstersList } from "../gameData/Enemies/enemies";
import { LocationList } from "../gameData/locations";
import { HpBarEnemy } from "../gameData/Enemies/hpBar";

import { HpBarCharacter } from "../gameData/character/hpBar";
import { ManaBar } from "../gameData/character/manaBar";
import { Skill } from "../gameData/character/skills";

const isMobileDevice = () => {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

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
  const { leave } = useContext(GameContext);

  return (
    <div>
      <div className=" mb-5 flex flex-col justify-center w-full items-center gap-4">
        <h2 className="Headline text-blue">Enemy Defeated</h2>
        <div className=" flex gap-10">
          <button
            className="button"
            onClick={() => {
              leave();
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
  const { character, currentHP, lvl } = useContext(CharacterContext);
  const {
    PrevLocation,
    fight,
    leave,
    handleRespawn,
    setSelectedItem,
    selectedItem,
  } = useContext(GameContext);
  const prevLocation = LocationList[PrevLocation];

  const enemy = MonstersList[prevLocation.enemy[0]];

  const skills = character.skills.filter((skills) => lvl >= skills.level);

  const IsMobile = isMobileDevice();

  const handleItemClick = (item: Skill) => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };
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
                    IsMobile
                      ? handleItemClick(skill)
                      : fight(enemy.attack, skill.mana, skill.attack, enemy);
                  }}
                  onMouseEnter={() => setSelectedItem(skill)}
                  onMouseLeave={() => setSelectedItem(null)}
                >
                  <img src={skill.media.src} alt={skill.media.alt} />
                </button>
              ))}
            </div>
            <button
              className="button"
              onClick={() => {
                leave();
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
  const { PrevLocation } = useContext(GameContext);

  const prevLocation = LocationList[PrevLocation];
  const enemy = MonstersList[prevLocation.enemy[0]];

  return (
    <div className="flex w-full justify-between gap-4">
      <div className="flex flex-col max-w-[400px] lg:ml-10">
        <div className="max-h-[300px] overflow-hidden">
          <img
            className="combatFrame border-green-600"
            src={character.media.src}
            alt={character.media.alt}
          />
        </div>
        <HpBarCharacter />
        <ManaBar />
      </div>
      <div className="flex flex-col max-w-[400px] lg:mr-10 ">
        <div className="max-h-[300px] overflow-hidden">
          <img
            className="combatFrame border-red-700"
            src={enemy.media.src}
            alt={enemy.media.alt}
          />
        </div>
        <div className="flex flex-col items-center">
          <HpBarEnemy />
          <h2 className="Headline text-blue rounded-lg bg-beige border-2 border-blue w-full text-center">
            Level: {enemy.level}
          </h2>
        </div>
      </div>
    </div>
  );
};
