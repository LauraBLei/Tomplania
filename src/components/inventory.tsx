import { useContext } from "react";
import { CharacterContext } from "../hooks/characterContext";
import Popup from "reactjs-popup";
import { GameContext } from "../hooks/gameContext";
import { PotionType } from "../gameData/potionShop";

export const Inventory = () => {
  const {
    characterAttack,
    weapon,
    setCharacterAttack,
    Inventory,
    setInventory,
    gold,
    gauntlet,
    boots,
    chest,
    maxHP,
    setCurrentHP,
    currentHP,
    sellItem,
    equipItem,
    unEquipItem,
  } = useContext(CharacterContext);
  const { location } = useContext(GameContext);

  return (
    <div>
      <div className="flex mb-6">
        <div className="flex">
          <img
            className="w-[50px] h-[50px]"
            src="./assets/items/coins/gold.png"
            alt="Image og gold coins"
          />
          <h2 className="text-white font-uncial text-2xl">{gold}</h2>
        </div>
      </div>

      <div className="flex gap-6 mb-8">
        <Popup
          trigger={
            <button className="h-[90px] w-[90px] bg-[#d9bf9e]">
              <img src={chest?.media.src} alt={chest?.media.alt} />
            </button>
          }
        >
          {chest && (
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  equipItem(chest);
                }}
              >
                Unequip
              </button>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button className="h-[90px] w-[90px] bg-[#d9bf9e]">
              <img src={gauntlet?.media.src} alt={gauntlet?.media.alt} />
            </button>
          }
        >
          {gauntlet && (
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  unEquipItem(gauntlet);
                }}
              >
                Unequip
              </button>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button className="h-[90px] w-[90px] bg-[#d9bf9e]">
              <img src={boots?.media.src} alt={boots?.media.alt} />
            </button>
          }
        >
          {boots && (
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  unEquipItem(boots);
                }}
              >
                Unequip
              </button>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button className="h-[90px] w-[90px] bg-[#d9bf9e]">
              <img src={weapon?.media.src} alt={weapon?.media.alt} />
            </button>
          }
        >
          {weapon && (
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  unEquipItem(weapon);
                }}
              >
                Unequip
              </button>
            </div>
          )}
        </Popup>
      </div>
      <div className="overflow-y-auto max-h-[300px]  flex gap-6">
        {Inventory.length > 0 ? (
          Inventory.map((item, i) => (
            <Popup
              trigger={
                <button className="h-[80px] w-[80px] bg-[#d9bf9e]">
                  <img key={i} src={item.media.src} alt={item.media.alt} />;
                </button>
              }
            >
              <div className="bg-[#d9bf9e] border-2 border-black p-2">
                <h3 className="font-uncial text-2xl">
                  Price: {`${item.name}`}
                </h3>

                <h3 className="font-uncial text-2xl">
                  Price: {`${item.cost}`}
                </h3>
                {"hp" in item && (
                  <>
                    <h3 className="font-uncial text-2xl">
                      HP Bonus: {`${item.hp}`}
                    </h3>
                  </>
                )}
                {"attack" in item && (
                  <>
                    <h3 className="font-uncial text-2xl">
                      Type: {`${item.type}`}
                    </h3>
                    <h3 className="font-uncial text-2xl">
                      Attack Bonus: {`${item.attack}`}
                    </h3>
                  </>
                )}
                <div className="flex gap-6">
                  {location.includes("Shop") && (
                    <button
                      className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                      onClick={() => {
                        sellItem(item);
                      }}
                    >
                      sell
                    </button>
                  )}
                  {["Weapon", "Gauntlet", "Chest", "Boot"].includes(
                    item.type
                  ) &&
                    "attack" in item && (
                      <button
                        className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                        onClick={() => {
                          equipItem(item);
                        }}
                      >
                        Equip
                      </button>
                    )}
                  {item.type === "Potion" && "currentHP" in item && (
                    <button
                      className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                      onClick={() => {
                        handleConsume(item);
                      }}
                    >
                      Drink
                    </button>
                  )}
                </div>
              </div>
            </Popup>
          ))
        ) : (
          <div>
            <h2 className="text-center text-2xl font-uncial text-white bg-black">
              Your Inventory Is Empty!
            </h2>
          </div>
        )}
        {}
      </div>
    </div>
  );
};
