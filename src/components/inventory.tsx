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
    <div className="bg-beige p-4 border-4 lg:border-8 border-blue z-20 flex justify-between gap-3">
      <div className="h-auto">
        <div className="flex flex-wrap gap-4 h-auto lg:max-w-[350px]">
          {Array.from(inventory).map(([item, quantity], i) => (
            <Popup
              key={i * 3}
              trigger={
                <button
                  key={i}
                  className="h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] bg-blue mb-4"
                >
                  <div className="h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] overflow-hidden">
                    <img
                      className="w-full"
                      key={i + 10}
                      src={item.media.src}
                      alt={item.media.alt}
                    />
                  </div>
                  <h3 key={i + 100} className="font-uncial text-2xl">
                    {quantity}
                  </h3>
                </button>
              }
            >
              <div key={i + 23} className="bg-blue border-2 border-black p-2">
                <ShowStat text="" stats={item.name} />
                <ShowStat text="HP Bonus" stats={item.hp} />
                <ShowStat text="Attack bonus" stats={item.attack} />
                <ShowStat text="Healing" stats={item.heal} />
                <ShowStat text="Mana" stats={item.mana} />
                <ShowStat text="Price" stats={item.cost} />

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
                  {["Weapon", "Head", "Chest"].includes(item.type) && (
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
      <div className="  flex flex-col gap-2">
        <div className="min-w-[100px] max-w-[300px] z-0 flex flex-col items-center">
          <img
            className="w-full z-0 border-4 border-blue"
            src={character.media.src}
            alt={character.media.src}
          />
          <h2 className="Headline text-blue">{name}</h2>
        </div>
        <div className="flex flex-col gap-5 mt-5 items-center">
          <Popup
            trigger={
              <button className="h-[70px] w-[70px] lg:h-[90px] lg:w-[90px] bg-blue overflow-hidden">
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
              <button className="h-[70px] w-[70px] lg:h-[90px] lg:w-[90px] bg-blue overflow-hidden">
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
              <button className="h-[70px] w-[70px] lg:h-[90px] lg:w-[90px] bg-blue overflow-hidden">
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
          <p className="Headline text-blue">{gold}</p>
          <img
            className="w-[30px] lg:w-[50px]"
            src="./assets/items/coins/gold.png"
            alt="gold coins"
          />
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
  return <h3 className="TextLight">{`${text} ${stats}`}</h3>;
};
