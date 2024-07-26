import { useContext, useEffect } from "react";
import { GameContext } from "../hooks/gameContext";
import { LocationList } from "../gameData/locations";
import { MonstersList } from "../gameData/Enemies/enemies";
import { HpBarCharacter } from "../gameData/character/hpBar";
import { CharacterContext } from "../hooks/characterContext";
import { Inventory } from "../components/newInventory";
import { Shop } from "../locations/shop";
import { EnemyLocation } from "../locations/combat";
import { NPCLocation } from "../locations/npcLocation";
import { NPCList } from "../gameData/NPC";
import { NPCNames } from "../gameData/enum";
import { QuestFolder } from "../components/questFolder";
import { XpBar } from "../gameData/character/xpBar";

export const GamePage = () => {
  const { fighting, location, NPC, bgImage } = useContext(GameContext);

  const bgImageStyle = {
    backgroundImage: `url(${bgImage.src})`,
  };

  return (
    <div className="bg-black h-screen flex justify-center">
      <div className="bg-black flex  max-w-[1000px] max-h-[700px]">
        <div>
          <div
            className="relative  h-full bg-no-repeat bg-cover flex bg-center"
            style={bgImageStyle}
          >
            <div className="flex w-full mt-3 justify-between">
              <div className="bg-beige border-2 border-blue h-fit ml-7">
                <h1 className="text-2xl font-Courier px-6 py-1">{location}</h1>
              </div>
              <NormalTop />
            </div>
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
    </div>
  );
};

const NormalTop = () => {
  return (
    <div className="flex mr-7  mb-3">
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-7 font-uncial bg-[#d9bf9e] text-black text-center px-4 py-1 border-2 border-black">
          Map
        </summary>
        <div className="absolute w-full max-w-[800px] right-10 mt-4 z-20 bg-black px-9 py-4 border-2 border-[#d9bf9e] h-auto z-10">
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
        <div className="absolute max-w-[800px] right-32   px-9 py-4 h-[600px] z-20">
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
  const { name, lvl } = useContext(CharacterContext);

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

  useEffect(() => {}, []);

  const checkIfNpcHasBeenVisited = (npcName: NPCNames) => {
    const npc = NPCList.filter((npc) => npcName == npc.type)[0];
    return npc.hasVisited ? npc.name : npc.type;
  };

  return (
    <div className="flex flex-col items-center mt-[-70px] ">
      <img
        className="w-[1200px] z-10 relative"
        src="./assets/bg-images/TextField.png"
        alt="Decoration for text field"
      />

      <div className="bg-beige border-8 border-blue max-w-[800px] w-full mt-[-130px] z-0 ">
        <div className="flex items-center justify-between w-full mt-28">
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-Courier max-h-[220px] overflow-auto ">
              {currentLocation.text.replaceAll("{name}", name)}
            </p>
            <div className="flex flex-wrap gap-4 mt-4 mx-4 flex-col max-h-[150px] mb-6">
              {currentLocation.path.map((e, i) => (
                <div className="flex flex-wrap ml-4">
                  <img
                    src="./assets/bg-images/locationDot.png"
                    alt="location dot"
                  />
                  <button
                    key={i}
                    className="font-Courier text-xl"
                    onClick={() => {
                      setLocation(currentLocation.path[i]);
                      setPrevLocation(location);
                      setBgImg(LocationList[e].media);
                    }}
                  >
                    {currentLocation.path[i]}
                  </button>
                </div>
              ))}
              {currentLocation.enemy.map((_, i) => (
                <div className="flex flex-wrap ml-4">
                  <img
                    src="./assets/bg-images/locationDot.png"
                    alt="location dot"
                  />
                  <button
                    key={i}
                    className="font-Courier text-xl"
                    onClick={() => {
                      setFighting(true);
                      setPrevLocation(location);
                      setMonsterHP(MonstersList[currentLocation.enemy[i]].hp);
                    }}
                  >
                    Fight {currentLocation.enemy[i]}
                  </button>
                </div>
              ))}
              {currentLocation.npc.map((npcName, i) => (
                <div className="flex flex-wrap ml-4">
                  <img
                    src="./assets/bg-images/locationDot.png"
                    alt="location dot"
                  />
                  <button
                    key={i}
                    className="font-Courier text-xl"
                    onClick={() => {
                      const npc = NPCList.filter(
                        (npc) => npcName == npc.type
                      )[0];
                      setPrevLocation(location);
                      setNPC(currentLocation.npc[i]);
                      setBgImg(npc.media);
                      console.log("npc", npc, "npcName:", npcName);
                    }}
                  >
                    Talk with the {checkIfNpcHasBeenVisited(npcName)}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex mb-4 justify-center">
          <div className="max-w-[600px] w-full flex items-center flex-col gap-4">
            <HpBarCharacter />
            <XpBar />
            <h3 className="font-Courier text-2xl">Level: {lvl}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
