import { useContext } from "react";
import { InventoryContext } from "../hooks/inventoryContext";
import { CharacterContext } from "../hooks/characterContext";
import Popup from "reactjs-popup";
import { GameContext } from "../hooks/gameContext";

export const Inventory = () => {
  const { inventory } = useContext(InventoryContext);
  const {
    character,
    sellItem,
    equipItem,
    headPiece,
    chest,
    unEquipItem,
    weapon,
    gold,
    consumeItem,
    name,
  } = useContext(CharacterContext);
  const { location } = useContext(GameContext);

  return (
    <div className="w-full">
      <div className="h-[50] ">
        <img
          className="absolute z-30 mt-[-50px] ml-[-20px]"
          src="./assets/bg-images/TopFrame.png"
          alt="Frame"
        />
      </div>
      <div className="bg-beige border-8 border-blue ml-[66px] w-[550px] h-[800px] mt-[20px] relative z-20 flex justify-between">
        <div className="h-auto max-w-[285px]">
          <div className="mt-20 ml-3 flex flex-wrap gap-4">
            {Array.from(inventory).map(([item, quantity], i) => (
              <Popup
                key={i * 3}
                trigger={
                  <button key={i} className="h-[80px] w-[80px] bg-blue mt-5">
                    <img
                      className="w-full"
                      key={i + 10}
                      src={item.media.src}
                      alt={item.media.alt}
                    />
                    <h3 key={i + 100} className="font-uncial text-2xl">
                      {quantity}
                    </h3>
                  </button>
                }
              >
                <div key={i + 23} className="bg-blue border-2 border-black p-2">
                  <ShowStat text="Name" stats={item.name} />
                  <ShowStat text="HP Bonus" stats={item.hp} />
                  <ShowStat text="Attack bonus" stats={item.attack} />
                  <ShowStat text="Healing" stats={item.heal} />
                  <div key={i + 21} className="flex gap-6">
                    {location.includes("Shop") && (
                      <button
                        key={i + 6}
                        className="button2"
                        onClick={() => {
                          sellItem(item);
                        }}
                      >
                        sell
                      </button>
                    )}
                    {["Weapon", "Gauntlet", "Chest", "Boot"].includes(
                      item.type
                    ) && (
                      <button
                        key={i + 97}
                        className="button2"
                        onClick={() => {
                          equipItem(item);
                        }}
                      >
                        Equip
                      </button>
                    )}
                    {item.type === "Potion" && (
                      <button
                        key={i + 76}
                        className="button2"
                        onClick={() => {
                          consumeItem(item);
                        }}
                      >
                        Drink
                      </button>
                    )}
                  </div>
                </div>
              </Popup>
            ))}
          </div>
        </div>
        <div className="mt-16 mr-2">
          <div className="max-w-[200px] z-0 flex flex-col items-center">
            <img
              className="w-full z-0 border-4 border-blue"
              src={character.media.src}
              alt={character.media.src}
            />
            <h2 className="Headline text-black">{name}</h2>
          </div>
          <div className="flex flex-col gap-5 mt-5 items-center">
            <Popup
              trigger={
                <button className="h-[90px] w-[90px] bg-blue">
                  <img src={chest?.media.src} alt={chest?.media.alt} />
                </button>
              }
            >
              {chest && (
                <div className="bg-blue border-2 border-black p-2">
                  <button
                    className="button2"
                    onClick={() => {
                      unEquipItem(chest);
                    }}
                  >
                    Unequip
                  </button>
                </div>
              )}
            </Popup>
            <Popup
              trigger={
                <button className="h-[90px] w-[90px] bg-blue">
                  <img src={headPiece?.media.src} alt={headPiece?.media.alt} />
                </button>
              }
            >
              {headPiece && (
                <div className="bg-blue border-2 border-black p-2">
                  <button
                    className="button2"
                    onClick={() => {
                      unEquipItem(headPiece);
                    }}
                  >
                    Unequip
                  </button>
                </div>
              )}
            </Popup>
            <Popup
              trigger={
                <button className="h-[90px] w-[90px] bg-blue">
                  <img src={weapon?.media.src} alt={weapon?.media.alt} />
                </button>
              }
            >
              {weapon && (
                <div className="bg-blue border-2 border-black p-2">
                  <button
                    className="button2"
                    onClick={() => {
                      unEquipItem(weapon);
                    }}
                  >
                    UnEquip
                  </button>
                </div>
              )}
            </Popup>
          </div>
          <div className="flex justify-center items-center">
            <p className="font-uncial text-2xl">{gold}</p>
            <img
              className="w-[50px]"
              src="./assets/items/coins/gold.png"
              alt="gold coins"
            />
          </div>
        </div>
      </div>
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
  return (
    <h3 className="font-uncial text-2xl text-beige">{`${text}: ${stats}`}</h3>
  );
};
