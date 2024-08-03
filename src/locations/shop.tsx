import { GameContext } from "../hooks/gameContext";
import { useContext } from "react";
import { LocationList } from "../gameData/locations";
// import { ArmorShopInventory, ArmorType } from "../gameData/armorShop";
// import { PotionShopInventory, PotionType } from "../gameData/potionShop";
import { Locations } from "../gameData/Enums";
import { InventoryContext } from "../hooks/inventoryContext";
import { CharacterContext } from "../hooks/characterContext";
import { ArmorShopInventory } from "../gameData/armorShop";
import { PotionShopInventory } from "../gameData/potionShop";
import { Item } from "../gameData/objects/Item";
import { BlacksmithShopInventory } from "../gameData/blackSmith";

export const Shop = () => {
  const { location, PrevLocation, setLocation, setBgImg, item } =
    useContext(GameContext);

  const currentLocation = LocationList[location];

  return (
    <div className="flex flex-col items-center gap-2">
      {item && (
        <div className="absolute bg-beige border-2 border-blue place-self-center mt-[-400px] px-5 py-3 rounded-md max-w-[600px] z-10">
          <ShowStat text="" stats={item.name} />
          <ShowStat text="Price:" stats={item.cost} />
          <ShowStat text="HP Bonus:" stats={item.hp} />
          <ShowStat text="Attack Bonus" stats={item.attack} />
          <ShowStat text="Class:" stats={item.job} />
          <ShowStat text="Healing:" stats={item.heal} />

          <p className="font-Courier text-2xl border-2 border-black p-2">{`${item.description}`}</p>
        </div>
      )}

      <div className="place-self-start ml-4  flex gap-2">
        <img
          className="h-auto"
          src="./assets/bg-images/locationDot.png"
          alt="location dot"
        />
        <button
          className="TextDark"
          onClick={() => {
            setLocation(PrevLocation);
            setBgImg(LocationList[PrevLocation].media);
          }}
        >
          Go Back
        </button>
      </div>
      <div className="flex  flex-col justify-center items-center w-full max-h-[500px]">
        <p className="TextDark">{currentLocation.text}</p>
        <div className="flex gap-4  mt-4 flex-wrap px-4 lg:px-9 py-4 overflow-y-auto border-2 border-black max-w-[850px] ">
          {location === Locations.ArmorShop ? (
            <MakeInventoryItems list={ArmorShopInventory} />
          ) : location === Locations.PotionShop ? (
            <MakeInventoryItems list={PotionShopInventory} />
          ) : (
            <MakeInventoryItems list={BlacksmithShopInventory} />
          )}
        </div>
      </div>
    </div>
  );
};

type MakeInventoryItemsProps = {
  list: Item[];
};

const MakeInventoryItems = ({ list }: MakeInventoryItemsProps) => {
  const { setGold, gold, character } = useContext(CharacterContext);

  const { addItem } = useContext(InventoryContext);

  const { setItem } = useContext(GameContext);

  const handlePurchase = (item: Item) => {
    if (!item.cost) {
      console.error("Item has no cost attribute: ", item);
      return;
    }
    if (item.cost > gold) {
      alert("You do not have enough gold to purchase this item!");
      return;
    }
    if (item.job !== character.job) {
      alert("You cannot buy an item that does not belong to your class!");
      return;
    }
    if (confirm("are you sure you wanna buy this?") == true) {
      setGold(gold - item.cost);
      addItem(item);
    }
  };

  return (
    <>
      {list.map((e, i) => (
        <div key={i}>
          <button
            className="h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] overflow-hidden object-cover border-2 border-black flex justify-center"
            onClick={() => handlePurchase(e)}
            onMouseEnter={() => setItem(e)}
            onMouseLeave={() => setItem(null)}
          >
            <img
              className="max-h-[50px] lg:ax-h-[80px]"
              key={i}
              src={e.media.src}
              alt={e.media.alt}
            />
          </button>
        </div>
      ))}
    </>
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
  return <h3 className="font-Courier text-2xl">{`${text} ${stats}`}</h3>;
};
