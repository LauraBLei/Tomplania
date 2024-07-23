import { useContext } from "react";
import { CharacterContext } from "../hooks/characterContext";
import Popup from "reactjs-popup";
import { GameContext } from "../hooks/gameContext";
import { ArmorType } from "../gameData/armorShop";
import { MonsterLoot } from "../gameData/loot";
import { Item } from "../gameData/questItems";
import { PotionType } from "../gameData/potionShop";

export const Inventory = () => {
  const {
    characterAttack,
    setWeapon,
    weapon,
    setCharacterAttack,
    Inventory,
    setInventory,
    setGold,
    gold,
    gauntlet,
    boots,
    chest,
    setGauntlet,
    setBoots,
    setMaxHP,
    maxHP,
    setChest,
    setCurrentHP,
    currentHP,
  } = useContext(CharacterContext);
  const { location } = useContext(GameContext);

  const handleSelling = (item: ArmorType | MonsterLoot | Item | PotionType) => {
    setGold(gold + item.cost);
    setInventory(Inventory.filter((invItem) => invItem.name !== item.name));
  };

  const handleEquip = (item: ArmorType) => {
    handleUnequip(item);

    if (item.type === "Gauntlet") {
      setGauntlet(item);
      setMaxHP(maxHP + item.hp);
    } else if (item.type === "Boot") {
      setBoots(item);
      setMaxHP(maxHP + item.hp);
    } else if (item.type === "Chest") {
      setChest(item);
      setMaxHP(maxHP + item.hp);
    } else if (item.type === "weapon") {
      setWeapon(item);
      setCharacterAttack(characterAttack + item.attack);
    }

    setInventory((prevInventory) =>
      prevInventory.filter((invItem) => invItem.name !== item.name)
    );
  };

  const handleUnequip = (item: ArmorType | null) => {
    if (item === null) {
      return;
    }
    if (weapon) {
      setInventory([...Inventory, weapon]);
      setCharacterAttack(characterAttack + item.attack);
    }
    if ("Gauntlet" in item && gauntlet) {
      setInventory([...Inventory, gauntlet]);
      setMaxHP(maxHP - item.hp);
    } else if (item.type === "Boot" && boots) {
      setInventory([...Inventory, boots]);
      setMaxHP(maxHP - item.hp);
    } else if (item.type === "Chest" && chest) {
      setInventory([...Inventory, chest]);
      setMaxHP(maxHP - item.hp);
    }

    if (item.type === "Gauntlet") {
      setGauntlet(null);
    } else if (item.type === "Boot") {
      setBoots(null);
    } else if (item.type === "Chest") {
      setChest(null);
    } else if (item.type === "weapon") {
      setWeapon(null);
    }
  };

  const handleConsume = (item: PotionType) => {
    const newHp = currentHP + item.currentHP;
    setCurrentHP(newHp <= maxHP ? newHp : maxHP);
    setCharacterAttack(characterAttack + item.attack);
    setInventory((prevInventory) =>
      prevInventory.filter((invItem) => invItem.name !== item.name)
    );
  };
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
                  handleUnequip(chest);
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
                  handleUnequip(gauntlet);
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
                  handleUnequip(boots);
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
                  handleUnequip(weapon);
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
                        handleSelling(item);
                      }}
                    >
                      sell
                    </button>
                  )}
                  {item.type ===
                    ("Weapon" || "Gauntlet" || "Chest" || "Boot") &&
                    "attack" in item && (
                      <button
                        className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                        onClick={() => {
                          handleEquip(item);
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
