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
import { Locations, NPCNames, QuestStages } from "../gameData/Enums";
import { QuestFolder } from "../components/questFolder";
import { XpBar } from "../gameData/character/xpBar";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { TextFieldLayout } from "../components/textFieldLayout";
import { ManaBar } from "../gameData/character/manaBar";
import { QuestList } from "../gameData/quests/quests";
import { Link } from "react-router-dom";
import { MusicControl } from "../components/musicControl";

export const GamePage = () => {
  const { fighting, location, NPC, bgImage, item } = useContext(GameContext);
  const { skill } = useContext(CharacterContext);

  const bgImageStyle = {
    backgroundImage: `url(${bgImage.src})`,
  };

  const lastQuest = QuestList[6];
  const gameFinished = lastQuest.status === QuestStages.Completed;

  return (
    <div className="bg-black h-screen flex justify-center">
      <div className="w-full flex flex-col items-center max-w-[1200px]">
        <div
          className="relative w-full max-w-[1000px] max-h-[800px] h-full bg-no-repeat bg-cover flex flex-col bg-center gap-5 items-center justify-between"
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
          {fighting && skill && <SkillInfo />}
          {item && location.includes("Shop") && <ItemInfo />}
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
  const { saveGame, saveAndExit } = useContext(GameContext);
  return (
    <div className="flex items-center h-full gap-1 md:gap-4">
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-1 lg:mr-7 ">
          <img
            className="icon"
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
        <div className="InformationUI overflow-y-auto w-full bg-beige px-9 py-4 border-8 border-blue h-auto max-h-[600px]">
          <QuestFolder />
        </div>
      </details>
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-1 lg:mr-7">
          <img
            className="icon"
            src="./assets/bg-images/settings.png"
            alt="icon of a settings wheel"
          />
        </summary>
        <div className="InformationUI max-h-[600px] flex flex-col gap-4 text-center overflow-y-auto w-full bg-beige px-9 py-4 border-8 border-blue h-auto ">
          <div className="flex items-center justify-center gap-5">
            <img
              className="w-8"
              src="./assets/bg-images/musicBlue.png"
              alt="Music Icon"
            />
            <MusicControl />
          </div>

          <details>
            <summary className="button list-none">Tips & Hints</summary>
            <TipsAndHints />
          </details>
          <button className="button" onClick={() => saveGame()}>
            Save Game
          </button>
          <Link className="button" to="/" onClick={() => saveAndExit()}>
            Save & Exit
          </Link>
          <Link className="button" to="/">
            Exit
          </Link>
        </div>
      </details>
    </div>
  );
};

const Location = () => {
  const { name, lvl, setCurrentHP, MaxHP, setCurrentMana, MaxMana } =
    useContext(CharacterContext);
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
  if (location === Locations.RestRoom) {
    setCurrentHP(MaxHP);
    setCurrentMana(MaxMana);
  }
  const { controlMusic } = useContext(GameContext);
  return (
    <div className="flex flex-col items-center w-full">
      <p className="TextDark">
        {currentLocation.text.replaceAll("{name}", name)}
      </p>

      <div className="flex flex-wrap gap-4 mt-4 overflow-auto lg:mx-4 flex-col max-h-[150px] mb-6">
        {currentLocation.path.map((loc, i) => (
          <OptionButton
            index={i}
            key={i}
            text={`${currentLocation.path[i]}`}
            onClick={() =>
              changeLocation(currentLocation.path[i], LocationList[loc].media)
            }
          />
        ))}
        {currentLocation.enemy.map((e, i) => (
          <OptionButton
            index={i}
            text={`Fight ${currentLocation.enemy[i]}`}
            onClick={() => {
              setFighting(true);
              setMonsterHP(MonstersList[e].hp);
              setPrevLocation(location);
              setEnemy(currentLocation.enemy[i]);
              console.log("enemy:", currentLocation.enemy[i]);
              controlMusic(currentLocation.enemy[i], true);
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
    <div
      key={index + 11}
      className="flex flex-wrap ml-4 items-center cursor-pointer"
    >
      <button key={index + 32} className="locationButton" onClick={onClick}>
        <img
          key={index + 12}
          className=""
          src="./assets/bg-images/locationDot.png"
          alt="location dot"
        />
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

const SkillInfo = () => {
  const { skill } = useContext(CharacterContext);
  const { fight, enemy } = useContext(GameContext);
  const currentEnemy = MonstersList[enemy];

  return (
    <div className="bg-beige border-4 border-blue p-4 flex flex-col items-center">
      <h2 className="Headline text-blue">{skill?.name}</h2>
      <p className="TextDark">Attack: {skill?.attack}</p>
      <p className="TextDark">Mana: {skill?.mana}</p>
      <p className="TextDark">Level: {skill?.level}</p>
      <button
        className="button"
        onClick={() =>
          skill
            ? fight(
                currentEnemy.attack,
                skill?.mana,
                skill?.attack,
                currentEnemy
              )
            : ""
        }
      >
        Attack
      </button>
    </div>
  );
};

interface ShowStatProps {
  text: string;
  stats: number | undefined | string;
}
const ShowStat = ({ text, stats }: ShowStatProps) => {
  if (!stats) {
    return <></>;
  }
  return <h3 className="TextDark">{`${text} ${stats}`}</h3>;
};

const ItemInfo = () => {
  const { handlePurchase, item, setItem } = useContext(GameContext);

  return (
    <div className=" bg-beige border-2 border-blue place-self-center px-5 py-3 rounded-md max-w-[600px] z-30">
      <ShowStat text="" stats={item?.name} />
      <ShowStat text="Price:" stats={item?.cost} />
      <ShowStat text="HP Bonus:" stats={item?.hp} />
      <ShowStat text="Attack Bonus" stats={item?.attack} />
      <ShowStat text="Class:" stats={item?.job} />
      <ShowStat text="Healing:" stats={item?.heal} />
      <ShowStat text="Mana:" stats={item?.mana} />

      <p className="TextDark border-2 border-black p-2">{`${item?.description}`}</p>

      <div className="w-full flex justify-center mt-2">
        <button
          onClick={() => {
            item ? handlePurchase(item) : "";

            setItem(null);
          }}
          className="button"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

const TipsAndHints = () => {
  return (
    <div className="mx-5 my-4 flex flex-col gap-4">
      <details>
        <InfoBox summary="Tavern" />
        <div className="mx-4 text-left flex flex-col gap-4 mt-3">
          <p className="TextDark">
            In the tavern you will find 3 different NPC's, other than that it is
            the place you will respawn if you die.
          </p>
          <p className="TextDark">
            The Tavern has a room, if you go to that room, you will heal up, and
            regain your mana.
          </p>
        </div>
      </details>
      <details>
        <InfoBox summary="Combat" />
        <div className="mx-4 text-left flex flex-col gap-4 mt-3">
          <p className="TextDark">You will gain one skill per level.</p>
          <p className="TextDark">
            You will gain mana, hp and attack bonus when levelling.
          </p>
          <p className="TextDark">
            As you level the fights will get harder and you might need potions
            to get through the fights. These can be bought at the potion shop in
            Eldervale, Willowbrook Lane.
          </p>
        </div>
      </details>
      <details>
        <InfoBox summary="Shops" />
        <div className="mx-4 text-left flex flex-col gap-4 mt-3">
          <p className="TextDark">Potion Shop: Eldervale - Willowbrook Lane</p>
          <p className="TextDark">Armor Shop: Aranthria City - Emerald Plaza</p>
          <p className="TextDark">Blacksmith Shop: Riverbend Harbor - Harbor</p>
        </div>
      </details>
      <details>
        <InfoBox summary="NPC" />
        <div className="mx-4 text-left flex flex-col gap-4 mt-3">
          <p className="TextDark">Janus: Circle Of The Gods</p>
          <p className="TextDark">Frederik: Eldervale - Willowbrook Lane</p>
          <p className="TextDark">
            Esther Willow: Aranthria City - Emerald Plaza
          </p>
          <p className="TextDark">Eloween: Whispering Woods - Eloweens Cabin</p>
          <p className="TextDark">
            Dorian Blackwood: Aranthria City - Ironwood Avenue - Tavern
          </p>
          <p className="TextDark">
            Bård: Aranthria City - Ironwood Avenue - Tavern
          </p>
          <p className="TextDark">
            Ella: Aranthria City - Ironwood Avenue - Tavern
          </p>
          <p className="TextDark">Lums: Harbor Path </p>
        </div>
      </details>
    </div>
  );
};

interface InfoBox {
  summary: string;
}

const InfoBox = ({ summary }: InfoBox) => {
  return (
    <summary className="flex cursor-pointer transition-transform scale-95 ease-in-out duration-150 hover:scale-100 ">
      <img
        className=""
        src="./assets/bg-images/locationDot.png"
        alt="location dot"
      />
      <p className="Headline text-blue">{summary}</p>{" "}
    </summary>
  );
};
