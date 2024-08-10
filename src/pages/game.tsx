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
import { NPCNames, QuestNames, QuestStages } from "../gameData/Enums";
import { QuestFolder } from "../components/questFolder";
import { XpBar } from "../gameData/character/xpBar";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { TextFieldLayout } from "../components/textFieldLayout";
import { ManaBar } from "../gameData/character/manaBar";
import { QuestList } from "../gameData/quests/quests";
import { Link } from "react-router-dom";

const isMobileDevice = () => {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

export const GamePage = () => {
  const { fighting, location, NPC, bgImage, setSelectedItem, selectedItem } =
    useContext(GameContext);

  const IsMobile = isMobileDevice();
  const bgImageStyle = {
    backgroundImage: `url(${bgImage.src})`,
  };
  const handleContainerClick = () => {
    if (IsMobile && selectedItem) {
      setSelectedItem(null);
    }
  };
  const lastQuest = QuestList[6];
  const gameFinished = lastQuest.status === QuestStages.Completed;
  console.log(gameFinished);

  return (
    <div
      className="bg-black h-screen flex justify-center"
      onClick={() => handleContainerClick()}
    >
      <div className="w-full flex flex-col items-center max-w-[1200px]">
        <div
          className="relative w-full max-w-[1000px] max-h-[800px] h-full bg-no-repeat bg-cover flex flex-col bg-center gap-5 items-center"
          style={bgImageStyle}
        >
          <div className="flex items-center justify-between gap-4 w-full mt-1 lg:mt-3 ">
            <div className="bg-beige border-2 border-blue h-fit ml-1 lg:ml-7">
              <h1 className="text-sm text-nowrap lg:text-2xl font-Courier px-6 py-1">
                {location}
              </h1>
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
          ) : gameFinished ? (
            <GameComplete />
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
    <div className="flex items-center h-full gap-1 md:gap-4">
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-1 lg:mr-7 ">
          <img
            className="icon "
            src="./assets/bg-images/compass.png"
            alt="Icon of a compass"
          />
        </summary>
        <div className="InformationUI">
          <div className=" w-full  border-8 border-blue">
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
        <summary className="cursor-pointer list-none mr-1 lg:mr-7">
          <img
            className=" icon"
            src="./assets/bg-images/backpack.png"
            alt="Icon of a backpack"
          />
        </summary>
        <div className="InformationUI">
          <Inventory />
        </div>
      </details>
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-1 lg:mr-7">
          <img
            className="icon"
            src="./assets/bg-images/questlog.png"
            alt="icon of a questlog"
          />
        </summary>
        <div className="InformationUI overflow-y-auto w-full bg-beige px-9 py-4 border-8 border-blue h-auto ">
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
    setEnemy,
  } = useContext(GameContext);

  const currentLocation = LocationList[location];

  const checkIfNpcHasBeenVisited = (npcName: NPCNames) => {
    const npc = NPCList.filter((npc) => npcName == npc.type)[0];
    return npc.hasVisited ? npc.name : npc.type;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <p className="TextDark">
        {currentLocation.text.replaceAll("{name}", name)}
      </p>

      <div className="flex flex-wrap gap-4 mt-4 overflow-auto lg:mx-4 flex-col max-h-[150px] mb-6">
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
              setEnemy(currentLocation.enemy[i]);
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

      <div className="w-full flex justify-center">
        <div className="max-w-[600px] w-full flex items-center flex-col gap-4">
          <HpBarCharacter />
          <ManaBar />
          <XpBar />
          <h3 className="TextDark">Level: {lvl}</h3>
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
    <div className="flex flex-wrap ml-4 items-center">
      <img
        className=""
        src="./assets/bg-images/locationDot.png"
        alt="location dot"
      />
      <button
        key={index}
        className="TextDark text-wrap max-w-[250px] lg:max-w-[600px] text-left"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

const GameComplete = () => {
  const { setBgImg } = useContext(GameContext);

  const Media = {
    src: "./assets/world/GoldenCity.png",
    alt: "Golden City",
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="TextDark">
        Congratulations! You have successfully overcome all the trials. Your
        courage, skill, and determination have restored peace and order to the
        land.
      </p>
      <p className="TextDark">
        Your time has come to go back to the Land Of The Gods!
      </p>
      <Link
        to="/Credits"
        onClick={() => setBgImg(Media)}
        className="flex gap-2 TextDark"
      >
        <img
          className=""
          src="./assets/bg-images/locationDot.png"
          alt="location dot"
        />
        <p>Go To The Land Of The Gods</p>
      </Link>
    </div>
  );
};
