import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { LocationList } from "../gameData/locations";
import { MonstersList } from "../gameData/Enemies/enemies";
import { HpBarCharacter } from "../gameData/character/hpBar";
import { CharacterContext } from "../hooks/characterContext";
import { Inventory } from "../components/inventory";
import { Shop } from "../locations/shop";
import { CombatImages, EnemyLocation } from "../locations/combat";
import { NPCLocation } from "../locations/npcLocation";
import { NPCList } from "../gameData/NPC";
import { NPCNames } from "../gameData/Enums";
import { QuestFolder } from "../components/questFolder";
import { XpBar } from "../gameData/character/xpBar";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { TextFieldLayout } from "../components/textFieldLayout";
import { ManaBar } from "../gameData/character/manaBar";

export const GamePage = () => {
  const { fighting, location, NPC, bgImage } = useContext(GameContext);

  const bgImageStyle = {
    backgroundImage: `url(${bgImage.src})`,
  };

  return (
    <div className="bg-black h-screen flex justify-center">
      <div className="w-full flex flex-col items-center max-w-[1200px]">
        <div
          className="relative w-full max-w-[1000px] max-h-[800px] h-full bg-no-repeat bg-cover flex flex-col bg-center gap-5"
          style={bgImageStyle}
        >
          <div className="flex w-full mt-3 justify-between">
            <div className="bg-beige border-2 border-blue h-fit ml-7">
              <h1 className="text-2xl font-Courier px-6 py-1">{location}</h1>
            </div>
            <NormalTop />
          </div>

          {fighting && <CombatImages />}
        </div>
        <TextFieldLayout>
          {fighting ? (
            <EnemyLocation />
          ) : location.includes("Shop") ? (
            <Shop />
          ) : NPC ? (
            <NPCLocation />
          ) : (
            <Location />
          )}
        </TextFieldLayout>
      </div>
    </div>
  );
};

const NormalTop = () => {
  return (
    <div className="flex mr-7  mb-3">
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-7 ">
          <img
            className="icon "
            src="./assets/bg-images/compass.png"
            alt="Icon of a compass"
          />
        </summary>
        <div className="absolute w-full max-w-[800px] right-24 mt-4 z-20  h-auto">
          <div className="ml-24 max-w-[700px] mt-12 border-8 border-blue">
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={4}
              wheel={{ disabled: false }}
              pinch={{ disabled: false }}
              doubleClick={{ disabled: false }}
              panning={{ disabled: false }}
            >
              {() => (
                <>
                  <TransformComponent>
                    <img
                      src="./assets/bg-images/Tomplania.jpg"
                      alt="Map over the world Tomplania"
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      </details>
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-7">
          <img
            className=" icon"
            src="./assets/bg-images/backpack.png"
            alt="Icon of a backpack"
          />
        </summary>
        <div className="absolute max-w-[800px] right-32   px-9 py-4 h-[600px] z-20">
          <Inventory />
        </div>
      </details>
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-7">
          <img
            className="icon"
            src="./assets/bg-images/questlog.png"
            alt="icon of a questlog"
          />
        </summary>
        <div className="absolute max-w-[600px] max-h-[600px] overflow-y-auto w-full right-7 mt-4 bg-beige px-9 py-4 border-8 border-blue h-auto z-10">
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
    location,
    setPrevLocation,
    changeLocation,
  } = useContext(GameContext);

  const currentLocation = LocationList[location];

  const checkIfNpcHasBeenVisited = (npcName: NPCNames) => {
    const npc = NPCList.filter((npc) => npcName == npc.type)[0];
    return npc.hasVisited ? npc.name : npc.type;
  };

  return (
    <div className="flex flex-col items-center">
      <p className="TextDark">
        {currentLocation.text.replaceAll("{name}", name)}
      </p>

      <div className="flex flex-wrap gap-4 mt-4 mx-4 flex-col max-h-[150px] mb-6">
        {currentLocation.path.map((loc, i) => (
          <OptionButton
            index={i}
            text={`${currentLocation.path[i]}`}
            onClick={() =>
              changeLocation(currentLocation.path[i], LocationList[loc].media)
            }
          />
        ))}
        {currentLocation.enemy.map((_, i) => (
          <OptionButton
            index={i}
            text={`Fight ${currentLocation.enemy[i]}`}
            onClick={() => {
              setFighting(true);
              setMonsterHP(MonstersList[currentLocation.enemy[i]].hp);
              setPrevLocation(location);
            }}
          />
        ))}
        {currentLocation.npc.map((npcName, i) => (
          <OptionButton
            index={i}
            text={`Talk with ${checkIfNpcHasBeenVisited(npcName)}`}
            onClick={() => {
              const npc = NPCList.find((npc) => npcName == npc.type);
              changeLocation(location, npc?.media, false, npcName);
            }}
          />
        ))}
      </div>

      <div className="w-full flex mb-4 justify-center">
        <div className="max-w-[600px] w-full flex items-center flex-col gap-4">
          <HpBarCharacter />
          <ManaBar />
          <XpBar />
          <h3 className="font-Courier text-2xl">Level: {lvl}</h3>
        </div>
      </div>
    </div>
  );
};

interface OptionButtonProps {
  onClick: () => void;
  index: number;
  text: string;
}

const OptionButton = ({ onClick, index, text }: OptionButtonProps) => {
  return (
    <div className="flex flex-wrap ml-4">
      <img src="./assets/bg-images/locationDot.png" alt="location dot" />
      <button key={index} className="font-Courier text-xl" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
