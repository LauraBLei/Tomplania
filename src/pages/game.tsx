import { useContext, useEffect } from "react";
import { GameContext } from "../hooks/gameContext";
import { LocationList } from "../gameData/locations";
import { MonstersList } from "../gameData/enemies";
import { HpBarCharacter } from "../components/hpBar";
import { CharacterContext } from "../hooks/characterContext";
import { Inventory } from "../components/inventory";
import { Shop } from "../locations/shop";
import { EnemyLocation } from "../locations/combat";
import { NPCLocation } from "../locations/npcLocation";
import { NPCList, NPCNames } from "../gameData/NPC";
import { QuestFolder } from "../components/questFolder";

export const GamePage = () => {
  const { fighting, location, NPC, bgImage } = useContext(GameContext);

  const bgImageStyle = {
    backgroundImage: `url(${bgImage.src})`,
  };

  return (
    <div className="bg-black w-full h-screen flex justify-center">
      <div
        className="relative max-w-[1200px] w-full max-h-[900px] h-full bg-no-repeat bg-cover flex flex-col bg-center"
        style={bgImageStyle}
      >
        <NormalTop />

        <div className="flex justify-center bg-[#d9bf9e] w-auto place-self-center border-2 border-black">
          <h1 className="text-6xl font-uncial px-6 py-1">{location}</h1>
        </div>

        {fighting ? (
          <EnemyLocation />
        ) : location.includes("Shop") ? (
          <Shop />
        ) : NPC ? (
          <NPCLocation />
        ) : (
          <Location />
        )}
      </div>
    </div>
  );
};

const NormalTop = () => {
  return (
    <div className="flex mr-7 place-self-end mt-7 mb-3">
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-7 font-uncial bg-[#d9bf9e] text-black text-center px-4 py-1 border-2 border-black">
          Map
        </summary>
        <div className="absolute w-full right-0 mt-4 bg-black px-9 py-4 border-2 border-[#d9bf9e] h-auto z-10">
          <img
            src="./assets/bg-images/Tomplania.jpg"
            alt="Map over the world Tomplania"
          />
        </div>
      </details>
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-7 font-uncial bg-[#d9bf9e] text-black text-center px-4 py-1 border-2 border-black">
          Inventory
        </summary>
        <div className="absolute max-w-[800px] right-7 mt-4 bg-black px-9 py-4 border-2 border-[#d9bf9e] h-[600px] z-10">
          <Inventory />
        </div>
      </details>
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-7 font-uncial bg-[#d9bf9e] text-black text-center px-4 py-1 border-2 border-black">
          Quests
        </summary>
        <div className="absolute max-w-[800px] right-7 mt-4 bg-black px-9 py-4 border-2 border-[#d9bf9e] h-auto z-10">
          <QuestFolder />
        </div>
      </details>
    </div>
  );
};

const Location = () => {
  const { name, character } = useContext(CharacterContext);

  const {
    setFighting,
    setMonsterHP,
    setNPC,
    setBgImg,
    location,
    setLocation,
    setPrevLocation,
  } = useContext(GameContext);

  const currentLocation = LocationList[location];

  const bgText = {
    backgroundImage: `url("./assets/bg-images/textbg.png")`,
  };

  useEffect(() => {}, []);

  const checkIfNpcHasBeenVisited = (npcName: NPCNames) => {
    const npc = NPCList.filter((npc) => npcName == npc.type)[0];
    return npc.hasVisited ? npc.name : npc.type;
  };

  return (
    <div
      className="bg-no-repeat bg-cover w-full h-auto px-[60px] py-10 pt-[100px] flex flex-col items-center gap-6 absolute bottom-0 mb-[-350px]"
      style={bgText}
    >
      <div className="flex items-center justify-between w-full ">
        <div className="overflow-hidden w-full max-w-[250px] max-h-[220px] left-0 bottom-[250px] shadow-2xl">
          <img
            src={character.media.src}
            alt={character.media.alt}
            className="w-full h-full border-4 border-black"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-Courier max-h-[220px] overflow-auto ">
            {currentLocation.text.replaceAll("{name}", name)}
          </p>
          <div className="flex flex-wrap gap-4 mt-4 mx-4">
            {currentLocation.path.map((e, i) => (
              <button
                key={i}
                className="button"
                onClick={() => {
                  setLocation(currentLocation.path[i]);
                  setPrevLocation(location);
                  setBgImg(LocationList[e].media);
                }}
              >
                {currentLocation.path[i]}
              </button>
            ))}
            {currentLocation.enemy.map((_, i) => (
              <button
                key={i}
                className="button"
                onClick={() => {
                  setFighting(true);
                  setPrevLocation(location);
                  setMonsterHP(MonstersList[currentLocation.enemy[i]].hp);
                }}
              >
                Fight {currentLocation.enemy[i]}
              </button>
            ))}
            {currentLocation.npc.map((npcName, i) => (
              <button
                key={i}
                className="button"
                onClick={() => {
                  const npc = NPCList.filter((npc) => npcName == npc.type)[0];
                  setPrevLocation(location);
                  setNPC(currentLocation.npc[i]);
                  setBgImg(npc.media);
                  console.log("npc", npc, "npcName:", npcName);
                }}
              >
                Talk with the {checkIfNpcHasBeenVisited(npcName)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <HpBarCharacter />
      </div>
    </div>
  );
};
